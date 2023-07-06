import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import './Success.css'

const Success = () => {
    const { getTotalPrice, removeAllItems,handleRemoveAll } = useContext(CartContext);
    const navigate = useNavigate();

    const handleGoToHome = () => {
        handleRemoveAll();
        navigate('/');
        window.location.reload()
    };

    return (
        <div className='success-ctn'>
            <h3 className='success-title'>Thanks for your purchase!</h3>
            <p className='success-price'>Total Price: ${getTotalPrice()}</p>
            <button className='success-btn' onClick={handleGoToHome}>Go to Home</button>
        </div>
    );
};

export default Success;
