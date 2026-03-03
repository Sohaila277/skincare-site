import React from 'react';
import './TopProducts.css';
// Import professional icons
import { FiHeart, FiSearch } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';

import img4 from '../../src/assets/images/img4.png';
import img5 from '../../src/assets/images/img5.png';
import img6 from '../../src/assets/images/img6.png';
import img7 from '../../src/assets/images/img7.png';

const TopProducts = () => {
  const products = [
    { id: 1, name: "Age Reverse Serum", price: "£12.99", img: img4, sale: true },
    { id: 2, name: "Balancing Facial Toner", price: "£12.99", img: img5, sale: true },
    { id: 3, name: "Brightening Body Milk", price: "£12.99", img: img6, sale: false },
    { id: 4, name: "Brightening Body Wash", price: "£12.99", img: img7, sale: false },
  ];

  return (
    <section className="products-section" id="products">
      <h2 className="products-main-title">TOP SELLING PRODUCTS</h2>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.img} alt={product.name} />
              
              {product.sale && <span className="sale-badge">SALE</span>}
              
              <div className="product-actions">
                <button className="action-btn" title="Wishlist">
                  <FiHeart size={18} />
                </button>
                <button className="action-btn" title="Add to Cart">
                  <IoBagOutline size={18} />
                </button>
                <button className="action-btn" title="Quick View">
                  <FiSearch size={18} />
                </button>
              </div>
            </div>
            
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="all-products-btn">ALL PRODUCTS</button>
    </section>
  );
};

export default TopProducts;