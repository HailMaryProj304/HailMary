import React from "react";
import Policy from "../Policy";


function PolicyPage() {
  
  const [policy, setPolicy] = useState({policynum: "", firstName: "", lastName: "", provider: "", type: "", coverage: "", startDate: "", endDate: ""})

  const submitHandler = async e => {
    e.preventDefault();
    Policy(details);
  }
  
  
  return (
    <div className="container">
      <div className="split left">
        <div>
          <label htmlFor="Policy Number">Policy Number</label>
          <input type="text" placeholder="Policy Number"    className='form-control' disabled /> <br />
        </div>
        <div>
          <label htmlFor="First Name">First Name</label>
          <input type="text" placeholder="User First Name" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Last Name">Last Name</label>
            <input type="text" placeholder="User Last Name" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Provider">Provider</label>
            <input type="text" placeholder="Provider" className='form-control' disabled /> <br />
        </div>
      </div>
      <div className="split right">
        <div>
            <label htmlFor="Type">Type</label>
            <input type="text" placeholder="Type" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Coverage">Coverage</label>
            <input type="number" placeholder="Coverage" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="Start Date">Start Date</label>
            <input type="date" placeholder="Start Date" className='form-control' disabled /> <br />
        </div>
        <div>
            <label htmlFor="End Date">End Date</label>
            <input type="date" placeholder="End Date" className='form-control' disabled /> <br />
        </div>
      </div>
    </div>
  )
}

export default PolicyPage;