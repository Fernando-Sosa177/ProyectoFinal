import{useState, useEffect} from 'react'
const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

function usePokemones(){
    const   [pokemones, setPokemones] = useState([])
    const   [siguienteUrl , setSiguienteUrl] = useState('')
    const   [verMas, setVerMas] = useState(true)

    let getPokemones = async (url = URL_DEFAULT) => {
        // Recuperamos la lista de pokemones
        let response = await fetch(url)
        let listaPokemones = await response.json()
        let { next,results} = listaPokemones // Guardamos el result
        
        let newPokemones = await Promise.all(
            results.map(async (pokemon) => {
                let response = await fetch(pokemon.url)
                let poke = await response.json()
        
                return {
                name: poke.name,
                id: poke.id,
                img: poke.sprites.other.dream_world.front_default || poke.sprites.front_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png',
                }
            })
        )
        return {next, newPokemones}
        }

        let obtenerPokemones = async () => {
            let {next, newPokemones} = await getPokemones()
            setPokemones(newPokemones)
            setSiguienteUrl(next)
        }

        let masPokemones = async () => {
            let {next, newPokemones} = await getPokemones(siguienteUrl)
            setPokemones(prev => [...prev, ...newPokemones])
            next === null && setVerMas(false)
            setSiguienteUrl(next)
        }
    useEffect(() => { obtenerPokemones () }, [])

    return { pokemones, masPokemones, verMas }
}

export default usePokemones;
