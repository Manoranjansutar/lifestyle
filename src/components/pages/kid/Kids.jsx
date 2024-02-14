import React from 'react'

import SlickCarousel3 from '../../layout/slickCarousel-3/SlickCarousel3';
import kids_banner1 from '../../../assets/allProduct/Home/kids-banner-store1.webp';
import kids_banner2 from '../../../assets/allProduct/Home/kids-banner-store2.jpg';
import kids_banner3 from '../../../assets/allProduct/Home/kids-banner-store3.jpg';

const Kids = () => {
  return (
    <div className='kids-category'>
         <SlickCarousel3 image1={kids_banner1} image2={kids_banner2} image3={kids_banner3}/>
    </div>
  )
}

export default Kids