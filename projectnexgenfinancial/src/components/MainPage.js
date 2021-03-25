import React from "react";
import Icon from "../CSS/Icon.png";
import { Link } from "react-router-dom";
import '../CSS/style.css';

function MainPage() {
  
  return (
    <div className="MainPage">
      <div className="container">
        <h1 className="account-title">Account</h1>
        <div className="grid">
          <div className="grid-items">
            <Link to="/PoliciesPage" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>View policies</h3>
              View policies that you have chosen. <br />
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/summaries" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>View Insurance Summary</h3>
              View your insurance summary.
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/contact" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3 style={{ fontSize: "1.15rem" }}>
                Request Contact/Assistance
              </h3>
              Having problems? NexGen is here for you.
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/purchase" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Buy Insurance</h3>
              Buy Insurance here. Give me that p-p-paper
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/quotes" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Your Quotes</h3>
              View the quotes that NexGen has given you.
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/account" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Change Account Details</h3>
              Change your password, or personal information.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
