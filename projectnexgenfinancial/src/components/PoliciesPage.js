import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, Route, Link } from 'react-router-dom';

function PoliciesPage() {
  let history = useHistory();
  const redirect = () => {
    console.log("Logout");
    localStorage.clear();
    history.push('/')
  }

  const [policies, setPolicies] = useState([]);
  const [testUser, setTestUser] = useState([]);
  
  const [emailDetails, setEmailDetails] = useState({
    email: "",
    name: "",
    topic: "",
  });

  function handleClick(givenEmail, givenName, givenTopic) {
    setEmailDetails({email: givenEmail, name: givenName, topic: givenTopic})
    console.log(emailDetails)
    axios.post("http://localhost:8080/clients/sendEmail", emailDetails);
    alert("Email Sent")
  }
  const getPolicies = async () => {
    try {
          if(!localStorage.getItem('user'))
              {
                redirect();
              }
          const user = await JSON.parse(localStorage.getItem('user'));
          setTestUser(user);
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
                ><button type="button">View</button></Link></td>
                <td>
                  <button type="button" onClick={() => handleClick(testUser.email, testUser.first_name + " " + testUser.last_name, testUser.first_name + " " + testUser.last_name + " requires assistance regarding policy " + item.policyNumber) }>Need Contact For This Policy</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PoliciesPage;