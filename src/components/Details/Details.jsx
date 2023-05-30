import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../helpers/getProductById'

const Details = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])

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
        <div>
            <h3>DETAILS</h3>
            <h2>{product.name}</h2>
        </div>
    )
}

export default Details