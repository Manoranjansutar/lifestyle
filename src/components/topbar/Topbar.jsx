import React from 'react';
import './Topbar.css';
import offers from '../.././assets/allProduct/Home/offers.svg';
import { ImMobile } from "react-icons/im";
import { FaHeadset } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='top-bar'> 
    <div className='top-bar-left'>
         <p>
             <Link to='/offers' style={{textDecoration:'none',color:'white',display: 'flex',
                  gap: '5px', alignItems: 'center',textAlign: 'center'}} >
                 <img src={offers} alt="" className='offers'/>
                 Offers
             </Link>
         </p>
         <p>
             <Link to='/downloadApp' style={{textDecoration:'none',color:'white',display:     'flex',  gap: '5px', alignItems: 'center',textAlign: 'center'}}>
                 <ImMobile />
                 Download Our App
             </Link>
         </p>
         <p>
             <FaHeadset />
             Help
         </p>
    </div>
    <div className='top-bar-right'>
         <marquee behavior="loop" direction="left">
             <p>Free Shipping above order Rs799/-</p>
         </marquee>
    </div>
 </div>
  )
}

export default Topbar
