import React from "react";
import LogoImg from '../images/planthouse.jpg';

function Logo() {
    return(
        <div style={{textAlign: "center" }}>
        <img src={LogoImg} alt="Logo" style={{ margin: "auto" }} />
      </div>

    );
}

export default Logo;