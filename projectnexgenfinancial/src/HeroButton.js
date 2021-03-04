import React from "react";
import "./HeroButton.css";
import { Link } from "react-router-dom";

function HeroButton() {
  return (
    <div className="hero-image">
      <div className="HeroButton">
        <div className="intro-text">
          <h1 style={{ fontSize: "64px" }}>NexGen is here to help.</h1>
          <h3 style={{ fontSize: "20px" }}>
            Let us help you find the perfect plan.
          </h3>
        </div>
        <Link to="/about" className="button cc-jumbo-button cc-jumbo-white">
          {/* the link was "/start" but I (Raymond) changed it for the use case demo */}
          LEARN MORE
        </Link>
      </div>
    </div>
  );
}

export default HeroButton;
