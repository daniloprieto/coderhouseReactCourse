import React from 'react'
import "./navbar.css"
import CartWidget from './CartWidget'

const Navbar = () => {
    const nameList = ['Home', 'Proyectos', 'Nostoros', 'Contactanos'];
    
    return (
        
        <ul className='ul-navbar'>
            {nameList.map( name => {
                return <li>{name}</li>
            })}
            <li><CartWidget/></li>
        </ul>
        
    )
}

export default Navbar