import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Cart from '../components/Cart/Cart'
import Details from '../components/Details/Details'
import Products from '../components/Products/Products'
import Success from '../components/Success/Success'
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<Details/>}/>
            <Route path='/succesfullpurchase' element={<Success/>}/>
        </Routes>
    )
}

export default AppRouter