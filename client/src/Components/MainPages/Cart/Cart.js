import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';

const Cart = () => {

  const state = useContext(GlobalState);
  const [cart] = state.userAPI.cart;
  const removeFromCart = state.userAPI.removeFromCart;
  const increaseQty = state.userAPI.increaseQty;
  const decreaseQty = state.userAPI.decreaseQty;

  if (cart.length === 0)
    return <h2 style={{ textAlign: 'center', fontSize: '5rem' }}>Cart Empty 😕</h2>;



  return (
    <div>
      {cart.map((product) => (
        <div className='details' key={product._id || product.product_id}>
          <img src={product.image?.url} alt='' width='100' />
          <div className='box_detail'>
            <div className='row'>
              <h2>{product.product_id}</h2>
            </div>
            <div className='btn-quantity'>
              <button onClick={() => decreaseQty(product)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => increaseQty(product)}>+</button>
            </div>
            <p id='total'>Total: ₹ {product.totalPrice}</p>
            <div className='row_btn'>
              <button id="btn-remove" onClick={() => removeFromCart(product)}>Remove</button>
              <Link id='btn_buy' to={`#!`} onClick='' >Buy Now</Link>
            </div>
          </div>
        </div>
      ))}
          <div className='cart-total'>
            <h3>
              Cart Total: ₹ {cart.reduce((sum, item) => sum + item.totalPrice, 0)}
            </h3>
            <Link id='btn_buy' to={`#!`} onClick='' >Buy Now</Link>
          </div>
    </div>
  );
};

export default Cart;
