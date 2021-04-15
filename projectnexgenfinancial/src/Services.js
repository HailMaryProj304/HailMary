import React from "react";
import Icon from "./CSS/Icon.png";
import { Link } from "react-router-dom";
import "./CSS/style.css";

function Services() {
  return (
    <div className="MainPage">
      <div className="container">
        <h1 className="account-title">Services</h1>
        <h2 className="headline">Individuals & Families</h2>
        <div className="grid">
          <div className="grid-items">
            <Link to="/LifeInsurance" style={{ color: "black" }}>
              <img src={Icon} width="50px"></img>
              <h3>Term & Permanent Life Insurance</h3>
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/MortgageInsurance" style={{ color: "black" }}>
              <img src={Icon} width="50px"></img>
              <h3>Mortgage Insurance</h3>
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/DisabilityInsurance" style={{ color: "black" }}>
              <img src={Icon} width="50px"></img>
              <h3>Disability Insurance</h3>
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/CriticalIllnessInsurance" style={{ color: "black" }}>
              <img src={Icon} width="50px"></img>
              <h3>Critical Illness Insurance</h3>
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/HealthInsurance" style={{ color: "black" }}>
              <img src={Icon} width="50px"></img>
              <h3>Health, Dental & Medical Access Insurance</h3>
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/LongTermCare" style={{ color: "black" }}>
              <img src={Icon} width="50px"></img>
              <h3>Long Term Care Benefits</h3>
            </Link>
          </div>
        </div>
        <h2 className="headline">Business Owners</h2>
        <div className="grid">
          <div className="grid-items">
            <Link to="/BuySellInsurance" style={{ color: "black" }}>
              <img src={Icon} width="50px"></img>
              <h3>Buy/Sell Insurance</h3>
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/KeyManInsurance" style={{ color: "black" }}>
              <img src={Icon} width="50px"></img>
              <h3>Key Man Insurance</h3>
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/ExecutiveInsurance" style={{ color: "black" }}>
              <img src={Icon} width="50px"></img>
              <h3>
                Executive Benefit Packages
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
