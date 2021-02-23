import React from 'react';
import logo from './logo1.png';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <img src={logo} width='350px'></img> 
            <button><Link to="/about">About</Link></button>
            <button><Link to="/login">Login</Link></button>
            <button><Link to="/">Home</Link></button>
        </div>
    )
}
export default Header;