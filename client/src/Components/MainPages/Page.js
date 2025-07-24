import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Product from './Product/Product'
import Home from './Product/Home'
import Moblie from './Product/Mobile'
import Fashion from './Product/Fashion';
import Cart from './Cart/Cart'
import Login from './Login/Login'
import DetailProducts from './Utils/DetailProduct/DetailProducts';
import Register from './Login/Register';

const Page = () => {
  return (
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/product' element={<Product/>} />
     <Route path='/mobile' element={<Moblie/>} />
     <Route path='/fashion' element={<Fashion/>} />
     <Route path='/cart' element={<Cart/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/register' element={<Register/>} />
    <Route path="/detail/:id" element={<DetailProducts />} />
    </Routes>
  )
}

export default Page
