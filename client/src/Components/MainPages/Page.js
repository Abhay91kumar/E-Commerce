import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Product from './Product/Product'
import Home from './Product/Home'
import Moblie from './Product/Mobile'
import Fashion from './Product/Fashion';
import Cart from './Cart/Cart'
import Login from './Login/Login'
import Register from './Login/Register';
import DetailPage from './Utils/DetailPages/DetailPage';

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
    <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  )
}

export default Page
