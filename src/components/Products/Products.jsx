import React, { useState, useEffect, useContext } from 'react'
import Card from '../Card/Card'

import './Products.css'
import { ProductContext } from '../Context/ProductContext'
const Products = () => {

    const { products, loading, getProducts } = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        // Filtrar los productos según la categoría seleccionada
        filterProducts();
    }, [selectedCategory, products]);

    const filterProducts = () => {
        if (selectedCategory === 'all') {
            // Mostrar todos los productos si se selecciona "all"
            setFilteredProducts(products);
        } else {
            // Filtrar los productos según la categoría seleccionada
            const filtered = products.filter((product) => product.category === selectedCategory);
            setFilteredProducts(filtered);
        }
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };



    return (
        <section className='products'>
            <h3 className='pro-title'>Products</h3>
            <section className='select-ctn'>
                <h5>Filter :</h5>
                <select onChange={handleCategoryChange} name="productType" id="productType" value={selectedCategory}>
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
                        filteredProducts?.map(product => {
                            return (<Card key={product.id}{...product} />)
                        })
                }
            </section>
        </section>
    )
}

export default Products