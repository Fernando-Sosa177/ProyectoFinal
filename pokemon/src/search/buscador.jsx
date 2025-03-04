import './buscador.css'
import { Buscar } from '../icons.jsx';
function Buscador() {

    return(
        <>
        <h2 className='title'>Busca un pokémon por su nombre o usando su número de la Pokédex Nacional</h2>
        <div className='buscador'>
            <input type='text' placeholder='Encuentra tu pokémon' className='input-buscador'/>
            <button className='btn-buscar'>
            <Buscar />
                Buscar
            </button>
        </div>
        </>
    )
}
export default Buscador;