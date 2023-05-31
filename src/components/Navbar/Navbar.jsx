import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'
const Navbar = ({counter}) => {
    return (
    <nav>
        <Link to='/'><span>HOODIE STORE</span></Link>
        <ul className='nav-links'>
            <Link to='/shop'><li>Shop</li></Link>
            <Link to='/cart'><li className='cart-link'><BsFillCartFill/> {counter}</li></Link>
        </ul>
    </nav>
    )
}

export default Navbar