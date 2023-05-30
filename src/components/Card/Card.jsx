import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';
const Card = ({id,add,remove,name,img,price}) => {
    console.log(add);
    return (
    <div className='card-item'>
        <div className='card-img-ctn'>
            <img className='card-img'src={img}/>
        </div>
        <div>
            <div>
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
            <div className='card-btn-ctn'>
                <button onClick={remove}>Details</button>
                <Link to={"/product/" + id}>
                    <button>Buy</button>
                </Link>
            </div>
        </div>
        
    </div>
    )
}

export default Card