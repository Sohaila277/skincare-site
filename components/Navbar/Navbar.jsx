import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../src/assets/images/logo.png";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className={isOpen ? "menu active" : "menu"}>
        <li><a href="#hero" onClick={toggleMenu}>HOME</a></li>
        <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
        <li><a href="#services" onClick={toggleMenu}>SKIN CARE</a></li>
        <li><a href="#expert" onClick={toggleMenu}>BODY CARE</a></li>
        <li><a href="#professional" onClick={toggleMenu}>TREATMENTS</a></li>
        <li><a href="#products" onClick={toggleMenu}>PRODUCTS</a></li>
        <li><a href="#footer" onClick={toggleMenu}>CONTACT</a></li>
      </ul>

      <div className="nav-right">
        <div className="icons">
          <FiSearch className="nav-icon" />
          <FiUser className="nav-icon" />
          <FiShoppingBag className="nav-icon" />
        </div>

        {/* Hamburger Toggle Button */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;