import React, { useContext } from 'react'
import {ShopContext}  from './../../context/ShopContext.jsx';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../../productDisplay/ProductDisplay.jsx';


const Product = () => {

    const {All_Product} = useContext(ShopContext);
    const {productID} = useParams();
    const product = All_Product.find((e)=> e.id === Number(productID))
   
  return (
    <div>
        <ProductDisplay product={product} />
    </div>
  )
}

export default Product
