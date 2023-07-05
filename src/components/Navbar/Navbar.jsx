import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'
import { CartContext } from '../Context/CartContext'
const Navbar = () => {
    const{cartItems} = useContext(CartContext)

    return (
    <nav>
        <Link to='/'><span>HOODIE STORE</span></Link>
        <ul className='nav-links'>
            <Link to='/shop'><li>Shop</li></Link>
            <Link to='/cart'><li className='cart-link'>{cartItems.length}<BsFillCartFill/></li></Link>
        </ul>
    </nav>
    )
}

export default Navbar