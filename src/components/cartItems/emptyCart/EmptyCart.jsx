import React from 'react';
import emptycart from './../../../assets/allProduct/Home/shopping-cart.svg';

const EmptyCart = () => {
  return (
    <center className='emptycart'>
        <img src={emptycart} alt="" />
        <h2>Your Cart needs some love</h2>
        <p>Fill your cart with the best of LifeStyles</p>
        <p>Start Shopping</p>
    </center>
  )
}

export default EmptyCart
