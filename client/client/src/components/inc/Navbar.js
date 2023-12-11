import React from 'react';
import {Link} from 'react-router-dom';
import { FaBasketShopping } from "react-icons/fa6";
import '../pages/styles/Navbar.css';
import NavbarIcon from './Navbarlogo';

function Navbar({ cartItems }){


    return(
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#284907"}}>
            <div className="container-fluid">
                
        <Link to="/" className="navbar-brand" style={{color: '#ffffff', fontSize: '25px'}}><NavbarIcon /></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" style={{color: '#ffffff', fontSize: '25px' }}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link active" style={{color: '#ffffff', fontSize: '25px' }}>Shop</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link active" style={{color: '#ffffff', fontSize: '25px' }} >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active" style={{color: '#ffffff', fontSize: '25px' }}>Contact</Link>
        </li>
        <li className="nav-item">
        <Link to="/cart" className="nav-link active" style={{ color: '#ffffff', fontSize: '25px' }}>
        <FaBasketShopping />
        {/* Näyttää ostoskorikuvakkeen vieressä tuotteiden lukumäärän*/}
        {cartItems.length > 0 && 
        <span className='product-count' style={{ fontSize: '18px', marginLeft: '5px' }}>
        {cartItems.length}
  </span>
}
  
</Link>
        </li>
        
      
      </ul>
      
    </div>
  </div>
</nav>
  
    )

}

export default Navbar;