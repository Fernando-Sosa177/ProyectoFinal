import { Logo, Luna, Sol } from './icons.jsx';
import './navbar.css'

const Navbar = () => {
    
    return (
        <nav>
        <Logo className="logo"/>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Pokédex</a></li>
            <li><a href="#">Tipos</a></li>
            <li><a href="#">Herramientas</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <div className='switch'>
            <Sol/>
            <label>
                <input type='checkbox' className='check-switch' hidden/>
                <span className='slider'></span>
            </label>
            <Luna/>
        </div>
        </nav>
    )
}

export default Navbar;