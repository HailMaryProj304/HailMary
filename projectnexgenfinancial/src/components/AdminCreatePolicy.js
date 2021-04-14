import React, { useState, useEffect } from "react";
import '../CSS/style.css';
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";


function AdminCreatePolicy() {
  
  const [createPolicyDetails, setcreatePolicyDetails] = useState({
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
    if(localStorage.getItem("createPolicyDetails") !== null) {
      setcreatePolicyDetails(JSON.parse(localStorage.getItem("createPolicyDetails")));
    }
    else {
       localStorage.removeItem("policyDetails");
       setcreatePolicyDetails({
        client : history.location.state.client,
      });
    }
    localStorage.setItem("createPolicyDetails", JSON.stringify(createPolicyDetails));
  }, []);

  useEffect(() => {
    localStorage.setItem("createPolicyDetails", JSON.stringify(createPolicyDetails));
  }, [createPolicyDetails]);

  const submitHandler = async e => {
    e.preventDefault();
    console.log("After add");
    console.log(createPolicyDetails);
    axios.put("http://localhost:8080/policies/add/", createPolicyDetails)
  }

  
  
  
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="split left">
          <div>
            <label htmlFor="Policy Number">Policy Number</label>
            <input type="text" placeholder="Policy Number"    className='form-control'
            onChange={(e) =>
              setcreatePolicyDetails({ ...createPolicyDetails, policyNumber: e.target.value })
            }
            defaultValue={createPolicyDetails.policyNumber} 
            /> <br />
          </div>
          <div>
            <label htmlFor="First Name">First Name</label>
            <input type="text" placeholder="User First Name" className='form-control' 
            defaultValue={createPolicyDetails.first_name}
            onChange={(e) =>
              setcreatePolicyDetails({ ...createPolicyDetails, first_name: e.target.value })
            }/> <br />
          </div>
          <div>
              <label htmlFor="Last Name">Last Name</label>
              <input type="text" placeholder="User Last Name" className='form-control' 
              defaultValue={createPolicyDetails.last_name}
              onChange={(e) =>
                setcreatePolicyDetails({ ...createPolicyDetails, last_name: e.target.value })
              }/> <br />
          </div>
          <div>
              <label htmlFor="Provider">Provider</label>
              <input type="text" placeholder="Provider" className='form-control' 
              defaultValue={createPolicyDetails.provider}
              onChange={(e) =>
                setcreatePolicyDetails({ ...createPolicyDetails, provider: e.target.value })
              }/> <br />
          </div>
        </div>
        <div className="split right">
          <div>
              <label htmlFor="Type">Type</label>
              <br />
              <input type="text" placeholder="Type" className='form-control' 
              defaultValue={createPolicyDetails.type}
              onChange={(e) =>
                setcreatePolicyDetails({ ...createPolicyDetails, type: e.target.value })
              }/> <br />
          </div>
          <div>
              <label htmlFor="Coverage">Coverage</label>
              <input type="number" placeholder="Coverage" className='form-control' 
              defaultValue={createPolicyDetails.coverage_amount}
              onChange={(e) =>
                setcreatePolicyDetails({ ...createPolicyDetails, coverage_amount: e.target.value })
              }/> <br />
          </div>
          <div>
              <label htmlFor="Start Date">Start Date</label>
              <input type="date" placeholder="Start Date" className='form-control' 
              defaultValue={createPolicyDetails.start_date}
              onChange={(e) =>
                setcreatePolicyDetails({ ...createPolicyDetails, start_date: e.target.value })
              }/> <br />
          </div>
          <div>
              <label htmlFor="End Date">End Date</label>
              <input type="date" placeholder="End Date" className='form-control' 
              defaultValue={createPolicyDetails.end_date}
              onChange={(e) =>
                setcreatePolicyDetails({ ...createPolicyDetails, end_date: e.target.value })
              } /> <br />
          </div>
          <div className="register-button">
            <input type="submit" className="button" value="Create"></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminCreatePolicy;