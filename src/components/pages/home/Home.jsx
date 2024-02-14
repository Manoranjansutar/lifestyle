
import SlickCarousel3 from '../../layout/slickCarousel-3/SlickCarousel3';
import './Home.css';
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom';
import {  Rotate } from 'react-swift-reveal';
import banner1 from './../../../assets/allProduct/Home/banner1.jpg';
import banner2 from './../../../assets/allProduct/Home/banner3.jpg';
import banner3 from './../../../assets/allProduct/Home/banner4.jpg';
import bank from './../../../assets/allProduct/Home/bank.gif';
import lastchance from './../../../assets/allProduct/Home/last-chance.gif';
import last1 from './../../../assets/allProduct/Home/last1.jpg';
import last2 from './../../../assets/allProduct/Home/last2.jpg';
import last3 from './../../../assets/allProduct/Home/last3.jpg';
import last4 from './../../../assets/allProduct/Home/last4.jpg';
import wintersale from './../../../assets/allProduct/Home/winter-sale.jpg';
import watch from './../../../assets/allProduct/Home/watch-discover.gif';
import header from './../../../assets/allProduct/Home/header.jpg';
import video1 from './../../../assets/allProduct/Home/video1.mp4';
import video2 from './../../../assets/allProduct/Home/video2.mp4';
import video3 from './../../../assets/allProduct/Home/video3.mp4';
import video4 from './../../../assets/allProduct/Home/video4.mp4';
import video5 from './../../../assets/allProduct/Home/video5.mp4';
import globalbrands from './../../../assets/allProduct/Home/global-brands.gif';
import brands1 from './../../../assets/allProduct/Home/brands1.jpg';
import brands2 from './../../../assets/allProduct/Home/brands2.jpg';
import brands3 from './../../../assets/allProduct/Home/brands3.jpg';
import brands4 from './../../../assets/allProduct/Home/brands4.jpg';
import brands5 from './../../../assets/allProduct/Home/brands5.jpg';
// import SlickCarousel6 from '../../layout/slickCarousel-6/SlickCarousel6';
import discount from './../../../assets/allProduct/Home/tempting-discounts.gif';
import min20 from './../../../assets/allProduct/Home/min-20.jpg';
import min40 from './../../../assets/allProduct/Home/min-40.jpg';
import min60 from './../../../assets/allProduct/Home/min-60.jpg';
import SlickCarousel5 from '../../layout/slickCarousel5/SlickCarousel5';
import min50 from './../../../assets/allProduct/Home/min-50.jpg';
import urban from './../../../assets/allProduct/Home/urban.gif';
import faves from './../../../assets/allProduct/Home/faves.gif';
import img1 from './../../../assets/allProduct/Home/img1.jpg';
import img2 from './../../../assets/allProduct/Home/img2.jpg';
import img3 from './../../../assets/allProduct/Home/img3.jpg';
import img4 from './../../../assets/allProduct/Home/img4.jpg';
import img5 from './../../../assets/allProduct/Home/img5.jpg';
import img6 from './../../../assets/allProduct/Home/img6.jpg';
import urban1 from './../../../assets/allProduct/Home/urban1.jpeg';
import urban2 from './../../../assets/allProduct/Home/urban2.jpeg';
import urban3 from './../../../assets/allProduct/Home/urban3.jpeg';
import urban4 from './../../../assets/allProduct/Home/urban4.jpeg';
import customertestimonial from './../../../assets/allProduct/Home/customer-testimonials.gif';
import testimonials1 from './../../../assets/allProduct/Home/testimonials1.jpg';
import testimonials2 from './../../../assets/allProduct/Home/testimonials2.jpg';
import testimonials3 from './../../../assets/allProduct/Home/testimonial4..jpg';
import personalshopper from './../../../assets/allProduct/Home/personal-shopper.webp';
import sale from './../../../assets/allProduct/Home/saleunreal.jpg';



// import boysbanner1 from './../../../assets/allProduct/Home/boys-banner1.jpg';
// import boysbanner2 from './../../../assets/allProduct/Home/boys-banner2.jpg';
// import boysbanner3 from './../../../assets/allProduct/Home/boys-banner3.jpg';
// import womenbanner1 from './../../../assets/allProduct/Home/women-banner1.jpg';
// import womenbanner2 from './../../../assets/allProduct/Home/women-banner2.jpg';
// import womenbanner3 from './../../../assets/allProduct/Home/women-banner3.jpg';
// import kidsbanner1 from './../../../assets/allProduct/Home/kids-banner1.jpg';
// import kidsbanner2 from './../../../assets/allProduct/Home/kids-banner2.jpg';
// import kidsbanner3 from './../../../assets/allProduct/Home/kids-banner3.jpg';

const Home = () => {

  

  return (
   <div className='home'> 
   
      <SlickCarousel3 image1={banner1} image2={banner2} image3={banner3} />
      <Link to='/offers'   ><img src={bank} alt=""  className='bank-gif' /></Link>
      <img src={lastchance} alt="" className='gif-banner' />
      <div className='home-grid'>
         <img src={last1} alt="" />
         <img src={last2} alt="" />
         <img src={last3} alt="" />
         <img src={last4} alt="" />
      </div>
      <Link to='/wintersale'>
           <img src={wintersale} alt="" className='winter-sale'  />
      </Link>
      <img src={watch} alt="" className='watch-gif'/>
      <img src={header} alt="" className='header' />
      <div className='discover-video'>
           <video src={video1} autoPlay loop></video>
           <video src={video2}  autoPlay loop></video>
           <video src={video3}  autoPlay loop></video>
           <video src={video4}  autoPlay loop></video>
           <video src={video5}  autoPlay loop></video>
      </div>
      <img src={globalbrands} alt="" className='gif-banner' />
      <div className='brands'>
          <SlickCarousel5 image1={brands1} image2={brands2} image3={brands3} image4={brands4}image5={brands5}/>
      </div>
      <div className='discount-container'> 
           <img src={discount} alt="" />
           <div className='tempting-discounts'>
                <Link to='/min20'   ><img src={min20} alt=""  /></Link>
                <Link to='/min40'  ><img src={min40} alt="" /></Link>
                <Link to='/min60'  ><img src={min60} alt="" /></Link>
           </div>
           <img src={sale} alt="" className='min50-discount' />
      </div>
      <img src={faves} alt="" className='gif-banner'/>
      <div className='faves-container'>
          <div className='img-flex'>
               <div className='col-flex'>
                   <img src={img1} alt="" className='img1'/>
                   <img src={img4} alt="" className='img4'/>
               </div>
               <div className='col-flex'>
                  <img src={img2} alt="" className='img2'/>
                  <img src={img5} alt="" className='img5'/>
               </div>
               <div className='col-flex'>
                  <img src={img3} alt="" className='img3'/>
                  <img src={img6} alt="" className='img6'/>
               </div>
          </div>
      </div>
      <img src={urban} alt="" className='gif-banner' />
      <div className='urban-container'>
          <img src={urban1} alt="" />
          <img src={urban2} alt="" />
          <img src={urban3} alt="" />
          <img src={urban4} alt="" />
      </div>
      <img src={customertestimonial} alt="" className='gif-banner' />
      <SlickCarousel3 image1={testimonials1} image2={testimonials2} image3={testimonials3} />
      <img src={personalshopper} alt="" className='header' />
      <div className='shopall'>
           <h3>SHOP ALL</h3>
      </div>
      
   </div>
  )
}

export default Home
