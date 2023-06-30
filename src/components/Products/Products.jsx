import React, { useState, useEffect, useContext } from 'react'
import Card from '../Card/Card'

import './Products.css'
import { ProductContext } from '../Context/ProductContext'
const Products = () => {

    const [originalProducts, setOriginalProducts] = useState([]);
    const { products, setProducts, loading, setLoading, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    const handleFilter = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        let filteredProducts = [];

        switch (selectedValue) {
            case 'Basic':
                filteredProducts = originalProducts.filter((pro) => pro.category === 'Basic');
                break;
            case 'Normal':
                filteredProducts = originalProducts.filter((pro) => pro.category === 'Normal');
                break;
            case 'Special':
                filteredProducts = originalProducts.filter((pro) => pro.category === 'Special');
                break;
            default:
                filteredProducts = originalProducts;
                break;
        }

        setProducts(filteredProducts);
    };

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
                        <h4 className='loading'>Loading...</h4>
                        :
                        products?.map(product => {
                            return (<Card key={product.id}{...product} />)
                        })
                }
            </section>
        </section>
    )
}

export default Products