import React from 'react'
import './Navbar.css'
const Navbar = ({counter}) => {
    return (
    <nav>
        <span>HOODIE STORE</span>
        <ul className='nav-links'>
            <li>Shop</li>
            <li>Cart : {counter}</li>
        </ul>
    </nav>
    )
}

export default Navbar