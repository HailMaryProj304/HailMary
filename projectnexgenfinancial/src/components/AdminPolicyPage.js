import React, { useState, useEffect } from "react";
import '../CSS/style.css';
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";


function AdminPolicyPage() {
  
  const [userDetails, setUserDetails] = useState({
        policy_id : '',
        client : '',
        policyNumber: '', 
        first_name: '', 
        last_name: '', 
        provider: '', 
        type: '', 
        coverage_amount: '', 
        start_date: '', 
        end_date: ''
  });
  let history = useHistory();
  const redirect = () => {
    console.log("Logout");
    localStorage.clear();
    history.push('/')
  }

  useEffect(() => {
    if(localStorage.getItem("adminUserDetails") !== null) {
      setUserDetails(JSON.parse(localStorage.getItem("adminUserDetails")));
    }
    else {
       localStorage.removeItem("adminUserDetails");
       setUserDetails({
        policy_id : history.location.state.policy_id,
        client : history.location.state.client,
        policyNumber: history.location.state.policyNumber, 
        first_name: history.location.state.first_name, 
        last_name: history.location.state.last_name, 
        provider: history.location.state.provider, 
        type: history.location.state.type, 
        coverage_amount: history.location.state.coverage, 
        start_date: history.location.state.start_date, 
        end_date: history.location.state.end_date,
      });
    }
    localStorage.setItem("adminUserDetails", JSON.stringify(userDetails));
  }, []);

  useEffect(() => {
    localStorage.setItem("adminUserDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  const submitHandler = async e => {
    e.preventDefault();
    //todo add policy update request
    console.log("After update");
    console.log(userDetails);
    axios.put("http://localhost:8080/policies/update/", userDetails)
  }

  
  
  
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="split left">
          <div>
            <label htmlFor="Policy Number">Policy Number</label>
            <input type="text" placeholder="Policy Number"    className='form-control'
            onChange={(e) =>
              setUserDetails({ ...userDetails, policyNumber: e.target.value })
            }
            defaultValue={userDetails.policyNumber} 
            /> <br />
          </div>
          <div>
            <label htmlFor="First Name">First Name</label>
            <input type="text" placeholder="User First Name" className='form-control' 
            defaultValue={userDetails.first_name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, first_name: e.target.value })
            }/> <br />
          </div>
          <div>
              <label htmlFor="Last Name">Last Name</label>
              <input type="text" placeholder="User Last Name" className='form-control' 
              defaultValue={userDetails.last_name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, last_name: e.target.value })
              }/> <br />
          </div>
          <div>
              <label htmlFor="Provider">Provider</label>
              <input type="text" placeholder="Provider" className='form-control' 
              defaultValue={userDetails.provider}
              onChange={(e) =>
                setUserDetails({ ...userDetails, provider: e.target.value })
              }/> <br />
          </div>
        </div>
        <div className="split right">
          <div>
              <label htmlFor="Type">Type</label>
              <br />
              <input type="text" placeholder="Type" className='form-control' 
              defaultValue={userDetails.type}
              onChange={(e) =>
                setUserDetails({ ...userDetails, type: e.target.value })
              }/> <br />
          </div>
          <div>
              <label htmlFor="Coverage">Coverage</label>
              <input type="number" placeholder="Coverage" className='form-control' 
              defaultValue={userDetails.coverage_amount}
              onChange={(e) =>
                setUserDetails({ ...userDetails, coverage_amount: e.target.value })
              }/> <br />
          </div>
          <div>
              <label htmlFor="Start Date">Start Date</label>
              <input type="date" placeholder="Start Date" className='form-control' 
              defaultValue={userDetails.start_date}
              onChange={(e) =>
                setUserDetails({ ...userDetails, start_date: e.target.value })
              }/> <br />
          </div>
          <div>
              <label htmlFor="End Date">End Date</label>
              <input type="date" placeholder="End Date" className='form-control' 
              defaultValue={userDetails.end_date}
              onChange={(e) =>
                setUserDetails({ ...userDetails, end_date: e.target.value })
              } /> <br />
          </div>
          <div className="register-button">
            <input type="submit" className="button" value="Change"></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminPolicyPage;