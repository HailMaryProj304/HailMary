import React from "react";
import Icon from "../Icon.png";
import {Link} from "react-router-dom";

function MainPage() {
  return (
    <div>
      <h1>Account</h1>
      <div className="top-row">
        <a><Link to ="/policies"><img src={Icon} width="50px"></img></Link></a>
        {/* <button>ICON 1</button> <br/> */}
        <h3>View policies</h3>
        View policies that you have chosen. <br />
        <a><Link to ="/summaries"><img src={Icon} width="50px"></img></Link></a>
        <h3>View Insurace Summary</h3>
        View your insurance summary.
        <a><Link to ="/contact"><img src={Icon} width="50px"></img></Link></a>
        <h3>Request Contact/Assistance</h3>
        Having problems? NexGen is here for you.
      </div>
      
      <br />
      
      <div className="bottom-row">
      <a><Link to ="/purchase"><img src={Icon} width="50px"></img></Link></a>
        <h3>Buy Insurance</h3>
        Buy Insurance here. Give me that p-p-paper
        <a><Link to ="/quotes"><img src={Icon} width="50px"></img></Link></a>
        <h3>Your Quotes</h3>
        View the quotes that NexGen has given you.
        <a><Link to ="/account"><img src={Icon} width="50px"></img></Link></a>
        <h3>Change Account Details</h3>
        Change your password, or personal information.
      </div>
    </div>
  );
}

export default MainPage;
