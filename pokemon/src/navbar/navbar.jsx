import { useEffect, useState } from 'react';
import { Logo, Luna, Sol } from '../icons.jsx';
import './navbar.css'

const Navbar = () => {

    let [ tema, setTema ] = useState ('claro')

    let handleChange = (e) => setTema(e.target.checked ? 'oscuro' : 'claro')

    useEffect (() => {
        document.body.setAttribute('data-tema', tema)
    }, [tema])
    
    return (
        <nav>
        <Logo className="logo"/>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Tipos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <div className='switch'>
            <Sol/>
            <label>
                <input type='checkbox' className='check-switch' onChange={handleChange} hidden/>
                <span className='slider'></span>
            </label>
            <Luna/>
        </div>
        </nav>
    )
}

export default Navbar;