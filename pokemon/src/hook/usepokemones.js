import{useState, useEffect} from 'react'
const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

function usePokemones(){
    const   [pokemones, setPokemones] = useState([])
    const   [siguienteUrl , setSiguienteUrl] = useState('')
    const   [verMas, setVerMas] = useState(true)

    const getPokemones = async (url = URL_DEFAULT) => {
        // Recuperamos la lista de pokemones
        const response = await fetch(url)
        const listaPokemones = await response.json()
        const { next,results} = listaPokemones // Guardamos el result
        
        const newPokemones = await Promise.all(
            results.map(async (pokemon) => {
                const response = await fetch(pokemon.url)
                const poke = await response.json()
        
                return {
                name: poke.name,
                id: poke.id,
                img: poke.sprites.other.dream_world.front_default || poke.sprites.front_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png',
                }
            })
        )
        return {next, newPokemones}
        }

        const obtenerPokemones = async () => {
            const {next, newPokemones} = await getPokemones()
            setPokemones(newPokemones)
            setSiguienteUrl(next)
        }

        const masPokemones = async () => {
            const {next, newPokemones} = await getPokemones(siguienteUrl)
            setPokemones(prev => [...prev, ...newPokemones])
            next === null && setVerMas(false)
            setSiguienteUrl(next)
        }
    useEffect(() => { obtenerPokemones () }, [])

    return { pokemones, masPokemones, verMas }
}

export default usePokemones;
