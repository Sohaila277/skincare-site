import React from "react";
import "./Navbar.css";
import logo from "../../src/assets/images/logo.png";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Glass Skin Effect Logo" />
      </div>

      <ul className="menu">
        <li><a href="#hero">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SKIN CARE</a></li>
        <li><a href="#expert">BODY CARE</a></li>
        <li><a href="#professional">TREATMENTS</a></li>
        <li><a href="#products">PRODUCTS</a></li>
        <li><a href="#footer">CONTACT</a></li>
      </ul>

      <div className="icons">
        <FiSearch className="nav-icon" />
        <FiUser className="nav-icon" />
        <FiShoppingBag className="nav-icon" />
      </div>
    </nav>
  );
}

export default Navbar;