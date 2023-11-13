import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { ThemeContext } from './context'
import axios from 'axios'


import Navbar from './layouts/navbar/navbar'
import Products from './layouts/products/products'
import Details from './layouts/Details/Details'

function App() {

  const [count, setCount] = useState(0)

  const [products, setproducts] = useState([])
  const [shoppingCart, setshoppingCart] = useState([])

  const getProducts = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setproducts(response.data)
      })
  }

  useEffect(() => {

    getProducts()

  }, []);

  // useEffect(() => {
  //   console.log(shoppingCart)
  // }, [shoppingCart]);

  return (
    <>
      <ThemeContext.Provider value={{ products, shoppingCart, setshoppingCart }}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/home' element={<Products/>}></Route>
            <Route exact path='/product/:id' element={<Details/>}></Route>
            <Route path='*' element={<Navigate to='/home'/>}></Route>
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  )
}

export default App
