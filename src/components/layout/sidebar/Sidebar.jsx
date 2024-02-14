import React from "react";
import "./Sidebar.css";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import styles from './styles.module.css';
import downArrow from './../../../assets/allProduct/Home/down-arrow.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-filter">
        <h5>FILTERS</h5>
        <span>
          <p className="sidebar-clear">Clear All</p>
        </span>
      </div>
      <div className="sidebar-price">
        <p>Price</p>
        <input type="range" />
      </div>
       <Accordion>
      <AccordionItem
        header={
          <div className={styles.flex}>
            <p className={styles.title}>Gender</p>
            <img src={downArrow} alt="" className={styles.addicon} />
          </div>
        } initialEntered
      >
        <div className="sidebar-category">
         <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>Men</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>Women</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>Kids</p>
            </div>
          </div>
      </AccordionItem>
    </Accordion>
    <Accordion>
      <AccordionItem
        header={
          <div className={styles.flex}>
            <p className={styles.title}>Categories</p>
            <img src={downArrow} alt="" className={styles.addicon} />
          </div>
        } initialEntered
      >
         
         <div className="sidebar-categories">
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>T-shirt</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>Shirt</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>Sherwani</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>Jacket</p>
            </div>
          </div>

      </AccordionItem>
    </Accordion>

    <Accordion>
      <AccordionItem
        header={
          <div className={styles.flex}>
            <p className={styles.title}>Brands</p>
            <img src={downArrow} alt="" className={styles.addicon}  />
          </div>
        }
      >
         
         <div className="sidebar-brands">
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>Arrow</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>Calvin Klein</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>Flying Machine</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>Tommy Hilfiger</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>US POLO ASSN</p>
            </div>
          </div>
         
      </AccordionItem>
    </Accordion>

    <Accordion>
      <AccordionItem
        header={
          <div className={styles.flex}>
            <p className={styles.title}>Color</p>
            <img src={downArrow} alt="" className={styles.addicon} />
          </div>
        }
      >
         
         <div className="sidebar-color">
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <span className="sidebar-checkbox-color white-checkbox "></span>
              <p>White</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <span className="sidebar-checkbox-color black-checkbox "></span>
              <p>Black</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <span className="sidebar-checkbox-color green-checkbox "></span>
              <p>Green</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <span className="sidebar-checkbox-color red-checkbox "></span>
              <p>Red</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <span className="sidebar-checkbox-color black-checkbox "></span>
              <p>Blue</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <span className="sidebar-checkbox-color black-checkbox "></span>
              <p>Yellow</p>
            </div>
          </div>
         
      </AccordionItem>
    </Accordion>

    <Accordion>
      <AccordionItem
        header={
          <div className={styles.flex}>
          <p className={styles.title}>Discounts</p>
          <img src={downArrow} alt="" className={styles.addicon}/>
        </div>
        }
      >
         <div className="sidebar-discounts">
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>10% OFF</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>20% OFF</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>30% OFF</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>40% OFF</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>50% OFF</p>
            </div>
            <div className="sidebar-checkbox">
              <input type="checkbox" />
              <p>60% OFF</p>
            </div>
          </div>
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default Sidebar
