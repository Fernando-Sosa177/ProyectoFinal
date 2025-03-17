import './buscador.css'
import { Buscar } from '../icons.jsx';
function Buscador({ busqueda, setBusqueda, buscarPokemon}) {

    return(
        <>
        <h2 className='title'>Busca un pokémon por su nombre o usando su número</h2>
        <form className='buscador' onSubmit={buscarPokemon}>
            <input type='text' placeholder='Encuentra tu pokémon' className='input-buscador'
            value={ busqueda }
            onChange={(e) => setBusqueda(e.target.value)} />
            <button className='btn-buscar' type='submit'>
            <Buscar />
                Buscar
            </button>
        </form>
        </>
    )
}
export default Buscador;