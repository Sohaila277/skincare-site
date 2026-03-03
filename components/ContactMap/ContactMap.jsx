import React from 'react';
import './ContactMap.css';
import mapImg from '../../src/assets/images/map.png'; 

const MapSection = () => {
  return (
    <section className="map-section">
      <div 
        className="map-background" 
        style={{ backgroundImage: `url(${mapImg})` }}
      ></div> 
      
      <div className="contact-overlay">
        <h2 className="brand-name">GLASS SKIN EFFECT</h2>
        <p className="address">77 Beak St <br /> Soho London W1F 9DB</p>
        <p className="mobile">Mob: 020 1234 6789</p>
       
  <a 
    href="https://maps.app.goo.gl/hMHTRvy4pwwrvpxW9" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="direction-btn"
  >
    GET DIRECTION
  </a>
      </div>
    </section>
  );
};

export default MapSection;