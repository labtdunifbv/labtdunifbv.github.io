import React from "react";
import img1 from'../Header/right.png';
import img2 from'../Header/left.png';
import './styles.css';

function Header() {
    return(
        <div className="header">
                <img src={img1} className="header-img" alt="fireSpot"/>
                <div className="container-header-logo">
                    <p className="header-logo-1">cartilha</p>
                    <p className="header-logo-2">LGPD</p>
                </div>
                <img src={img2} className="header-img" alt="fireSpot"/>
            </div>
    );
}

export default Header;