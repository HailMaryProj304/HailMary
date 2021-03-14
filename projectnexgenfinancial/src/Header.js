import React from "react";
import logo from "./CSS/logo.png";
import {Link} from "react-router-dom";
import './CSS/style.css';

function Header() {
  return (
    <div className="Header">
      <div className="Menu">
        <a><Link to="/"><img src={logo} width="198px"></img></Link></a>
        <div className="navigation-items">
          <a className="navigation-item w-nav-link"><Link to="/about">About</Link></a>
          <a className="navigation-item w-nav-link">Forms</a>
          <a className="navigation-item w-nav-link">FAQ</a>
          <a className="navigation-item w-nav-link"><Link to="/contact">Contact</Link></a>
        </div>
        <a><Link to="/login" className="button w-inline-block">Login</Link></a>
      </div>
    </div>
  );
}
export default Header;