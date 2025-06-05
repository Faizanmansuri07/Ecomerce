import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Products from './Pages/Products'
import Layout from './Pages/Layout'
import PageNotFound from './Pages/PageNotFound'
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
  <Route path='/' element={<Layout />}>
  <Route path='*' element={<PageNotFound />}/>
  <Route path='/products' element={<Products />} />
    <Route index element={<Home />} />         ✅ default home
    <Route path='about' element={<About />} /> ✅ /about
    <Route path='cart' element={<Cart />}></Route>
  </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
