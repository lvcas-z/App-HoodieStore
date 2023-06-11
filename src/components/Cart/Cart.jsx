import React from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const navigate = useNavigate()
    return (
        <div className='cart'>
            <h3 className='cart-title'>Resumen de compra</h3>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Hoodie Mint</td>
                        <td>10</td>
                        <td>$1100</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Hoodie Mint</td>
                        <td>10</td>
                        <td>$1100</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Hoodie Mint</td>
                        <td>10</td>
                        <td>$1100</td>
                    </tr>
                </tbody>
            </table>
            <p className='cart-total'>Total: $3300 </p>
            <section className='cart-buttons'>
                <button onClick={()=>navigate("/shop")} className='cart-add-btn'>Add Products</button>
                <button className='cart-rm-btn'>Remove All Products</button>
                <button className='cart-buy-btn'>Buy Products</button>
            </section>
            
        </div>
    )
}

export default Cart