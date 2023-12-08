import React from "react";
import LogoIconImg from '../images/logo_icon.jpg';

function logoicon() {
    return(
        <div style={{textAlign: "center" }}>
        <img src={LogoIconImg} alt="Footerlogo" style={{ margin: "auto" }} />
      </div>

    );
}

export default logoicon;