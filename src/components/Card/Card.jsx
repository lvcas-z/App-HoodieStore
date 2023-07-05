import React, { useContext } from 'react'
import './Card.css'
import { Link } from 'react-router-dom';
import {BsFillBagFill,BsFillEyeFill} from 'react-icons/bs'
import { CartContext } from '../Context/CartContext';
const Card = ({id,name,img,price,category}) => {
    const {addToCart} = useContext(CartContext)
    const productCard = { id, name, img, price, category}

    const handleAddToCart = () => {
        addToCart(productCard, 1);
    }

    return (
    <div className='card-item'>
        <div className='card-img-ctn'>
            <img className='card-img'src={img}/>
        </div>
        <div>
            <div className='card-info'>
                <h3>{name}</h3>
                <p className='card-category'>{category}</p>
                <p>${price}</p>
            </div>
            <div className='card-btn-ctn'>
                <Link to={"/product/" + id}>
                    <button className='card-btn-details'><BsFillEyeFill/>View</button>
                </Link>
                <button onClick={handleAddToCart} className='card-btn-buy'><BsFillBagFill/>Buy</button>
            </div>
        </div>
        
    </div>
    )
}

export default Card