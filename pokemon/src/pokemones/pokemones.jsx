import usePokemones from '../hook/usepokemones'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cargando from './Cargando'
import Detalles from '../Infopokemon/infopokemon'
import './pokemones.css'
import Buscador from '../Search/buscador'
import { useState } from 'react'

function Pokemon ({ id, name, img, verPokemon}){
    return(
        <div className="pokemon-card" onClick={verPokemon}>
        <img src={img} alt={name} className='pokemon-img'/>
        <p className='pokemon-title'>
        <span>{id}</span>
        <span>{name}</span>
        </p>
        </div>
    )
}
function Pokemones (){

    const { pokemones, masPokemones, verMas, searchPokemon } = usePokemones()
    const [ mostrar, setMostrar ] = useState ({ mostrar: false, pokemon: {} })
    const [ busqueda, setBusqueda ] = useState ('')

    let verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon }) 

    let noVerPokemon = () =>  {
        setMostrar({ mostrar: false, pokemon: {} })
        setBusqueda ('')
    } 

    let buscarPokemon = async (e) => {
        e.preventDefault()

        if(!busqueda) return

        let pokemon = await searchPokemon (busqueda)

        setMostrar ({ mostrar: true, pokemon })
    }
    return(
        <>
            <Detalles { ...mostrar } cerrar = { noVerPokemon }/>
            <Buscador busqueda={busqueda} setBusqueda={setBusqueda} buscarPokemon={buscarPokemon} />
            <InfiniteScroll
            dataLength={pokemones.length}
            next={masPokemones}
            hasMore={verMas}
            loader={<Cargando/>}
            className='pokemones-container'
            >
            { pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id} verPokemon ={() => verPokemon (pokemon)}/> ) }
            </InfiniteScroll>
        </>
    )
}

export default Pokemones;