import React from 'react'
import All_Product from '../../../assets/data/All_Product'
import Item from './../../layout/item/Item.jsx';
import Sidebar from '../../layout/sidebar/Sidebar.jsx';
import './../wintersale/WinterSale.css';

const Min20 = () => {
  return (
    <div className='wintersale-container'>
    <div className='wintersale-sidebar'> 
        <Sidebar/>
    </div>
     <div  className='wintersale'>
     
       {   
           All_Product.map((item,index) =>{
            
                if(item.discount ===  20){
                     return(
                       <Item key={index}
                              image = {item.image}
                              reviews ={item.reviews}
                              brand={item.brand}
                              name={item.name}
                              discount={item.discount}
                              rating={item.rating}
                              newPrice={item.newPrice}
                              oldPrice={item.oldPrice}
                              imageP1={item.imageP1}
                              id={item.id}/>
                     )
                }
           })
       }
     </div>
   </div>
  )
}

export default Min20
