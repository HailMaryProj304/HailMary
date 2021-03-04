import axios from "axios";
import React, { useState, Component } from "react";
import "../CSS/LoginPage.css";
//FIX DROP DOWN MENU (MUST CLICK TO GET VALUEEE) && ADD ERROR MESSAGES
// function ProvCodes() {
//   return (
//     <div className="form-group" id="provCodes">
//       <label>Province</label>
//       <select name="province" id="province">
//         <option value="AB">AB</option> //Alberta
//         <option value="BC">BC</option> //British Columbia
//         <option value="MB">MB</option> //Manitoba
//         <option value="NB">NB</option> //New Brunswick
//         <option value="NL">NL</option> //Newfoundland and Labrador
//         <option value="NT">NT</option> //Northwest Territories
//         <option value="NS">NS</option> //Nova Scotia
//         <option value="NU">NU</option> //Nunavut
//         <option value="ON">ON</option> //Ontario
//         <option value="PE">PE</option> //Prince Edward Island
//         <option value="QC">QC</option> //Quebec
//         <option value="SK">SK</option> //Saskatchewan
//         <option value="YT">YT</option> //Yukon
//       </select>
//     </div>
//   );
// }

// function StateCodes() {
//   return (
//     <div className="form-group" id="stateCodes">
//       <label>State</label>
//       <select name="state" id="state">
//         <option value="AL">AL</option> //Alabama
//         <option value="AK">AK</option> //Alaska
//         <option value="AZ">AZ</option> //Arizona
//         <option value="AR">AR</option> //Arkansas
//         <option value="CA">CA</option> //California
//         <option value="CO">CO</option> //Colorado
//         <option value="CT">CT</option> //Connecticut
//         <option value="DE">DE</option> //Delaware
//         <option value="DC">DC</option> //District of Columbia
//         <option value="FL">FL</option> //Florida
//         <option value="GA">GA</option> //Georgia
//         <option value="HI">HI</option> //Hawaii
//         <option value="ID">ID</option> //Idaho
//         <option value="IL">IL</option> //Illinois
//         <option value="IN">IN</option> //Indiana
//         <option value="IA">IA</option> //Iowa
//         <option value="KS">KS</option> //Kansas
//         <option value="KY">KY</option> //Kentucky
//         <option value="LA">LA</option> //Louisiana
//         <option value="ME">ME</option> //Maine
//         <option value="MD">MD</option> //Maryland
//         <option value="MA">MA</option> //Massachusetts
//         <option value="MI">MI</option> //Michigan
//         <option value="MN">MN</option> //Minnesota
//         <option value="MS">MS</option> //Mississippi
//         <option value="MO">MO</option> //Missouri
//         <option value="MT">MT</option> //Montana
//         <option value="NE">NE</option> //Nebraska
//         <option value="NV">NV</option> //Nevada
//         <option value="NH">NH</option> //New Hampshire
//         <option value="NJ">NJ</option> //New Jersey
//         <option value="NM">NM</option> //New Mexico
//         <option value="NY">NY</option> //New York
//         <option value="NC">NC</option> //North Carolina
//         <option value="ND">ND</option> //North Dakota
//         <option value="OH">OH</option> //Ohio
//         <option value="OK">OK</option> //Oklahoma
//         <option value="OR">OR</option> //Oregon
//         <option value="PA">PA</option> //Pennsylvania
//         <option value="PR">PR</option> //Puerto Rico
//         <option value="RI">RI</option> //Rhode Island
//         <option value="SC">SC</option> //South Carolina
//         <option value="SD">SD</option> //South Dakota
//         <option value="TN">TN</option> //Tennessee
//         <option value="TX">TX</option> //Texas
//         <option value="UT">UT</option> //Utah
//         <option value="VT">VT</option> //Vermont
//         <option value="VI">VI</option> //Virgin Islands
//         <option value="VA">VA</option> //Virginia
//         <option value="WA">WA</option> //Washington
//         <option value="WV">WV</option> //West Virginia
//         <option value="WI">WI</option> //Wisconsin
//         <option value="WY">WY</option> //Wyoming
//       </select>
//     </div>
//   );
// }

function Register() {
  const [regDetails, setRegDetails] = useState({email: "", first_name: "", last_name: "", dob: "", phone_number: "", street_address: "", prov: "", country: "", postal_code: "", password: ""})
  const [error, setError] = useState(null)
  const submitHandler = e => {
    e.preventDefault();
    // axios.get("http://localhost:8080/clients/addClient/" + regDetails.email + "&" + regDetails.first_name + "&" + regDetails.last_name + "&" + regDetails.dob + "&" + regDetails.phone_number + "&" 
    // + regDetails.street_address + "&" + regDetails.prov + "&" + regDetails.country + "&" + regDetails.postal_code + "&" + regDetails.password)
    const res = axios.post('http://localhost:8080/clients/RegisterClient', regDetails);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="innerForm">
        <div className="split left">  
          <h3>Register</h3>
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              required onChange={e => setRegDetails({...regDetails, first_name: e.target.value})} value={regDetails.first_name}
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              required onChange={e => setRegDetails({...regDetails, last_name: e.target.value})} value={regDetails.last_name}
              
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required onChange={e => setRegDetails({...regDetails, email: e.target.value})} value={regDetails.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required onChange={e => setRegDetails({...regDetails, password: e.target.value})} value={regDetails.password}
            />
          </div>
          //SPLIT HERE
          </div>
          <div className="split right">
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter Date of Birth"
                required onChange={e => setRegDetails({...regDetails, dob: e.target.value})} value={regDetails.dob}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Phone NumbeSDSADr"
                pattern="[0-9]{10}"
                required onChange={e => setRegDetails({...regDetails, phone_number: e.target.value})} value={regDetails.phone_number}
              />
            </div>

            <div className="form-group">
              <label>Street Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Street Address"
                required onChange={e => setRegDetails({...regDetails, street_address: e.target.value})} value={regDetails.street_address}
              />
            </div>

            <div className="form-group">
              <label>Country </label>
              <select name="country" id="country" required onChange={e => setRegDetails({...regDetails, country: e.target.value})} value={regDetails.country}>
                <option selected= ""> </option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
              </select>
              {/* <input type="text" className="form-control" placeholder="Enter Country" /> */}
            </div>

            <div className="form-group" id="provCodes">
              <label>Province/State</label>
              <select name="provState" id="provState" required onChange={e => setRegDetails({...regDetails, prov: e.target.value})} value={regDetails.prov}> 
                <optgroup label="Province">
                  <option selected=""> </option>
                  <option value="AB">AB</option>
                  <option value="BC">BC</option>
                  <option value="MB">MB</option>
                  <option value="NB">NB</option>
                  <option value="NL">NL</option>
                  <option value="NT">NT</option>
                  <option value="NS">NS</option>
                  <option value="NU">NU</option>
                  <option value="ON">ON</option>
                  <option value="PE">PE</option>
                  <option value="QC">QC</option>
                  <option value="SK">SK</option>
                  <option value="YT">YT</option>
                </optgroup>
                <optgroup label="State">
                  <option value="AL">AL</option> //Alabama
                  <option value="AK">AK</option> //Alaska
                  <option value="AZ">AZ</option> //Arizona
                  <option value="AR">AR</option> //Arkansas
                  <option value="CA">CA</option> //California
                  <option value="CO">CO</option> //Colorado
                  <option value="CT">CT</option> //Connecticut
                  <option value="DE">DE</option> //Delaware
                  <option value="DC">DC</option> //District of Columbia
                  <option value="FL">FL</option> //Florida
                  <option value="GA">GA</option> //Georgia
                  <option value="HI">HI</option> //Hawaii
                  <option value="ID">ID</option> //Idaho
                  <option value="IL">IL</option> //Illinois
                  <option value="IN">IN</option> //Indiana
                  <option value="IA">IA</option> //Iowa
                  <option value="KS">KS</option> //Kansas
                  <option value="KY">KY</option> //Kentucky
                  <option value="LA">LA</option> //Louisiana
                  <option value="ME">ME</option> //Maine
                  <option value="MD">MD</option> //Maryland
                  <option value="MA">MA</option> //Massachusetts
                  <option value="MI">MI</option> //Michigan
                  <option value="MN">MN</option> //Minnesota
                  <option value="MS">MS</option> //Mississippi
                  <option value="MO">MO</option> //Missouri
                  <option value="MT">MT</option> //Montana
                  <option value="NE">NE</option> //Nebraska
                  <option value="NV">NV</option> //Nevada
                  <option value="NH">NH</option> //New Hampshire
                  <option value="NJ">NJ</option> //New Jersey
                  <option value="NM">NM</option> //New Mexico
                  <option value="NY">NY</option> //New York
                  <option value="NC">NC</option> //North Carolina
                  <option value="ND">ND</option> //North Dakota
                  <option value="OH">OH</option> //Ohio
                  <option value="OK">OK</option> //Oklahoma
                  <option value="OR">OR</option> //Oregon
                  <option value="PA">PA</option> //Pennsylvania
                  <option value="PR">PR</option> //Puerto Rico
                  <option value="RI">RI</option> //Rhode Island
                  <option value="SC">SC</option> //South Carolina
                  <option value="SD">SD</option> //South Dakota
                  <option value="TN">TN</option> //Tennessee
                  <option value="TX">TX</option> //Texas
                  <option value="UT">UT</option> //Utah
                  <option value="VT">VT</option> //Vermont
                  <option value="VI">VI</option> //Virgin Islands
                  <option value="VA">VA</option> //Virginia
                  <option value="WA">WA</option> //Washington
                  <option value="WV">WV</option> //West Virginia
                  <option value="WI">WI</option> //Wisconsin
                  <option value="WY">WY</option> //Wyoming
                </optgroup>
              </select>
            </div>

            <div className="form-group">
              <label>Postal Code </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Postal Code"
                maxLength="6"
                onChange={e => setRegDetails({...regDetails, postal_code: e.target.value})} value={regDetails.postal_code}
              />
            </div>
            </div>
          <div className="register-button">
            <input type="submit" className="button" value="Register"></input>
            <p>
              <a href="login">Already registered?</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
