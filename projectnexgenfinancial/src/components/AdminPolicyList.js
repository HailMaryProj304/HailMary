import React, { useState, useEffect, cloneElement } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import axios from 'axios';

function AdminPolicyList () {

  let history = useHistory();
  const redirect = () => {
    console.log("Logout");
    localStorage.clear();
    history.push('/')
  }
  let location = useLocation();
  const [policies, setPolicies] = useState([]);
  const getPolicies = async () => {
    try {
          const userPolicies = await axios.get("http://localhost:8080/policies/email:" + location.state.email);
          setPolicies(userPolicies.data);
    }
    catch(err) {
      console.error(err.message);
    }
  };
  useEffect( () => {
   
    getPolicies();
  }, []);

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
                <td><button
                  type="button"
                  onClick={() => {
                    history.push({
                      pathname: "/AdminPolicyPage",
                      state: {
                        policyNumber : item.policyNumber,
                        first_name : item.first_name,
                        last_name : item.last_name,
                        provider : item.provider,
                        type : item.type,
                        coverage : item.coverage_amount,
                        start_date : item.start_date,
                        end_date : item.end_date,
                        policy_id : item.policy_id,
                        client : item.client
                    }
                    });
                    localStorage.removeItem("adminUserDetails");
                  }}
                  className="tableButton"
                >
                  View
                </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPolicyList