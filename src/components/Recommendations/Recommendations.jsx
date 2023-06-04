import React, {useState, useEffect } from 'react'
import Card from '../Card/Card'
import { getProducts } from '../../helpers/getProducts'
import './Recommendations.css'

const Recommendations = () => {
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
    const recommendations = products.filter(product=>product.score>=8)
    return (
        <section className='recommendations'>
            <h3 className='rec-title'>Recomendations</h3>
            <section className='rec-ctn'>
                {
                    loading===true
                    ?
                    <h4>Cargando...</h4>
                    :
                    recommendations.map(product => {
                        return(<Card key={product.id}{...product}/>)
                    })
                }
            </section>
        </section>
    )
}

export default Recommendations