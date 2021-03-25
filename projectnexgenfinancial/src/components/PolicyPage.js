import React, { useState } from "react";
import '../CSS/style.css';
import { useLocation } from "react-router-dom";


function PolicyPage(props) {
  
  const [policy, setPolicy] = useState({});

  let location = useLocation();
  console.log(location);
  const [userDetails, setUserDetails] = useState({
    policynum: location.state.policyNumber, 
    first_name: location.state.first_name, 
    last_name: location.state.last_name, 
    provider: location.state.provider, 
    type: location.state.type, 
    coverage: location.state.coverage, 
    start_date: location.state.start_date, 
    end_date: location.state.end_date,
  });


  const submitHandler = async e => {
    e.preventDefault();
    //todo add policy update request
  }

  
  
  
  return (
    <div className="container">
      <div className="split left">
        <div>
          <label htmlFor="Policy Number">Policy Number</label>
          <input type="text" placeholder="Policy Number"    className='form-control'
          onChange={(e) =>
            setUserDetails({ ...userDetails, policynum: e.target.value })
          }
          value={userDetails.policynum} 
          disabled /> <br />
        </div>
        <div>
          <label htmlFor="First Name">First Name</label>
          <input type="text" placeholder="User First Name" className='form-control' 
          value={userDetails.first_name}
          onChange={(e) =>
            setUserDetails({ ...userDetails, policynum: e.target.value })
          }
          disabled /> <br />
        </div>
        <div>
            <label htmlFor="Last Name">Last Name</label>
            <input type="text" placeholder="User Last Name" className='form-control' 
            value={userDetails.last_name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, last_name: e.target.value })
            }
            disabled /> <br />
        </div>
        <div>
            <label htmlFor="Provider">Provider</label>
            <input type="text" placeholder="Provider" className='form-control' 
            value={userDetails.provider}
            onChange={(e) =>
              setUserDetails({ ...userDetails, provider: e.target.value })
            }
            disabled /> <br />
        </div>
      </div>
      <div className="split right">
        <div>
            <label htmlFor="Type">Type</label>
            <br />
            <input type="text" placeholder="Type" className='form-control' 
            value={userDetails.type}
            onChange={(e) =>
              setUserDetails({ ...userDetails, type: e.target.value })
            }
            disabled /> <br />
        </div>
        <div>
            <label htmlFor="Coverage">Coverage</label>
            <input type="number" placeholder="Coverage" className='form-control' 
            value={userDetails.coverage}
            onChange={(e) =>
              setUserDetails({ ...userDetails, coverage: e.target.value })
            }
            disabled /> <br />
        </div>
        <div>
            <label htmlFor="Start Date">Start Date</label>
            <input type="date" placeholder="Start Date" className='form-control' 
            value={userDetails.start_date}
            onChange={(e) =>
              setUserDetails({ ...userDetails, start_date: e.target.value })
            }
            disabled /> <br />
        </div>
        <div>
            <label htmlFor="End Date">End Date</label>
            <input type="date" placeholder="End Date" className='form-control' 
            value={userDetails.end_date}
            onChange={(e) =>
              setUserDetails({ ...userDetails, end_date: e.target.value })
            }
            disabled /> <br />
        </div>
      </div>
    </div>
  )
}

export default PolicyPage;