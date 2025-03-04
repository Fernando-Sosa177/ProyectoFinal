import './buscador.css'
function Buscador() {

    return(
        <div className='buscador'>
            <input type='text' placeholder='Buscar...' className='input-buscador'/>
            <button className='btn-buscador'>Buscar</button>
        </div>
    )
}
export default Buscador;