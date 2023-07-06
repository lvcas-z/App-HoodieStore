import React, { useContext } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
const Cart = () => {
    const { cartItems, removeFromCart, getTotalPrice , handleRemoveAll } = useContext(CartContext)
    const navigate = useNavigate()


    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div className='cart'>
            <h3 className='cart-title'>Purchase Summary</h3>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                            <td>
                                <button className='remove-btn' onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className='cart-total'>Total: ${getTotalPrice()} </p>
            <section className='cart-buttons'>
                <button onClick={() => navigate("/shop")} className='cart-add-btn'>Add Products</button>
                <button onClick={handleRemoveAll} className='cart-rm-btn'>Remove All Products</button>
                <button onClick={()=> navigate("/succesfullpurchase")} className='cart-buy-btn'>Buy Products</button>
            </section>
        </div>
    )
}

export default Cart