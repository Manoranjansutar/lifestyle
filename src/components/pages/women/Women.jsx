import React from 'react'
import './Women.css';
import SlickCarousel3 from '../../layout/slickCarousel-3/SlickCarousel3';
import women_banner1 from '../../../assets/allProduct/Home/women-store-banner1.gif';
import women_banner2 from '../../../assets/allProduct/Home/women-banner-store2.jpg';
import women_banner3 from '../../../assets/allProduct/Home/women-banner-store3.jpg';
import { Link } from 'react-router-dom';
import dresses from './../../../assets/allProduct/Home/dresses.webp';
import topstees from './../../../assets/allProduct/Home/tops-tees.webp';
import bottomwear from './../../../assets/allProduct/Home/bottomwear.webp';
import min40banner from './../../../assets/allProduct/Home/min40womwn-banner.gif';
import fushion from './../../../assets/allProduct/Home/fusion.jpeg';
import kurta from './../../../assets/allProduct/Home/kurta.jpeg';
import suit from './../../../assets/allProduct/Home/suit.jpeg';
import tommyhilfiger from './../../../assets/allProduct/Home/tommyhilfiger-banner.jpeg';
import flithyfaves from './../../../assets/allProduct/Home/flithyfaves.gif';
import TrendingWomen from '../../layout/treanding/TrendingWomen';




const Women = () => {
  return (
    <div className='women-category'>
       <SlickCarousel3 image1={women_banner1} image2={women_banner2} image3={women_banner3}/>
       <div className='women-categories-image'>
          <img src={fushion} alt="" />
          <img src={kurta} alt="" />
          <img src={suit} alt="" />
       </div>
       <img src={tommyhilfiger} alt="" className='banner' />
       <img src={flithyfaves} alt="" className='gif-banner' />
       <TrendingWomen />
       <div className='women-categories'>
           <Link to='/tshirt'><img src={dresses} alt="" /></Link>
           <img src={topstees} alt="" />
           <img src={bottomwear} alt="" />
       </div>
        <img src={min40banner} alt="" className='banner' />
    </div>
  )
}

export default Women;