import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import ProductProvider from './components/Context/ProductContext'
import CartContextProvider from './components/Context/CartContext'
function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
          <ProductProvider>
            <Navbar/>
              <AppRouter/>
            <Footer/>
          </ProductProvider>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
