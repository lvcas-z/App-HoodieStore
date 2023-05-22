import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Shop from '../components/Shop/Shop'
import Cart from '../components/Cart/Cart'
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    )
}

export default AppRouter