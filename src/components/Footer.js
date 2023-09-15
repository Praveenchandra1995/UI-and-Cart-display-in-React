import React from "react";

export default function Footer(){
    return(
<>
<div className="Footer1">
<h1 className="news">News Letter</h1>
<p className="para">Get the news about articles and updates in your inbox </p>
<form >
    
    <input  className="input"placeholder="Enter Name" type="text" />
    
    <input className="input" placeholder="Enter Email " type="text" />
    
    <input className="input " placeholder="Enter Message" type="text" />
    
</form>
<button className="btn2">SEND</button>
<h2 className="footer-text">GET</h2>
<h2 className="footer-text"> INTOUCH</h2>
</div>
<footer>Copyright 2022 All Right Reserved By SG</footer>
</>
    )
}