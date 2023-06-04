import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../helpers/getProductById'
import {BsArrowLeft,BsPlusLg,BsFillBagFill} from 'react-icons/bs'
import {AiOutlineMinus} from 'react-icons/ai'
import './Details.css'

const Details = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(0)
    const increment =()=> setCount(count+1)
    const decrement =()=> setCount(count-1)

    const navigate = useNavigate()
    const getProduct = async(id)=>{
        try {
            const data = await getProductById(parseInt(id))
            setProduct(data)
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
    getProduct(id)
    }, [])

    return (
        <section className='details-ctn'>
            <section className='detail-img-ctn'>
                <img className='detail-img' src={product.img} alt={product.name} />
            </section>
            <section className='details-info-ctn'>
                <button onClick={()=>navigate(-1)} className='detail-back-btn'><BsArrowLeft/></button>
                <section className='detail-info-header'>
                    <h3 className='detail-title'>{product.name}</h3>
                </section>
                <section className='detail-info-category'>
                    <h4 className='detail-category'>{product.category}</h4>
                    <p className='detail-price'>${product.price}</p>
                </section>
                <section className='detail-info-buttons'>
                    <button onClick={increment} className='detail-info-btn'><BsPlusLg/></button>
                    <button onClick={decrement} className='detail-info-btn'><AiOutlineMinus/></button>
                    <p>Count: {count}</p>
                </section>
                <button className='detail-buy-btn'><BsFillBagFill/>Buy</button>
            </section>
        </section>
    )
}

export default Details