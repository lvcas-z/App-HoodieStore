import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';
import {BsFillBagFill,BsFillEyeFill} from 'react-icons/bs'
const Card = ({id,add,remove,name,img,price,category}) => {
    console.log(add);
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
                <button className='card-btn-buy'><BsFillBagFill/>Buy</button>
            </div>
        </div>
        
    </div>
    )
}

export default Card