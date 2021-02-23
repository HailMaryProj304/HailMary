import React from 'react';
import './HeroButton.css';
import { Link } from 'react-router-dom';

function HeroButton () {
    return (
        <div className="HeroButton">
            <h1>Get some Insurance</h1>
            <h3>You dumb idiot</h3>
            <button><Link to="/start">Get your 'Surance</Link></button>
        </div>
    );

}

export default HeroButton;