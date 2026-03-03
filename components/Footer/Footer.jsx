import React from 'react';
import './Footer.css';
import footerLogo from '../../src/assets/images/logo.png'; 
import { FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        
      
        <div className="footer-column logo-col">
          <img src={footerLogo} alt="GSE Logo" className="footer-logo" />
        </div>

       
        <div className="footer-column">
          <h3>TREATMENTS</h3>
          <ul>
            <li><MdKeyboardArrowRight /> Skin Care</li>
            <li><MdKeyboardArrowRight /> Body Care</li>
            <li><MdKeyboardArrowRight /> Nails</li>
            <li><MdKeyboardArrowRight /> Appliances</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><MdKeyboardArrowRight /> About us</li>
            <li><MdKeyboardArrowRight /> Contact us</li>
            <li><MdKeyboardArrowRight /> Blog</li>
            <li><MdKeyboardArrowRight /> FAQ</li>
            <li><MdKeyboardArrowRight /> Privacy Policy</li>
            <li><MdKeyboardArrowRight /> Terms and Conditions</li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h3>ADDRESS</h3>
          <p>77 Beak St</p>
          <p>Soho London W1F 9DB</p>
          <p>Mob: 020 1234 6789</p>
          <p>E-mail: info@glassskineffect.com</p>
          
          <div className="footer-socials">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterestP /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;