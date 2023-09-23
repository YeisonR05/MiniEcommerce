import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delItem } from '../redux/actions/index';

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  }

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-2 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <img src={cartItem.image} alt={cartItem.title} height="120px" width="110px" />
            </div>
            <div className="col-md-6">
              <h3>{cartItem.title}</h3>
              <p className='lead fw-bold'>${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-2 bg-light rounded-3 py-5">
        <div className="container py-4 d-flex justify-content-center">
          <div className="row">
            <h3 className='mx-auto fw-bold fs-8'>YOUR CART IS EMPTY</h3>
            <div>
              <img src="/assets/images/imgnavbar.png" alt="About Us" height="250px" width="250px" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const button = () => {
    return (
      <div className="container">
        <div className='mx-auto fw-bold my-3'>
        {state.length !== 0 && <p>Total ${totalPrice.toFixed(2)}</p>}
        </div>
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25">Proceed to checkout</NavLink>
        </div>
      </div>
    );
  }

  const totalPrice = state.reduce((total, cartItem) => total + cartItem.price, 0);

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
}

export default Cart;
