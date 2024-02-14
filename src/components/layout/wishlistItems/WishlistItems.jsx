import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';
import './WishlistItems.css';
import removeIcon from './../../../assets/allProduct/Home/cross-circle.svg';




const WishlistItems = () => {

    const { All_Product, wishlistItems ,removeFromWishlist,addToCart } = useContext(ShopContext);


  return (
    <div className='wishlist-flex-items'>
      {
         All_Product.map((e,index) =>{
             if(wishlistItems[e.id] >0){
                 return(
                    <div className='wishlists' key={index}>
                         <div className='wishlist-container'>
                             <img src={e.image} alt="" className='wishlist-image' />
                             <div className='wishlist-details'>
                                 <h3 className='wishlist-brand'>{e.brand}</h3>
                                 <h4 className='wishlist-name truncate'>{e.name}</h4>
                                 <div className='wishlist-price'>
                                     <h4>₹{e.newPrice}</h4>
                                     <h4 className='wishlist-oldprice'>₹{e.oldPrice}</h4>
                                 </div>
                                 <button className='move-cart-btn' onClick={()=>{addToCart(e.id),removeFromWishlist(e.id)}}>Move To Cart</button>
                             </div>
                             <img src={removeIcon} alt="" className='wishlist-remove-icon' onClick= {() => removeFromWishlist(e.id)}/>
                         </div>
                    </div>
                 )
             }
         })
      }
    </div>
  )
}

export default WishlistItems
