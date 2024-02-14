import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import shoppingcart from "./../../assets/allProduct/Home/shopping-cart.svg";
import "./CartItems.css";
import { AiTwotoneDelete } from "react-icons/ai";
import EmptyCart from "./emptyCart/EmptyCart";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";



const CartItems = () => {
  const { All_Product, cartItems, removeFromCart,addToWishlist ,getTotalCartAmount,getTotalCartItems} = useContext(ShopContext);

  return (
    <div>
      <h1 className="cart-name">My Shopping Cart</h1>
      <div className="itemcart-cart">
        <div className="itemcart-left">
          {All_Product.map((e, index) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={index} className="cartitems">
                  <div className="cartitems-product-details">
                  <Link to={`/product/${e.id}`} target="_blank" > <img src={e.image} alt="" className="cartitems-image" /></Link> 
                    <div className="cartitems-item-container">
                      <div className="cartitems-items-details">
                        <div className="cartitems-items-name">
                          <h3>{e.brand}</h3>
                          <p>{e.name}</p>
                        </div>
                        <div className="cartitems-items-price">
                          <h3> ₹{e.newPrice}</h3>
                          <p> ₹{e.oldPrice}</p>
                        </div>
                      </div>
                      <div className="cartitems-items-size">
                        <p>Size: S</p>
                        <p>Color : {e.color}</p>
                        <p>Qty : {cartItems[e.id]}</p>
                      </div>
                      <div className="cartitems-button">
                      <button onClick={() =>{addToWishlist(e.id),removeFromCart(e.id)}} className="move-btn"> <FaHeart className="move-btn-image" /> Move To Wishlist</button>
                        <button onClick={()=>{removeFromCart(e.id)}} className="remove-btn"> <MdDelete className="remove-btn-image" /></button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cartitems-total-details">
          <h3 className="cartitems-total-title">PRICE DETAILS ({getTotalCartItems()} Items)</h3>
          <div className="cartitems-price-flex">
            <h3>Total MRP</h3>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <div className="cartitems-price-flex">
            <h3>Discount on MRP</h3>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <div className="cartitems-price-flex">
            <h3>Convenience Fee</h3>
            <p>69</p>
          </div>
          <div className="cartitems-price-flex">
            <h3>Total Amount</h3>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
