import React, { useContext, useState } from 'react'
import CartItems from '../../cartItems/CartItems'
import EmptyCart from '../../cartItems/emptyCart/EmptyCart'
import { ShopContext } from '../../context/ShopContext';

const Cart = () => {

 const {getTotalCartItems} =useContext(ShopContext);
 const p = getTotalCartItems();

  

  return (
     p>0 ? <CartItems/>:<EmptyCart/>
  )
}

export default Cart
