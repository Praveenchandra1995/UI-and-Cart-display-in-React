import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

export default function NewArrivalsMenu() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display at a time
  
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>


      
      <div className="Arrivals">
        <h1 className="Apparel-title">New Products</h1>
        <div className="navigation-arrows">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>
        <div className="Apparel-btn">
          <button className="btn-app">Apparels</button>
          <button className="btn-app">Accessories</button>
          <button className="btn-app">Best sellers</button>
          <button className="btn-app">50% off</button>
        </div>
      </div>

      <div className="product-list">
        {data.slice(startIndex, endIndex).map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt="cart-img" className="Cart-img" />
            <button>
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
            <div className="Cart-info">
              <h2 className="Cart-title">
                <small>{product.title}</small>
              </h2>
              <p className="description">
                <small>{product.description}</small>
              </p>
            </div>
            <div>
              <p className="price">
                <b>Price: ${product.price}</b>
              </p>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}
