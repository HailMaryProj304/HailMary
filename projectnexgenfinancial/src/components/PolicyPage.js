import React, { useState, useEffect } from "react";
import '../CSS/style.css';
import { useLocation, useHistory } from "react-router-dom";


function PolicyPage(props) {
  
  const [userDetails, setUserDetails] = useState({});

  let history = useHistory();
  const redirect = () => {
    console.log("Logout");
    localStorage.clear();
    history.push("/");
  }
  //const location = useLocation();
  useEffect(() => {
    if(localStorage.getItem("userDetails") !== null) {
      setUserDetails(localStorage.getItem("userDetails"));
    }
    else {
       setUserDetails({
        policyNumber: history.location.state.policyNumber, 
        first_name: history.location.state.first_name, 
        last_name: history.location.state.last_name, 
        provider: history.location.state.provider, 
        type: history.location.state.type, 
        coverage: history.location.state.coverage, 
        start_date: history.location.state.start_date, 
        end_date: history.location.state.end_date,
      });
    }
    localStorage.setItem("userDetails", userDetails);
  }, []);
  
  
  //history.push("/PolicyPage", userDetails);

  const submitHandler = async e => {
    e.preventDefault();
    //todo add policy update request
  }

  
  return (
    <div className="container" style={{display:"flex", justifyContent:"center"}}>
      <div className="split left">
        <div>
          <label htmlFor="Policy Number">Policy Number</label>
          <input type="text" placeholder="Policy Number"    className='form-control'
          onChange={(e) =>
            setUserDetails({ ...userDetails, policyNumber: e.target.value })
          }
          value={userDetails.policyNumber} 
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