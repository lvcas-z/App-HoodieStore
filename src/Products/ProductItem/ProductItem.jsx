import React from 'react'
const ProductItem = ({add,remove,id,name,img,price}) => {
    
    return (
    <div>
        <div>
            <img src={img}/>
        </div>
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
        <div>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </div>
    </div>
    )
}

export default ProductItem