import { useState } from 'react'
import Input from '../Inputs/input'
import Boton from '../boton/boton'
import './form.css'

const Form = () => {
    const [formData, setFormData ] = useState({
        nombreApellido:"",
        correo:"",
        contraseña:"",
        confirmarContraseña:""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...FormData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData)
    }
    return (
        <section className='register'>
            <form onSubmit={handleSubmit}>
                <h3>Registro</h3>
                <Input
                placeholder= "Nombre y apellido"
                type= "text"
                required
                name= "nombreApellido"
                onChange = {handleChange}
                />
                <Input
                placeholder= "Correo Electronico"
                type= "email"
                required
                name= "correo"
                onChange = {handleChange}
                />
                <Input
                placeholder="Contraseña"
                type= "password"
                required
                name= "contraseña"
                onChange = {handleChange}
                />
                <Input
                placeholder= "Confirmar contraseña"
                type= "password"
                required
                name= "confirmarContraseña"
                onChange = {handleChange}
                />
                <Boton type="submit">Registrarse</Boton>
            </form>
        </section>
    )
}

export default Form