import React from 'react';
import {Link} from 'react-router-dom';
import { FaBasketShopping } from "react-icons/fa6";
import '../pages/styles/Navbar.css';


function Navbar(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#364d1c"}}>
            <div class="container-fluid">
                
        <Link to="/" class="navbar-brand" style={{color: '#ffffff', fontSize: '25px'}}>PlantHouse</Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" style={{color: '#ffffff', fontSize: '25px' }}>Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/shop" class="nav-link active" style={{color: '#ffffff', fontSize: '25px' }}>Shop</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link active" style={{color: '#ffffff', fontSize: '25px' }} >About</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="nav-link active" style={{color: '#ffffff', fontSize: '25px' }}>Contact</Link>
        </li>
        <li class="nav-item">
          <Link to="/cart" class="nav-link active" style={{color: '#ffffff',fontSize: '25px'}}><FaBasketShopping /></Link>
        </li>
      
      </ul>
      
    </div>
  </div>
</nav>
  
    )

}

export default Navbar;