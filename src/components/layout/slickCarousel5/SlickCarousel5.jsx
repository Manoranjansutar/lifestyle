import React from 'react'
import Slider from "react-slick";
import './SlickCarousel5.css';
import { Link } from 'react-router-dom';
import Brand from '../../pages/brand/Brand';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" , width:'35px' , height:'35px', borderRadius:'50%',padding:'7px',marginTop:'50px', marginLeft:'20px'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" , width:'35px' , height:'35px', borderRadius:'50%',padding:'7px', marginTop:'50px' , marginRight:'45px' ,zIndex:'1'}}
        onClick={onClick}
      />
    );
  }

const SlickCarousel5 = (props) => {

    

    const settings = {
        dots: false,
        infinite: true,
        speed: 10,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      const handleBrandPage = (value) =>{
          <Brand value={value} />
      }

   

  return (
    <div className='slick'>
    <Slider {...settings}>
      <div>
       <Link to='/brand'> <img src={props.image1} alt="" /></Link>
      </div>
      <div>
     <img src={props.image2} alt=""  />
      </div>
      <div>
      <img src={props.image3} alt=""/>
      </div>
      <div>
     <img src={props.image4} alt="" />
      </div>
      <div>
      <img src={props.image5} alt=""  />
      </div>
    </Slider>
</div>
  )
}

export default SlickCarousel5
