import React, { useContext } from 'react';
import './Item.css';
import { FaStar } from "react-icons/fa";
import wishlist from './../../../assets/allProduct/Home/wishlist.svg';
import { Link } from 'react-router-dom';
import offer from './../../../assets/allProduct/Home/offer.svg';
import { ShopContext } from '../../context/ShopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Item = (props) => {

  
  const {All_Product} = useContext(ShopContext);
  const {addToCart} = useContext(ShopContext);
  const {addToWishlist} = useContext(ShopContext);

  const notify = () => toast(
    <div className='toastify1'>
       <img src={props.image} alt="" />
       <h4>Added to the Cart</h4>
    </div>
);
 
    




  return (
    <div className='item'>
       <Link to={`/product/${props.id}`} target="_blank" >
         <div className='item-image'>
             <img src={props.image} alt="" />
             <img src={props.imageP1} alt="" className='hover-img' />
         </div>
       </Link>
       <div className='item-discount'>
         <img src={offer} alt="" className='item-discount-offfer-jpg' />
        <div className='item-discount-off'> {props.discount}% OFF</div>
       </div>
       <img src={wishlist} alt="" className='item-wishlist' onClick={() => addToWishlist(props.id)}/>
      
       <div className='item-brand-container'> 
          <h3 className='item-brand'>{props.brand}</h3>
          <div className='item-rating'>
          {props.rating}  <FaStar className='rating-icon' />| {props.reviews}
          </div>
       </div>
       <p className='item-name truncate'>{props.name}</p>
       <div className='item-price'>
          <h4> ₹{props.newPrice} </h4>
          <p>₹{props.oldPrice}</p>
       </div>
       <div className='item-cart'>
           <button className='add-btn'  onClick={() =>{addToCart(props.id), notify()}}>Add To Cart</button>
           <ToastContainer  />
       </div>
    </div>
  )
}

export default Item;
