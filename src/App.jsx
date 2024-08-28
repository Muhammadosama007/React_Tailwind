import { useState } from 'react'
import './App.css'
import Home from './Home/Home'
import Example from './NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import About from './About/About'
import ContactUs from './ContactUs/ContactUs'
import Services from './Services/Services'
import E_404 from './Errors/E_404'
import Footer from './Footer/Footer'
import CardDetail from './CarDetail/CardDetail'
import Cart from './Cart/Cart'
function App() {
  const [count, setCount] = useState(0)

  let headerInfo = {
    name: "osama",
    age: 12
  }
  return (
    <>
      <Example />
      <Routes>
        <Route path='/' element={<Home headerInfo={headerInfo} />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<ContactUs />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/details' element={<CardDetail />} />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='*' element={<E_404 />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
