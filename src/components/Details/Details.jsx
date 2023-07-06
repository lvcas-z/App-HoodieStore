import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeft, BsPlusLg, BsFillBagFill } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import './Details.css';
import { ProductContext } from '../Context/ProductContext';
import { CartContext } from '../Context/CartContext'; 

const Details = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const getProductById = async (id) => {
        const productById = products?.find((product) => product.id === id);
        if (productById) {
            return productById;
        } else {
            throw new Error(`The product with id: ${id} does not exist`);
        }
    };

    const getProduct = async (id) => {
        try {
            const data = await getProductById(id);
            setProduct(data);
        } catch (error) {
            throw error;
        }
    };

    const handleIncrementQuantity = () => {
        if (count >= 15) {
            setMessage('You reached the maximum number of products');
        } else {
            setCount(count + 1);
        }
    };

    const handleDecrementQuantity = () => {
        if (count > 0) {
            setCount(count - 1);
            if (count === 15) {
                setMessage(null);
            }
        }
    };

    const handleAddToCart = () => {
        addToCart(product, count)
        setCount(0)
        setMessage(null)
    };

    useEffect(() => {
        getProduct(id);
    }, [id]);

    return (
        <section className="details-ctn">
            <section className="detail-img-ctn">
                <img className="detail-img" src={product.img} alt={product.name} />
            </section>
            <section className="details-info-ctn">
                <button onClick={() => navigate(-1)} className="detail-back-btn">
                    <BsArrowLeft />
                </button>
                <section className="detail-info-header">
                    <h3 className="detail-title">{product.name}</h3>
                </section>
                <section className='detail-info-category'>
                    <p className="detail-category">{product.category}</p>
                    <p className="detail-price">${product.price}</p>
                </section>
                <section className="detail-quantity-ctn">
                    <button className='detail-info-btn' onClick={handleIncrementQuantity}>
                        <BsPlusLg />
                    </button>
                    <button className={`detail-info-btn ${count <= 0 ? 'disabled' : ''}`} onClick={handleDecrementQuantity}>
                        <AiOutlineMinus />
                    </button>
                    <p className="detail-quantity">Quantity: {count}</p>
                </section>
                {message && <p className="detail-message">{message}</p>}
                <button onClick={handleAddToCart} className="detail-buy-btn">
                    <BsFillBagFill /> Buy
                </button>
            </section>
        </section>
    );
};

export default Details;
