import React from 'react'
import './RecItem.css'
const RecItem = ({add,remove,id,name,img,price}) => {
    return (
    <div className='rec-item'>
        <div>
            <img src={img}/>
        </div>
        <div>
            <h3>{name}</h3>
            <p>${price}</p>
        </div>
        <div className='rec-btn-ctn'>
            <button onClick={remove}>Details</button>
            <button onClick={add}>Buy</button>
        </div>
    </div>
    )
}

export default RecItem