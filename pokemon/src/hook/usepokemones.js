import{useState, useEffect} from 'react'
const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

function usePokemones(){
    const   [pokemones, setPokemones] = useState([])
    const   [siguienteUrl , setSiguienteUrl] = useState('')
    const   [verMas, setVerMas] = useState(true)

    let getPokemones = async (url = URL_DEFAULT) => {
        let response = await fetch(url);
        let listaPokemones = await response.json();
        let { next, results } = listaPokemones;
    
        let newPokemones = [];
        for (const pokemon of results) {
            let response = await fetch(pokemon.url);
            let poke = await response.json();

            let abilities = poke.abilities.map(a => a.ability.name)
            let stats = poke.stats.map(s => {return { name: s.stat.name, base: s.base_stat}})
            let types = poke.types.map(t => t.type.name)
    
            newPokemones.push({
                name: poke.name,
                id: poke.id,
                img: poke.sprites.other.dream_world.front_default || poke.sprites.front_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png',
                abilities,
                stats,
                types,
            });
        }
    
        return { next, newPokemones };
    };

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
