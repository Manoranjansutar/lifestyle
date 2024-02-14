import './App.css'
import Navbar from './components/navbar/Navbar'
import Topbar from './components/topbar/Topbar'
import Home from './components/pages/home/Home';
import { BrowserRouter,  Route, Router, Routes} from 'react-router-dom';
import WinterSale from './components/pages/wintersale/WinterSale';
import Offers from './components/pages/offers/Offers';
import DownloadApp from './components/pages/downloadApp/DownloadApp';
import Men from './components/pages/men/Men';
import Tshirt from './components/pages/tshirt/Tshirt';
import Min20 from './components/pages/min20/Min20';
import Min40 from './components/pages/min40/Min40.jsx';
import Min60 from './components/pages/min60/Min60.jsx';
import Brand from './components/pages/brand/Brand.jsx';
import Women from './components/pages/women/Women.jsx';
import Kids from './components/pages/kid/Kids.jsx';
import Product from './components/layout/product/Product.jsx';
import Wishlist from './components/pages/wishlist/Wishlist.jsx';
import GoToTop from './components/layout/GoToTop.jsx';
import Cart from './components/pages/cart/Cart.jsx';
import ScrollToTop from 'react-scroll-to-top';








function App() {

 

  return (
    
       <BrowserRouter >
            <Topbar />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/offers' element={<Offers />} />
                <Route path='/downloadApp' element={<DownloadApp />} />
                <Route path='/wintersale' element={<WinterSale />} />
                <Route path='/men' element={<Men />} />
                <Route path='/tshirt' element={<Tshirt/>}/>
                <Route path='/min20' element={<Min20 />}/>
                <Route path='/min40' element={<Min40 />}/>
                <Route path='/min60' element={<Min60 />}/>
                <Route path='/brand' element={<Brand />} />
                <Route path='/women' element={<Women />} />
                <Route path='/kids' element={<Kids />} />
                <Route path='/product' exact element={<Product />}>
                    <Route path=':productID' exact element={<Product />} />
                </Route>
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/cart' element={<Cart />} />
                
            </Routes>
            <ScrollToTop />
       </BrowserRouter>
    
  )
}

export default App
