//shop-sivun banneri
import React from "react";
import discount from '../images/discountbanner.jpg';
import '../pages/styles/Discount.css';

function discountBanner() {
    return(
<div>
    
      <img src={discount} className="img-fluid custom-image" alt="Discount"/>
      
</div>

    );
}

export default discountBanner;