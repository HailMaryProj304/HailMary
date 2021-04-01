import axios from "axios";
import React, { useState, Component } from "react";
import { Redirect, useHistory } from "react-router-dom";
import '../CSS/style.css';


function Register() {
  const [regDetails, setRegDetails] = useState({
    email: "",
    first_name: "",
    last_name: "",
    dob: "",
    phone_number: "",
    street_address: "",
    prov: "",
    country: "",
    postal_code: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
   
    axios.get("http://localhost:8080/clients/login/" + regDetails.email + "&" + regDetails.password)
        .then((response) => {
            console.log("Email is Taken")
            setError("Email is taken")
        }, (error) => {
          const res = axios.post(
            "http://localhost:8080/clients/RegisterClient",regDetails)
            setError("")
            console.log("TEST1")
            history.push("/login");
            return <Redirect to= 'src\Login.js' />
        });

  }

  return (
    <div>
      <form onSubmit={submitHandler}>
      <div className="container" style={{display:"flex", justifyContent:"center"}}>
          <h2 className="center-title">Register
          {(error != "") ? (<div className="error">{error}</div>) : ""}</h2>
          <div className="split left">
            <div className="form-group">
              <label>First name</label><br />
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                required
                onChange={(e) =>
                  setRegDetails({ ...regDetails, first_name: e.target.value })
                }
                value={regDetails.first_name}
              />
            </div>
            <div className="form-group">
              <label>Last name</label><br />
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                required
                onChange={(e) =>
                  setRegDetails({ ...regDetails, last_name: e.target.value })
                }
                value={regDetails.last_name}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label><br />
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                onChange={(e) =>
                  setRegDetails({ ...regDetails, email: e.target.value })
                }
                value={regDetails.email}
              />
            </div>
            <div className="form-group">
              <label>Password</label><br />
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                required
                onChange={(e) =>
                  setRegDetails({ ...regDetails, password: e.target.value })
                }
                value={regDetails.password}
              />
            </div>
          </div>
          <div className="split right">
            <div className="form-group">
              <label>Date of Birth</label><br />
              <input
                type="date"
                className="form-control"
                placeholder="Enter Date of Birth"
                required
                onChange={(e) =>
                  setRegDetails({ ...regDetails, dob: e.target.value })
                }
                value={regDetails.dob}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label><br />
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Phone Number"
                pattern="[0-9]{10}"
                required
                onChange={(e) =>
                  setRegDetails({ ...regDetails, phone_number: e.target.value })
                }
                value={regDetails.phone_number}
              />
            </div>
            <div className="form-group">
              <label>Street Address</label><br />
              <input
                type="text"
                className="form-control"
                placeholder="Street Address"
                required
                onChange={(e) =>
                  setRegDetails({
                    ...regDetails,
                    street_address: e.target.value,
                  })
                }
                value={regDetails.street_address}
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
                  setRegDetails({ ...regDetails, country: e.target.value })
                }
                value={regDetails.country}
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
                  setRegDetails({ ...regDetails, prov: e.target.value })
                }
                value={regDetails.prov}
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
              <label>Postal Code </label><br />
              <input
                type="text"
                className="form-control"
                placeholder="Enter Postal Code"
                maxLength="6"
                onChange={(e) =>
                  setRegDetails({ ...regDetails, postal_code: e.target.value })
                }
                value={regDetails.postal_code}
              />
            </div>
          </div>
          <div className="register-button">
            <input type="submit" className="button" value="Register"></input>
            <p>
              <a href="login" style={{color:"black"}}>Already registered?</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;