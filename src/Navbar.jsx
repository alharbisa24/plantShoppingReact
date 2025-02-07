import ProductList from './ProductList';
import Cartitem from './CartItem';
import './ProductList.css'
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const styleObj={
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignIems: 'center',
    fontSize: '20px',
   }
   const styleObjUl={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }
   const styleA={
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
   }
function Navbar()  {
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.length;
return (
<div>
    <BrowserRouter>
    <div className="navbar" style={styleObj}>
    <div className="tag">
       <div className="luxury">
       <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
       <a href="/shoppingreact" style={{textDecoration:'none'}}>
                <div>
            <h3 style={{color:'white'}}>Paradise Nursery</h3>
            <i style={{color:'white'}}>Where Green Meets Serenity</i>
            </div>
            </a>
        </div>
      
    </div>
    <div style={styleObjUl}>
        <div> <Link to="/shoppingreact" style={styleA}>Plants</Link></div>
        <div> 
<Link to="/cart" style={styleA}>
<h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path>
<text
                    x="120"
                    y="160"
                    textAnchor="middle"
                    fontSize={100}
                    fill="white"
                  >
                    {cartCount}
                  </text></svg></h1>
</Link></div>
    </div>
</div>

<Routes>
<Route path="/shoppingreact" exact element={<ProductList/>}></Route>
<Route path="/cart" element={<Cartitem/>}></Route>
</Routes>


</BrowserRouter>
</div>
);
}
export default Navbar;