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
              insert fancy sounding shit here <br />
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/MortgageInsurance" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Mortgage Insurance</h3>
              jun smells
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/DisabilityInsurance" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3 style={{ fontSize: "1.15rem" }}>
                Disability Insurance
              </h3>
              cole may be a sexual predator
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/CriticalIllnessInsurance" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Critical Illness Insurance</h3>
              smash my bros, raymond
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/HealthInsurance" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Health, Dental & Medical Access Insurance</h3>
              andre 'eric' colaris AKA covid patient zero
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/LongTermCare" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Long Term Care Benefits</h3>
              karol
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
