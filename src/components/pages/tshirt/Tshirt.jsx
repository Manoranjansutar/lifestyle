import React from 'react'
import Men_Data from '../../../assets/data/Men_Data';
import './Tshirt.css';
import Sidebar from '../../layout/sidebar/Sidebar';
import Item from '../../layout/item/Item';



const Tshirt = () => {
  return (
    <div className='tshirt-container'>
      <div className='tshirt-sidebar'>
          <Sidebar />
      </div>
      <div  className='tshirt'>
      {   
          Men_Data.map((item,index) =>{
            
               if(item.categories === 'T-Shirt'){
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

export default Tshirt
