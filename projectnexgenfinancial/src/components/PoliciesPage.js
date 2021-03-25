import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Router, Route, Link } from 'react-router-dom';

function PoliciesPage() {
  const [policies, setPolicies] = useState([]);

  const getPolicies = async () => {
    try {
          const user = await JSON.parse(localStorage.getItem('user'));
          console.log(user.email);
        
          const userPolicies = await axios.get("http://localhost:8080/policies/email:" + user.email);
          
          setPolicies(userPolicies.data);
          console.log(userPolicies.data);

    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect( () => {
   
    getPolicies();
  }, []);
    
  /*const thing = policies.map((policy, index) => (<div><li key={index}>{policy.id}</li></div>));*/
  
  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Policy Number</th>
              <th>Provider</th>
              <th>Type</th>
              <th>Coverage</th>
              </tr>
            {policies.map(item => (

              <tr key={item.policy_id}>
                <td>{item.policyNumber}</td>
                <td>{item.provider}</td>
                <td>{item.type}</td>
                <td>{item.coverage_amount}</td>
                <td><Link to = 
                    {{
                    pathname: "/PolicyPage",
                    state: {
                      policyNumber : item.policyNumber,
                      first_name : item.first_name,
                      last_name : item.last_name,
                      provider : item.provider,
                      type : item.type,
                      coverage : item.coverage_amount,
                      start_date : item.start_date,
                      end_date : item.end_date
                    }
                  }}
                ><button type="button">Edit</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PoliciesPage;