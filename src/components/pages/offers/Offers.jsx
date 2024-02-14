import React from 'react';
import './Offers.css';
import offer1 from './../../../assets/allProduct/Home/offers1.jpg';
import offer2 from './../../../assets/allProduct/Home/offers2.jpg';
import offer3 from './../../../assets/allProduct/Home/offers3.jpg';
import offer4 from './../../../assets/allProduct/Home/offers4.jpg';
import download from './../../../assets/allProduct/Home/download.jpg';
import { Link } from 'react-router-dom';
import { Pop } from "react-swift-reveal";

const Offers = () => {
  return (
    <div >
        <Pop>
        <div className='offers-title'>
            <h1>Lifestyle Offers</h1>
            <p>Find the best offers across our platforms on this page.</p>
        </div>
        </Pop>
        <Link to='/downloadApp'><img src={download} alt="" className='download-image' /></Link>
       
          <div className='offers-images'>
              <img src={offer1} alt="" />
              <img src={offer2} alt="" />
              <img src={offer3} alt="" />
              <img src={offer4} alt="" />
          </div>
    </div>
  )
}

export default Offers
