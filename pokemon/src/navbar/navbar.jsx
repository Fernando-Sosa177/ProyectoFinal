import { useEffect, useState } from 'react';
import { Logo, Luna, Sol } from '../icons.jsx';
import {Link} from 'react-router-dom'
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
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="#">Favoritos</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
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