import React from 'react'
import './Men.css';

import SlickCarousel3 from '../../layout/slickCarousel-3/SlickCarousel3'
import mensBannner_1 from './../../../assets/allProduct/Home/mens-category-banner.gif';
import mensBanner_2 from './../../../assets/allProduct/Home/mens-category-banner.jpg';
import mensBanner_3 from './../../../assets/allProduct/Home/mens-category-banner3.jpg';
import menjeans from './../../../assets/allProduct/Home/men-jeans.jpg';
import menshirt from './../../../assets/allProduct/Home/men-shirt.jpg';
import menstshirt from './../../../assets/allProduct/Home/men-tshirt.jpg';
import { Link } from 'react-router-dom';
import Trending from './../../layout/treanding/Trending.jsx';

const Men = () => {
  return (
    <div className='men-category'>
       <SlickCarousel3 image1={mensBannner_1} image2={mensBanner_2} image3={mensBanner_3} />
       <div className='mens-categories'>
           <Link to='/tshirt'><img src={menstshirt} alt="" /></Link>
           <img src={menshirt} alt="" />
           <img src={menjeans} alt="" />
       </div>
       <h3 className='trending'>TRENDING</h3>
       <Trending/>
    </div>
  )
}

export default Men
