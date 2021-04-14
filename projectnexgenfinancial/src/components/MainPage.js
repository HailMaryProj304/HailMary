import React, { useEffect, useState, Component } from 'react'
import Icon from "../CSS/Icon.png";
import { useHistory, Link } from "react-router-dom";
import '../CSS/style.css';
import axios from "axios";

function MainPage() {
  let history = useHistory();
  const redirect = () => {
    console.log("Logout");
    localStorage.clear();
    history.push('/')
  }
  const getUser= async () => {
    try {
          if(!localStorage.getItem('user'))
              {
                redirect();
              }
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect( () => {
   
    getUser();
  }, []);

  const [summary, setSummary] = useState(""); 
  const fillUser = JSON.parse(localStorage.getItem('user'))
  var URL = "";
  axios.get("http://localhost:8080/summary/id/" + fillUser.client_id)
  .then((response) => {
      var URL = response.data;
     setSummary(URL.path);
    console.log("THE URL : " + URL.path);    
  })
  
  return (
    <div className="MainPage">
      <div className="container">
        <h1 className="account-title">Account</h1>
        <div className="grid">
          <div className="grid-items">
            <Link to="/PoliciesPage" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>View Policies</h3>
              View policies that you have chosen <br />
            </Link>
          </div>
          <div className="grid-items">
          
         {(<a href = {summary}> <img src={Icon} width="50px"></img></a>)}
         <h3 style={{ fontSize: "1.15rem" }}>
           Summary Download
         </h3>
         Download your summaries that you have available
          </div>
          <div className="grid-items">
            <Link to="/contact" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3 style={{ fontSize: "1.15rem" }}>
                Request Contact/Assistance
              </h3>
              Having problems? NexGen is here for you
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/purchase" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Buy Insurance</h3>
              Buy Insurance Here
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/Quote" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Quoting Software</h3>
              Get Insurance Quotes
            </Link>
          </div>
          <div className="grid-items">
            <Link to="/account" style={{color:"black"}}>
              <img src={Icon} width="50px"></img>
              <h3>Change Account Details</h3>
              Change your password, or personal information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
