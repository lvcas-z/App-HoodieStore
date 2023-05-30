import React, {useState, useEffect }  from 'react'
import Card from '../Card/Card'
import { getProducts } from '../../helpers/getProducts'
import './Products.css'
const Products = () => {
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
    return(
        <section className='products'>
            <h3 className='pro-title'>Products</h3>
            <section className='pro-ctn'>
                {
                    loading===true
                    ?
                    <h4>Cargando...</h4>
                    :
                    products.map(product => {
                        return(<Card key={product.id}{...product}/>)
                    })
                }
            </section>
        </section>
    )
}

export default Products