import axios from "axios";
import React, { useState,  useEffect } from "react";
import {useLocation, useHistory} from "react-router-dom";
import "../CSS/style.css";
import { findRenderedComponentWithType } from "react-dom/test-utils";

document.body.style.overflowX = "hidden";

function ChangeClient() {

    const [userDetails, setUserDetails] = useState({
        client_id: '',
        email: '',
        first_name: '',
        last_name: '',
        dob: '',
        phone_number: '',
        street_address: '',
        prov: '',
        country: '',
        postal_code: '',
        password: '',
      });
  
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


  useEffect(() => {
    if(localStorage.getItem("clientChange") !== null) {
      setUserDetails(JSON.parse(localStorage.getItem("clientChange")));
    }
    else {
       localStorage.removeItem("clientChange");
       setUserDetails({
        client_id: history.location.state.client_id,
        email: history.location.state.email,
        first_name: history.location.state.first_name,
        last_name: history.location.state.last_name,
        dob: history.location.state.dob,
        phone_number: history.location.state.phone_number,
        street_address: history.location.state.street_address,
        prov: history.location.state.prov,
        country: history.location.state.country,
        postal_code: history.location.state.postal_code,
        password: history.location.state.password,
      });
    }
    localStorage.setItem("clientChange", JSON.stringify(userDetails));
  }, []);

  useEffect(() => {
    localStorage.setItem("clientChange", JSON.stringify(userDetails));
  }, [userDetails]);


  const submitHandler = (e) => {
    e.preventDefault();
    //make get Id by email axios here
    axios.put("http://localhost:8080/clients/update/", userDetails)
  }


  return (
    <div className="container" style={{display:"flex", justifyContent:"center"}}>
      <form onSubmit={submitHandler} className="account-form">
          <h2 className="center-title">Change Account Information</h2>
          <div className="split left">
            <div className="form-group">
              <label>First Name</label>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                required
                onChange={(e) =>
                  setUserDetails({ ...userDetails, first_name: e.target.value })
                }
                value={userDetails.first_name}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                required
                onChange={(e) =>
                  setUserDetails({ ...userDetails, last_name: e.target.value })
                }
                value={userDetails.last_name}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <br />
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                value={userDetails.email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                required
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                value={userDetails.password}
              />
            </div>
          </div>
          <div className="split right">
            <div className="form-group">
              <label>Date of Birth</label>
              <br />
              <input
                type="date"
                className="form-control"
                placeholder="Enter Date of Birth"
                required
                onChange={(e) =>
                  setUserDetails({ ...userDetails, dob: e.target.value })
                }
                value={userDetails.dob}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <br />
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Phone Number"
                pattern="[0-9]{10}"
                required
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phone_number: e.target.value })
                }
                value={userDetails.phone_number}
              />
            </div>
            <div className="form-group">
              <label>Street Address</label>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Street Address"
                required
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    street_address: e.target.value,
                  })
                }
                value={userDetails.street_address}
              />
            </div>
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label>Country </label>
              <br />
              <select
                name="country"
                id="country"
                className="select-item"
                required
                onChange={(e) =>
                  setUserDetails({ ...userDetails, country: e.target.value })
                }
                value={userDetails.country}
              >
                <option selected=""> </option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
              </select>
              {/* <input type="text" className="form-control" placeholder="Enter Country" /> */}
            </div>
            <div
              className="form-group"
              id="provCodes"
              style={{ marginBottom: "20px" }}
            >
              <label>Province/State</label>
              <br />
              <select
                name="provState"
                id="provState"
                className="select-item"
                required
                onChange={(e) =>
                  setUserDetails({ ...userDetails, prov: e.target.value })
                }
                value={userDetails.prov}
              >
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
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Enter Postal Code"
                maxLength="6"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, postal_code: e.target.value })
                }
                value={userDetails.postal_code}
              />
            </div>
          </div>
          <div className="change-button">
            <input type="submit" className="button" value="Change"></input>
          </div>
      </form>
    </div>
  );
}

export default ChangeClient;
