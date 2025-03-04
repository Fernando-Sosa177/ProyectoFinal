import usePokemones from '../hook/usepokemones'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cargando from './cargando'
import './pokemones.css'

function Pokemon ({ id, name, img}){
    return(
        <div className="pokemon-card">
        <a href="#"><img src={img} alt={name} className='pokemon-img'/></a>
        <p className='pokemon-title'>
        <span>{id}</span>
        <span>{name}</span>
        </p>
        </div>
    )
}
function Pokemones (){

    const { pokemones, masPokemones, verMas } = usePokemones()
    return(

        <InfiniteScroll 
        dataLength={pokemones.length}
        next={masPokemones}
        hasMore={verMas}
        loader={<Cargando/>}
        className='pokemones-container'
        >
            { pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id}/> ) }
        </InfiniteScroll>
    )
}

export default Pokemones;