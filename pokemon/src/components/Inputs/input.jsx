import React from 'react'
import './input.css'

const Input = ({placeholder, type, required, name, onChange}) => {

    const placeholderModificado= `${placeholder}`;
    return (
        <div className='inputs'>
            <label></label>
            <input
            type={type || "text"} 
            placeholder={placeholderModificado} 
            required={required}
            name={name}
            onChange={onChange}
            />
        </div>
    )
}

export default Input