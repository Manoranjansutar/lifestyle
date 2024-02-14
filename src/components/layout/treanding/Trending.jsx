import React, { useContext } from 'react'
import Slider from "react-slick";
// import './SlickCarousel5.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext.jsx';
import './Trending.css';
import ItemSlider from './../itemSlider/ItemSlider.jsx';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" , width:'35px' , height:'35px', borderRadius:'50%',padding:'7px',top:'193px', right:'10px',zIndex:'2',position:'absolute'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" , width:'35px' , height:'35px', borderRadius:'50%',padding:'7px' , position:'relative' , top:'193px',left:'2px',marginRight:'20px' ,zIndex:'1'}}
        onClick={onClick}
      />
    );
  }




const Trending1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 10,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      const {All_Product} = useContext(ShopContext)

  return (
    <div className='trending1'>
          <Slider {...settings} className='trending-slider'>
         {
                All_Product.map((item,index) =>{
                if (item.category === "Men" && item.rating >= 4.5){
                    return(
                        <div key={index} className='trending1-items'>
                             <ItemSlider
                      key={index}
                      image={item.image}
                      reviews={item.reviews}
                      brand={item.brand}
                      name={item.name}
                      discount={item.discount}
                      rating={item.rating}
                      newPrice={item.newPrice}
                      oldPrice={item.oldPrice}
                      imageP1={item.imageP1}
                      id={item.id}
                    />
                        </div>
                    )
                }
             })
            
         }
          </Slider>
    </div>
  )
}

export default Trending1
