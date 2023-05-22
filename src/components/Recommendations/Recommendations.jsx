import React, {useState, useEffect } from 'react'
import RecItem from './RecItem/RecItem'
import { getProducts } from '../../helpers/getProducts'
import './Recommendations.css'

const Recommendations = ({add,remove}) => {
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
        <section className='recommendations'>
            <h3 className='rec-title'>Recomendations</h3>
            <section className='rec-ctn'>
                {
                    loading===true
                    ?
                    <h4>Cargando...</h4>
                    :
                    products.map(product => {
                        return(<RecItem key={product.id} add={add} remove={remove} {...product}/>)
                    })
                }
            </section>
        </section>
    )
}

export default Recommendations