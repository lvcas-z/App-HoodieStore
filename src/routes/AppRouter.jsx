import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Shop from '../components/Shop/Shop'
import Cart from '../components/Cart/Cart'
import Details from '../components/Details/Details'
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<Details/>}/>
        </Routes>
    )
}

export default AppRouter