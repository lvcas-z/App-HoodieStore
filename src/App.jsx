import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import ProductProvider from './components/Context/ProductContext'
function App() {
  const [counter, setCounter] = useState(0)
  // const maxStock = 15
  // const handleAdd = ()=>{
  //   setCounter(counter+1)
  // }
  // const handleRemove = ()=>{
  //   if(counter>0){
  //     setCounter(counter-1)
  //   }
  // }

  return (
    <BrowserRouter>
      <ProductProvider>
        <Navbar counter={counter}/>
          <AppRouter/>
        <Footer/>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
