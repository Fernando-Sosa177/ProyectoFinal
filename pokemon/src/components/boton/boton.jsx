import React from 'react'
import "./boton.css"

const Boton = ({type="button", children}) => {
    return (
        <div>
            <button className='button' type={type}>
                {children}
            </button>
        </div>
    )
}

export default Boton