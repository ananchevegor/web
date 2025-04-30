import "../App.css";
import logo from "../images/LogoDreemKeeper.jpg";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
   <nav className="navigator">
        <Link to={"/"} className="logo-link">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <p className="site-name">DreamKeeper</p>
        </div>
        </Link>
        
  
        <Link to={"/about"} className="nav-link">
          About
        </Link>
        <Link to={"/price"} className="nav-link">
          Price
        </Link>
        <Link to={"/enterprice"} className="nav-link">
          Enterprice
        </Link>
        <Link to={"/blog"} className="nav-link">
          Blog
        </Link>
        <Link to={"/forum"} className="nav-link">
          Forum
        </Link>
      </nav>
  );
}

export default Header;
