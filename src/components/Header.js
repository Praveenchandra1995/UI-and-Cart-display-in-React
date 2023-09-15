import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from "@fortawesome/free-solid-svg-icons";
//import { faTwitter } from "@fortawesome/free-solid-svg-icons";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
    <div className="header1">
      <FontAwesomeIcon className="truck" icon={faTruck} />
      <button>FreeDelivery</button>
      <button>ReturnPolicy</button>
      <button>Login</button>
      <button>FollowUs</button>
      </div>
       <div className="shopkart">
       <h1>ShopKart</h1>
       <button className="btn">WISHLIST-0</button>
       <button className="btn">BAG-0</button>
     </div>
     <div className="nav-bar">
        
            <button className="nav-btn">HOME</button>
            <button className="nav-btn">ABOUT</button>
            <button className="nav-btn">OUR PRODUCTS</button>
            
            <button className="nav-btn">CONTACTUS</button>
     </div>
     
     < div className="headerlast">
      <div> 
            <img src="./images/Rectangle1.png" alt="img2" className="img-2"/>
      </div>
     <h1 className="tit-1">FRESH</h1>
     <h2 className="tit-2">2022</h2>
     <h1 className="tit-3">LOOK</h1>
     <img src="./images/img1.png" alt="img"className="img-1"/>
     <div>     
      <h2 className="page">Seemore<button><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} /></button></h2>
     </div>
     </div>
     </>
  );
}
