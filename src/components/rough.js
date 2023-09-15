import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
//import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

export default function NewArrivalsMenu(){
    const[data,setData]=useState([])
   
   useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(info=>setData(info))
    console.log(data)
   },[])

    return(
        
        <>
        <div className="Arrivals">
        <h1 className="Apparel-title">New Products</h1>
  <div className="Apparel-btn"> 
        <button className="btn-app">Apparels</button>
        <button className="btn-app">Accessories</button>
        <button className="btn-app">Best sellers</button>
        <button className="btn-app">50% off</button>
        </div>

        </div>
        {/* render data*/}
        <div className="product-list">
            {
                data.map((product)=>(
                    <div key={product.id} className="product">
                        <img  src={product.image} alt="cart-img" className="Cart-img"/>
                       <button><FontAwesomeIcon icon={faUpRightFromSquare} /></button>
                        <div className="Cart-info">
                        <h2 className="Cart-title"> <small>{product.title}</small></h2>
                        <p className="description"><small>{product.description}</small></p>
                    
                        </div>
                        <div>
                        <p className="price"><bold>Price:${product.price}</bold></p>
                        </div>
                        </div>
                        
                ))
            }
        </div>
        
        </>

    )
    
}