import{useState, useEffect} from 'react'
import Navbar from './navbar.jsx'

function App() {
  
  const   [pokemones, setPokemones] = useState([])

  useEffect(() => {
    const getPokemones = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    const listaPokemones = await response.json()
    const {results} = listaPokemones

    const newPokemones = results.map(async (pokemon) => {
      const response = await fetch(pokemon.url)
      const poke = await response.json()

      return {
        name: poke.name,
        id: poke.id,
        img: poke.sprites.other.dream_world.front_default
      }
    })
    setPokemones(await Promise.all(newPokemones))
  }
  getPokemones()
  }), []
  return (
    <>
      <Navbar/>
      <div className="App">
        <h1>Pokédex</h1>

        {
          pokemones.map(pokemon => {
            return (
            <div key={pokemon.id} className="pokemon">
              <img src={pokemon.img} alt={pokemon.name} />
              <h2>{pokemon.name}</h2>
              <p>{pokemon.id}</p>
            </div>
            )
          })
        }
      </div>
    </>
  )}
export default App
