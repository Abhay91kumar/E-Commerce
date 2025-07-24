import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState';


const DetailProducts = ({ product }) => {

  const params = useParams();
  const state = useContext(GlobalState);
  // console.log("StateDetails",state)
  const [products] = state.productAPI.products
  const [detailProduct, setDetailProduct] = useState([]);
  const addCart = state.userAPI.addCart;

  useEffect(() => {
    if (params) {
      products.forEach(product => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params, products])

  // console.log("ProductDetails",detailProduct)
  return (
    <div className='details'>
      <img src={detailProduct.image?.url} alt='' width="100" />
      <div className='box_detail'>
        <div className='row'>
          <h2>{detailProduct.title} </h2>
          <h6>{detailProduct.product_id} </h6>
        </div>
        <span>₹ {detailProduct.price}</span>
        <p>{detailProduct.description}</p>
        <p className='sold-count'>Sold: {detailProduct.sold}</p>
        <div className='row_btn'>
          <Link id='btn-add' to='/cart' onClick={() => addCart(detailProduct)} >Add to cart</Link>
          <Link id='btn_buy' to={`#!`} onClick='' >Buy Now</Link>
          </div>
      </div>
    </div>
  )
}

export default DetailProducts
