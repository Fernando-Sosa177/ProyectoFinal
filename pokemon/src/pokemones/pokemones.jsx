import usePokemones from '../hook/usepokemones'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cargando from './Cargando'
import Detalles from '../infopokemon/infopokemon'
import './pokemones.css'
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

    const { pokemones, masPokemones, verMas } = usePokemones()
    const [ mostrar, SetMostrar ] = useState ({ mostrar: false, pokemon: {} })

    let verPokemon = (pokemon) => SetMostrar({ mostrar: true, pokemon }) 

    let noVerPokemon = () =>  SetMostrar({ mostrar: false, pokemon: {} }) 

    return(
        <>
            <Detalles { ...mostrar } cerrar = { noVerPokemon }/>
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