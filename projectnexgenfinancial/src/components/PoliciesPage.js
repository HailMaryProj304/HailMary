import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Router, Route, Link } from 'react-router-dom';

function PoliciesPage() {
  const [policies, setPolicies] = useState([]);
  const [policiesContent, setContent] = useState([]);
  
  useEffect(() => {
   
        
    const testUser = localStorage.getItem('user');
    const user = JSON.parse(testUser);
    console.log(user.email);
  
    axios.get("http://localhost:8080/policies/email:" + user.email)
    .then((response) => {
      setPolicies(response.data);
      console.log(response.data);
    });
    setContent(policies.map(item => (

      <tr key={item.policy_id}>
        <td>{item.policyNumber}</td>
        <td>{item.provider}</td>
        <td>{item.type}</td>
        <td>{item.coverage_amount}</td>
        <td><Link to = 
            {{
            pathname: "/PolicyPage",
            state: {policy_id: item.policy_id}
          }}
        ><button type="button">Edit</button></Link></td>
      </tr>
    )));
      
    
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
            {policiesContent}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PoliciesPage;