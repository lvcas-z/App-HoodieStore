import React from 'react'
import './Card.css'
const Card = ({add,remove,name,img,price}) => {
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
                <button onClick={add}>Buy</button>
            </div>
        </div>
        
    </div>
    )
}

export default Card