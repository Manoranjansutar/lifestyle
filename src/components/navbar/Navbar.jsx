import React, { useContext } from 'react'
import logo from '../../assets/allProduct/Home/logo-lifestyle.svg'
import profile from '../../assets/allProduct/Home/profile.svg'
import wishlist1 from '../../assets/allProduct/Home/wishlist-nav.svg'
import cart from '../../assets/allProduct/Home/cart.svg'
import './Navbar.css';
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import search from '../../assets/allProduct/Home/search1.svg'



const Navbar = () => {

    const {getTotalCartItems,getTotalWishlistItems} = useContext(ShopContext)



  return (
    <div className='navbar'>
        <div className='navbar-links'>
            <div className='logo'>
               <Link to='/' style={{textDecoration:'none',color:'black'}}>
                 <img src={logo} alt="" />
               </Link>
            </div>
        </div>
        <ul>
                <li>
                    <Link to='/men' style={{textDecoration:'none',color:'black'}}>Men</Link>
                </li>
                <li>
                    <Link to='/women' style={{textDecoration:'none',color:'black'}}>
                        Women
                    </Link>
                </li>
                <li>
                    <Link to='/kids' style={{textDecoration:'none',color:'black'}}>
                       Kids
                    </Link>
               </li>
                <li>
                   <Link to='/newarrival' style={{textDecoration:'none',color:'black'}}>
                      New Arrival
                   </Link>
                </li>
            </ul>
            
        <div className='navbar-account'> 
                <div className='navbar-profile'>
                <div className='navbar-input'>
                     <input type="text" />
                     <img src={search} alt="" />
                </div>
                    <div className='profile'>
                        <Link to='/profile' style={{textDecoration:'none',color:'black'}}>
                            <img src={profile} alt="" />
                            <p>Profile</p>
                        </Link>
                    </div>
                    <div className='navbar-wishlist'> 
                         <Link to='/wishlist' style={{textDecoration:'none',color:'black'}}>
                             <img src={wishlist1} alt="" />
                             <p>Wishlist</p>
                         </Link>
                         <div className='wishlist-count'>{getTotalWishlistItems()}</div>
                    </div>
                    <div className='cart'>
                         <Link to='/cart' style={{textDecoration:'none',color:'black'}}>
                             <img src={cart} alt="" />
                             <p>Cart</p>
                         </Link>
                         <div className='cart-count'>{getTotalCartItems()}</div>
                    </div>
                </div>
        </div>
       
    </div>
  
  )
}

export default Navbar
