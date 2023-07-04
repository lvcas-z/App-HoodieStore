import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { BsArrowLeft, BsPlusLg, BsFillBagFill } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'
import './Details.css'
import { ProductContext } from '../Context/ProductContext'

const Details = () => {
    const { id } = useParams()
    const { products } = useContext(ProductContext)
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(0)

    const navigate = useNavigate()
    const getProductById = async (id) => {
        const productById = products?.find(product => product.id === id)
        if (productById) {
            return productById
        } else {
            throw new Error(`The product with id : ${id} not exists `)
        }
    }

    const getProduct = async (id) => {
        try {
            const data = await getProductById(id)
            setProduct(data)
        } catch (error) {
            throw error
        }
    }

    const handleIncrementQuantity = qty => count >= qty ? console.log("No se pueden agregar mas productos") : setCount(count + 1)
    const handleDecrementQuantity = () => count <= 0 ? console.log("Disabled") : setCount(count - 1);

    useEffect(() => {
        getProduct(id)
    }, [])

    return (
        <section className='details-ctn'>
            <section className='detail-img-ctn'>
                <img className='detail-img' src={product.img} alt={product.name} />
            </section>
            <section className='details-info-ctn'>
                <button onClick={() => navigate(-1)} className='detail-back-btn'><BsArrowLeft /></button>
                <section className='detail-info-header'>
                    <h3 className='detail-title'>{product.name}</h3>
                </section>
                <section className='detail-info-category'>
                    <h4 className='detail-category'>{product.category}</h4>
                    <p className='detail-price'>${product.price}</p>
                </section>
                <section className='detail-info-buttons'>
                    <button onClick={() => handleIncrementQuantity(product.quantity)}
                        className={`detail-info-btn ${count >= product.quantity ? 'disabled' : ''}`}
                    >
                        <BsPlusLg />
                    </button>
                    <button
                        onClick={handleDecrementQuantity}
                        className={`detail-info-btn ${count <= 0 ? 'disabled' : ''}`}
                    >
                        <AiOutlineMinus />
                    </button>
                    <p>Count: {count}</p>
                </section>
                <button className='detail-buy-btn'><BsFillBagFill />Buy</button>
            </section>
        </section>
    )
}

export default Details