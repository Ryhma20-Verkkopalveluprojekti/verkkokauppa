import React from "react";
import NavbarIcon from '../images/navbar_icon.jpg';

function navbar_icon() {
    return(
        <div style={{textAlign: "center" }}>
        <img src={NavbarIcon} alt="NavbarIcon" style={{ margin: "auto" }} />
      </div>

    );
}

export default navbar_icon;