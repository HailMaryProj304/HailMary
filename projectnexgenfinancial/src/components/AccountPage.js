import React from 'react'


function AccountPage() {
    return (
        <div>
           <label htmlFor="First Name">First Name</label>
           <input type="text" placeholder="User First Name" disabled/> <br/>
           
           <label htmlFor="Last Name">Last Name</label>
           <input type="text" placeholder="User Last Name" disabled/> <br/>

           <label htmlFor="Email">Email Address</label>
           <input type="text" placeholder="User Email" disabled/> <br/>

           <label htmlFor="Password">Password</label>
           <input type="text" placeholder="User Password" disabled/> <br/>

           <label htmlFor="Date-Of-Birth">Date of Birth</label>
           <input type="date" placeholder="Date of Birth" disabled/> <br/>

           <label htmlFor="Phone Number">Phone Number</label>
           <input type="tel" placeholder="User Phone" disabled/> <br/>

           <label htmlFor="Street Address">Street Address</label>
           <input type="text" placeholder="User Address" disabled/> <br/>

           <label htmlFor="Country">Country</label>
           <input type="text" placeholder="User Country" disabled/> <br/>

           <label htmlFor="Province/State">Province/State</label>
           <input type="text" placeholder="User Provice/State" disabled/> <br/>

           <label htmlFor="Postal Code">Postal Code</label>
           <input type="text" placeholder="User Postal Code" disabled/> <br/>

           
        </div>
    )
}

export default AccountPage;
