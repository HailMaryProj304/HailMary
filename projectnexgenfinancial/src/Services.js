import React from "react";
import Icon from "./CSS/Icon.png";
import { Link } from "react-router-dom";
import './CSS/style.css';

function Services() {
  
  return (
    <div className="MainPage">
      <div className="container">
        <h1 className="account-title">Services</h1>
        <div className="grid">
          <div className="grid-items">
            <Link to="/LifeInsurance" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Term & Permanent Life Insurance</h3>
              <br />
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/MortgageInsurance" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Mortgage Insurance</h3>
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/DisabilityInsurance" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3 style={{ fontSize: "1.15rem" }}>
                Disability Insurance
              </h3>
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/CriticalIllnessInsurance" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Critical Illness Insurance</h3>
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/HealthInsurance" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Health, Dental & Medical Access Insurance</h3>
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/LongTermCare" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Long Term Care Benefits</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
