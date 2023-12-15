//banner picture from pexels.com
//navbarin alla oleva banneri
import React from "react";
import banner from '../images/banner.jpg';

const bannerStyle = {
    width: '100%',
    height: 'auto',
};

function Banner() {
    return(
<div>
         <img src={banner} style={bannerStyle} alt="Banner" />

</div>

    );
}

export default Banner;