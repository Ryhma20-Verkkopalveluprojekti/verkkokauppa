import React from "react";
import newsletterImg from '../images/newsletter.jpg';

function newsletterImage() {
    return(
        <div style={{textAlign: "center" }}>
        <img src={newsletterImg} alt="img" style={{ margin: "auto" }} />
      </div>

    );
}

export default newsletterImage;