import React from 'react'
import Slider from "react-slick";
import './SlickCarousel3.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , width:'35px' , height:'35px', borderRadius:'50%',padding:'7px',marginRight:'12px'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , width:'35px' , height:'35px', borderRadius:'50%',padding:'7px',marginLeft:'12px',zIndex:'2'}}
      onClick={onClick}
    />
  );
}

const SlickCarousel3 = (props) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 20,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className='slick'>
        <Slider {...settings}>
          <div>
             <img src={props.image1} alt="" />
          </div>
          <div>
          <img src={props.image2} alt="" />
          </div>
          <div>
          <img src={props.image3} alt="" />
          </div>
        </Slider>
    </div>
  )
}

export default SlickCarousel3
