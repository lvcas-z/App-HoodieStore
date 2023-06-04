import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { getProducts } from '../../helpers/getProducts'
import './Products.css'
const Products = () => {
    const [loading, setLoading] = useState(false)
    const [originalProducts, setOriginalProducts] = useState([]);
    const [products, setProducts] = useState([])

    const handleFilter = (e) => {
        e.preventDefault()
        let selectedValue = e.target.value
        switch (selectedValue) {
            case "Basic":
                setProducts(originalProducts.filter(pro => pro.category === "Basic"));
                break;
            case "Normal":
                setProducts(originalProducts.filter(pro => pro.category === "Normal"));
                break;
            case "Special":
                setProducts(originalProducts.filter(pro => pro.category === "Special"));
                break;
                default :
                setProducts(originalProducts)
                break
        }
}
    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => {
                setOriginalProducts(res)
                setProducts(res)
            })
            .catch((error) => {
                console.log(error)
            }
            )
            .finally(() => {
                setLoading(false)
            })
    }, [])

        return (
            <section className='products'>
                <h3 className='pro-title'>Products</h3>
                <section className='select-ctn'>
                    <h5>Filter :</h5>
                    <select onChange={handleFilter} name="productType" id="productType">
                        <option value="all">All</option>
                        <option value="Basic" >Basic</option>
                        <option value="Normal">Normal</option>
                        <option value="Special">Special</option>
                    </select>
                </section>
                <section className='pro-ctn'>
                    {
                        loading === true
                            ?
                            <h4>Cargando...</h4>
                            :
                            products.map(product => {
                                return (<Card key={product.id}{...product} />)
                            })
                    }
                </section>
            </section>
        )
    }

    export default Products