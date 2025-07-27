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
import EditItem from '../../api/Modifiers/EditItem';
import DeleteItem from '../../api/Modifiers/DeleteItem'
import CreateItem from '../../api/Modifiers/CreateItem';
import Checkout from '../MainPages/Checkout/Checkout'
import SingleCheckout from './Checkout/SingleCheckout';

const Page = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/mobile' element={<Moblie />} />
      <Route path='/fashion' element={<Fashion />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/checkout/:id' element={<SingleCheckout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/edit/:id" element={<EditItem />} />
      <Route path="/delete/:id" element={<DeleteItem />} />
      <Route path="/create_product" element={<CreateItem />} />


    </Routes>
  )
}

export default Page
