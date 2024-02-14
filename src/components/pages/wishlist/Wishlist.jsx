import React, { useContext, useState } from 'react'
import WishlistItems from '../../layout/wishlistItems/WishlistItems'
import './Wishlist.css';
import { ShopContext } from '../../context/ShopContext';
import emptywishlist from './../../../assets/allProduct/Home/emptyWishlist.svg';


const Wishlist = () => {
  
  const {getTotalWishlistItems} = useContext(ShopContext);
  let  p =  getTotalWishlistItems();
  return (
    p>0  ?  
     <div>
                 <h1 className='wishlist-title'>My Wishlist({p} Items)</h1>
                      <div className='wishlist-items-container'> 
                            <WishlistItems />
                      </div>
              </div> 
              :  <center className='emptycart'>
             <img src={emptywishlist} alt="" />
             <h2>Your Cart needs some love</h2>
             <p>Fill your cart with the best of LifeStyles</p>
             <p>Start Shopping</p>
            </center> 
  )
}

export default Wishlist
