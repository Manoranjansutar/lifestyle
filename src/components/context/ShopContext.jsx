import React, { createContext, useState } from 'react';
import All_Product from '../../assets/data/All_Product';


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {};
  for(let index=0; index<All_Product.length+1;index++){
      cart[index] =0;
  }
  return cart;
}

const getDefaultWishlist = () =>{
  let wishlist = {};
  for(let index=0; index<All_Product.length+1;index++){
      wishlist[index] =0;
  }
  return wishlist;
}



const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());
    const [wishlistItems,setWishlistItems] = useState(getDefaultWishlist());
    
    const addToCart = (itemID) =>{
        setCartItems((prev) =>({...prev,[itemID] : prev[itemID]+1 }));
    }

    const removeFromCart = (itemID) =>{
      setCartItems((prev) =>({...prev,[itemID] : prev[itemID]-1 }))
  }

    const addToWishlist = (itemID) =>{
       setWishlistItems((prev) =>({...prev,[itemID] : 1 }));
}

    const removeFromWishlist = (itemID) =>{
       setWishlistItems((prev) =>({...prev,[itemID] : 0 }))
}

const getTotalCartAmount =  () =>{
     let totalAmount = 100;
     
   return totalAmount
     
}
    const getTotalCartItems = () =>{
         let totalItem = 0;
         for(const items in cartItems){
            if(cartItems[items] > 0){
               totalItem++;
            }
         }
         return totalItem;
    }

    const getTotalWishlistItems = () =>{
      let totalwishlistItem = 0;
      for(const items in cartItems){
         if(wishlistItems[items] > 0){
            totalwishlistItem++;
         }
      }
      return totalwishlistItem;
 }

   const contextValue = {All_Product,cartItems,addToCart,removeFromCart,wishlistItems,        addToWishlist,removeFromWishlist , getTotalCartAmount , getTotalCartItems, getTotalWishlistItems};

  return (
     <ShopContext.Provider value={contextValue}>
          {props.children}
     </ShopContext.Provider>
  )
}

export default ShopContextProvider;