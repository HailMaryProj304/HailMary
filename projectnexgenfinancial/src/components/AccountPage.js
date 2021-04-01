import React from "react";
import "../CSS/style.css";

function AccountPage() {
  return (
    <div className="container" style={{display:"flex", justifyContent:"space-between"}}>
      <div className="split left">
        <div className="form-section">
          <label htmlFor="First Name">First Name</label><br />
          <input type="text" placeholder="User First Name" className='account-form' disabled /> <br />
        </div>
        <div className="form-section">
            <label htmlFor="Last Name">Last Name</label><br />
            <input type="text" placeholder="User Last Name" className='account-form' disabled /> <br />
        </div>
        <div className="form-section">
            <label htmlFor="Email">Email Address</label><br />
            <input type="text" placeholder="User Email" className='account-form' disabled /> <br />
        </div>
        <div className="form-section">
            <label htmlFor="Password">Password</label><br />
            <input type="text" placeholder="User Password" className='account-form' disabled /> <br />
        </div>
      </div>
      <div className="split right">
      <div className="form-section">
            <label htmlFor="Date-Of-Birth">Date of Birth</label><br />
            <input type="date" placeholder="Date of Birth" className='account-form' disabled /> <br />
        </div>
        <div className="form-section">
            <label htmlFor="Phone Number">Phone Number</label><br />
            <input type="tel" placeholder="User Phone" className='account-form' disabled /> <br />
        </div>
        <div className="form-section">
            <label htmlFor="Street Address">Street Address</label><br />
            <input type="text" placeholder="User Address" className='account-form' disabled /> <br />
        </div>
        <div className="form-section">
            <label htmlFor="Country">Country</label><br />
            <input type="text" placeholder="User Country" className='account-form' disabled /> <br />
        </div>
        <div className="form-section">
            <label htmlFor="Province/State">Province/State</label><br />
            <input type="text" placeholder="User Provice/State" className='account-form' disabled /> <br />
        </div>
        <div className="form-section">
            <label htmlFor="Postal Code">Postal Code</label><br />
            <input type="text" placeholder="User Postal Code" className='account-form' disabled /> <br />
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
