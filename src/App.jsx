import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Products from './Products/Products'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
function App() {
  const [counter, setCounter] = useState(0)
  const maxStock = 15
  const handleAdd = ()=>{
    setCounter(counter+1)
  }
  const handleRemove = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <div>
      <Navbar counter={counter}/>
      <Hero/>
      <Products add = {handleAdd} remove={handleRemove}/>
      <Footer/>
    </div>
  )
}

export default App
