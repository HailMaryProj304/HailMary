import React from "react";
import "./HeroButton.css";
import { Link } from "react-router-dom";

function HeroButton() {
  return (
    <div className="hero-image">
      <div className="HeroButton">
        <div className="intro-text">
          <h1 style={{ fontSize: "64px" }}>
            You have committed crimes against Skyrim and her people.
          </h1>
          <h3 style={{ fontSize: "20px" }}>What say you in your defense?</h3>
        </div>
        <Link to="/start" className="button cc-jumbo-button cc-jumbo-white">
          I rather die than go to prison
        </Link>
      </div>
    </div>
  );
}

export default HeroButton;
