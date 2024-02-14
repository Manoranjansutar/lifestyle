import { FaStar } from "react-icons/fa";
import "./ProductDisplay.css";
import offersicon from "./../../assets/allProduct/Home/userOfferIcon.svg";
import cod from "./../../assets/allProduct/Home/cod.svg";
import deliveryIcon from "./../../assets/allProduct/Home/deliveryIcon.svg";
import DELIVERY from "./../../assets/allProduct/Home/DELIVERY.svg";
import returnIcon from "./../../assets/allProduct/Home/returns.png";
import React, { useContext, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import sizechartmen from "./../../assets/allProduct/Home/sizechartmen.png";
import sizechartwomen from "./../../assets/allProduct/Home/sizechartwomen.png";
import sizechartkid from "./../../assets/allProduct/Home/sizechartkid.png";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { ShopContext } from "../context/ShopContext";
import sizecharticon from "./../../assets/allProduct/Home/size-chart-icon.svg";
import product_icon from "./../../assets/allProduct/Home/product-icon.svg";
import offers_icon from "./../../assets/allProduct/Home/offers-icon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProductDisplay = (props) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handlePhotoChange = (value) => {
    document.getElementById("mainImage").src = value;
  };

  const { product } = props;

  const notify = () =>
    toast(
      <div className="toastify1">
        <img src={product.image} alt="" />
        <h4>Added to the Cart</h4>
      </div>
    );

  const { addToCart } = useContext(ShopContext);
  const { addToWishlist } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div>
        <div className="product-display-images">
          <div className="product-display-image">
            <img
              src={product.image}
              alt=""
              onClick={() => {
                handlePhotoChange(product.image);
              }}
            />
            <img
              src={product.imageP1}
              alt=""
              onClick={() => {
                handlePhotoChange(product.imageP1);
              }}
            />
            <img
              src={product.imageP2}
              alt=""
              onClick={() => {
                handlePhotoChange(product.imageP2);
              }}
            />
            <img
              src={product.imageP3}
              alt=""
              onClick={() => {
                handlePhotoChange(product.imageP3);
              }}
            />
          </div>
          <div className="product-display-main-image">
            <img src={product.image} alt="" id="mainImage" />
          </div>
        </div>
        <div className="description-comments">
          <Tabs className="tabs">
            <TabList className="tablist">
              <Tab>
                <h3>Description</h3>
              </Tab>
              <Tab>
                <h3>Rating & Reviews({product.reviews})</h3>
              </Tab>
              {/* <Tab><h3>Comments({product.reviews})</h3></Tab> */}
            </TabList>

            <TabPanel>
              <div className="tabpanel">
                <div className="tabpanel-title">
                  <p>
                    <span>Product Details</span>: {product.description}
                  </p>
                </div>
                <div className="tabpanel-title-category">
                  <p>
                    <span>Color</span>: {product.color}
                  </p>
                  <p>
                    <span>Category</span>: {product.category}
                  </p>
                </div>
                <div className="tabpanel-title-category">
                  <p>
                    <span>Type</span>: {product.categories}
                  </p>
                  <p>
                    <span>Fabric</span>: 100% Cotton
                  </p>
                </div>
                <div className="tabpanel-title-category">
                  <p>
                    <span>Fit</span>: Regular Fit
                  </p>
                  <p>
                    <span>Pattern</span>: Printed
                  </p>
                </div>
                <div className="tabpanel-title">
                  <p>
                    <span>Care Instruction</span>: Machine Wash
                  </p>
                </div>
                <div className="tabpanel-title">
                  <p>
                    <span>Manufacturer Details</span>: Lifestyle Int Pvt Ltd, 77
                    Degree Town Centre, Building No. 3, West Wing, Off Hal
                    Airport Road, Yamlur, Bangalore-560037
                  </p>
                </div>
                <div className="tabpanel-title">
                  <p>
                    <span>For Consumer Complaints Contact</span>: Manager
                    Commercial,77 Degree Town Centre, Building No. 3, West Wing,
                    Off Hal Airport Road, Yamlur Po., Bangalore-560037, Phone:
                    1800-123-1555, help@lifestylestores.com
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel></TabPanel>
            {/* <TabPanel>
                
              </TabPanel> */}
          </Tabs>
        </div>
      </div>
      <div className="product-display-details">
        <h3 className="display-brand">{product.brand}</h3>
        <p className="display-name">{product.name}</p>
        <div className="product-display-price">
          <div className="product-display-product-price">
            <h3 className="display-newprice">₹{product.newPrice}</h3>
            <p className="display-oldprice"> ₹{product.oldPrice}</p>
            <p className="display-discount">({product.discount}% OFF)</p>
          </div>
          <div className="display-taxes">
            <p>inclusive of all taxes</p>
          </div>
        </div>
        <div className="display-rating">
          <p>
            {product.rating} <FaStar className="display-star-icon" />
          </p>
          <h5 className="display-reviews">{product.reviews} Reviews</h5>
        </div>
        <div className="display-size">
          <div className="display-size-title">
            <p> Select Size</p>
            <h5 className="display-size-chart">
              <button onClick={onOpenModal} className="size-btn">
                Size Chart{" "}
                <img src={sizecharticon} alt="" className="icon-image" />
              </button>
              <Modal open={open} onClose={onCloseModal} center>
                <img src={sizechartmen} alt="" />
                <img src={sizechartwomen} alt="" />
                <img src={sizechartkid} alt="" />
              </Modal>
            </h5>
          </div>
          <div className="display-size-option">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
          </div>
          <p className="display-size-warning">
            Please check size chart table to know the exact size to be ordered.
          </p>
        </div>
        <div className="display-cart">
          <button
            className="wishlist-btn"
            onClick={() => addToWishlist(product.id)}
          >
            <FaHeart />
            Wishlist
          </button>
          <div>
            <button
              className="cart-btn"
              onClick={() => {
                addToCart(product.id);
                notify();
              }}
            >
              <IoBag />
              Add To Cart
            </button>
            <ToastContainer />
          </div>
        </div>
        <div className="display-available">
          <h4 className="display-title">
            Best Offers
            <img src={offers_icon} alt="" className="icon-image1" />
          </h4>
          <div className="display-available-offers">
            <img src={offersicon} alt="" />
            <div className="display-available-offers-details">
              <h5>Get 15% off on Bank of Baroda Debit and Credit Card</h5>
              <p>
                {" "}
                Use Code: BOB500 | Min Purchase: ₹1500{" "}
                <span className="more">more</span>
              </p>
            </div>
          </div>
          <div className="display-available-offers">
            <img src={offersicon} alt="" />
            <div className="display-available-offers-details">
              <h5>Get 10% off on AU Bank Debit Cards</h5>
              <p>
                {" "}
                Use Code: AUMALL10 | Min Purchase: ₹1500{" "}
                <span className="more">more</span>
              </p>
            </div>
          </div>
          <div className="display-available-offers">
            <img src={offersicon} alt="" />
            <div className="display-available-offers-details">
              <h5>
                Flat 10% off Upto Rs 500 on minimum purchase of Rs 2500 on
                prepaid transactions
              </h5>
              <p>
                {" "}
                Use Code: CLIQ500 | Min Purchase: ₹2500{" "}
                <span className="more">more</span>
              </p>
            </div>
          </div>
        </div>
        <div className="display-delivery">
          <h4 className="display-title">
            Delivery Options{" "}
            <img src={DELIVERY} alt="" className="display-delivery-icon" />
          </h4>
          <div className="display-pincode">
            <input type="text" placeholder="Enter your Pincide" />
            <button className="check-btn">Check</button>
          </div>
          <p className="display-pincode-check">
            Please enter PIN code to check delivery time & Pay on Delivery
            Availability
          </p>
          <div className="display-delivery-container">
            <img src={deliveryIcon} alt="" />
            <p>
              Delivery by{" "}
              <span className="display-delivery-container-available">
                10th Feb
              </span>
            </p>
          </div>
          <div className="display-delivery-container">
            <img src={cod} alt="" />
            <p>
              Cash On Delivery |{" "}
              <span className="display-delivery-container-available">
                Available
              </span>
            </p>
          </div>
          <div className="display-delivery-container">
            <img src={returnIcon} alt="" />
            <p>
              15 days easy return{" "}
              <span className="display-delivery-container-available">
                know more
              </span>
            </p>
          </div>
        </div>
        {/* <div className="display-product">
          <h4 className="display-title">
            Product Details
            <img src={product_icon} alt="" className="icon-image1" />
          </h4>
          <p className="display-product-title">{product.description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDisplay;
