import axios from "axios";
import React, { useEffect, useState, Component } from "react";
import { Redirect, useHistory } from "react-router-dom";
import '../CSS/style.css';


function RegisterAdmin() {
  const redirect = () => {
    console.log("Logout");
    localStorage.clear();
    history.push('/')
  }
  const getUser= async () => {
    try {
          if(!localStorage.getItem('type'))
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

  const [regDetails, setRegDetails] = useState({
    email: "",
    role: 1,
    first_name: "",
    last_name: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
   
    axios.get("http://localhost:8080/admin/login/" + regDetails.email + "&" + regDetails.password)
        .then((response) => {
          const res = axios.post(
            "http://localhost:8080/admin/registerAdmin",regDetails)
            setError("")
            console.log("TEST1")
            history.push("/login");
            return <Redirect to= 'src\components\AdminPage' />
        }, (error) => {
          console.log("Email is Taken")
            setError("Email is taken")
        });

  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="innerForm" style={{height:"60vh"}}>
          <h2 className="center-title" style={{marginTop:"3rem"}}>Register Admin
          {(error != "") ? (<div className="error">{error}</div>) : ""}</h2>
          <div style={{margin:"0"}}>
            <div className="form-group">
              <label>First name</label>
              <br />
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
              <label>Last name</label>
              <br />
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
              <label>Email Address</label>
              <br />
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
              <label>Password</label>
              <br />
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
          <div className="register-button" style={{width:"200px", marginTop:"55vh"}}>
            <input type="submit" className="button" value="Register"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterAdmin;