import React, {useState, useEffect } from 'react'
import ProductItem from './ProductItem/ProductItem'
import { getProducts } from '../helpers/getProducts'
import './Products.css'

const Products = ({add,remove}) => {
    const [loading, setLoading] = useState(false)

    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoading(true)
        getProducts()
        .then((res)=>{
            setProducts(res)
        })
        .catch((error)=>{
            console.log(error)}
        )
        .finally(()=>{
            setLoading(false)
        })
    }, [])
    
    return (
        <section className='products-ctn'>
            <h1>Products</h1>
            {
                loading===true
                ?
                <h4>Cargando...</h4>
                :
                products.map(product => {
                    return(<ProductItem key={product.id} add={add} remove={remove} {...product}/>)
                })
            }
        </section>
    )
}

export default Products