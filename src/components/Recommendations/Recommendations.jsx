import React, {useEffect,useContext } from 'react'
import Card from '../Card/Card'
import './Recommendations.css'
import { ProductContext } from '../Context/ProductContext'

const Recommendations = () => {
    const { products,getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    const recommendations = products?.filter(product=>product.score>=8)
    
    return (
        <section className='recommendations'>
            <h3 className='rec-title'>Recomendations</h3>
            <section className='rec-ctn'>
                {
                    recommendations?.map(product => {
                        return(<Card key={product.id}{...product}/>)
                    })
                }
            </section>
        </section>
    )
}

export default Recommendations