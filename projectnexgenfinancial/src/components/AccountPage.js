import React from "react";
import "../CSS/style.css";

function AccountPage() {
  return (
    <div className="container">
      <div className="split left">
        <div>
          <label htmlFor="First Name">First Name</label>
          <input type="text" placeholder="User First Name" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Last Name">Last Name</label>
            <input type="text" placeholder="User Last Name" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Email">Email Address</label>
            <input type="text" placeholder="User Email" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Password">Password</label>
            <input type="text" placeholder="User Password" className='form-control' disabled /> <br />
        </div>
      </div>
      <div className="split right">
        <div>
            <label htmlFor="Date-Of-Birth">Date of Birth</label>
            <input type="date" placeholder="Date of Birth" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Phone Number">Phone Number</label>
            <input type="tel" placeholder="User Phone" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Street Address">Street Address</label>
            <input type="text" placeholder="User Address" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Country">Country</label><br />
            <input type="text" placeholder="User Country" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Province/State">Province/State</label>
            <input type="text" placeholder="User Provice/State" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Postal Code">Postal Code</label>
            <input type="text" placeholder="User Postal Code" className='form-control' disabled /> <br />
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
