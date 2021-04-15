import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Route, Link } from "react-router-dom";

function PoliciesPage() {
  let history = useHistory();
  const redirect = () => {
    console.log("Logout");
    localStorage.clear();
    history.push("/");
  };

  
  const [policies, setPolicies] = useState([]);
  const [testUser, setTestUser] = useState([]);

  const [emailDetails, setEmailDetails] = useState({
    from: "",
    name: "",
    topic: "",
    clicked: false
  });

  function handleClick(givenEmail, givenName, givenTopic) {
    setEmailDetails({
      from: givenEmail,
      name: givenName,
      topic: givenTopic,
      clicked: true
    });
  }
  const getPolicies = async () => {
    try {
      if (!localStorage.getItem("user")) {
        redirect();
      }
      const user = await JSON.parse(localStorage.getItem("user"));
      setTestUser(user);
      const userPolicies = await axios.get(
        "http://localhost:8080/policies/email:" + user.email
      );
      setPolicies(userPolicies.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if(emailDetails.clicked == true) {
      axios.post("http://localhost:8080/clients/sendEmail", emailDetails);
      alert("Email Sent");
      console.log(emailDetails);
    }
  }, [emailDetails.clicked]);

  useEffect(() => {
    getPolicies();
  }, []);

  /*const thing = policies.map((policy, index) => (<div><li key={index}>{policy.id}</li></div>));*/

  return (
    <div>
      <form style={{ marginTop: "10vh", overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Policy Number</th>
              <th>Provider</th>
              <th>Type</th>
              <th>Coverage</th>
              <th>View Policy</th>
              <th>Request Assistance</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((item) => (
              <tr key={item.policy_id}>
                <td className="policiesTable">{item.policyNumber}</td>
                <td className="policiesTable">{item.provider}</td>
                <td className="policiesTable">{item.type}</td>
                <td className="policiesTable">{item.coverage_amount}</td>
                <td className="policiesTable">
                <button
                  type="button"
                  onClick={() => {
                    history.push({
                      pathname: "/PolicyPage",
                      state: {
                        policyNumber: item.policyNumber,
                        first_name: item.first_name,
                        last_name: item.last_name,
                        provider: item.provider,
                        type: item.type,
                        coverage: item.coverage_amount,
                        start_date: item.start_date,
                        end_date: item.end_date,
                      }
                    });
                  }}
                  className="tableButton1"
                >
                  View
                </button>
                </td>
                <td className="policiesTable">
                  <button
                    type="button"
                    onClick={() =>
                      handleClick(
                        testUser.email,
                        testUser.first_name + " " + testUser.last_name,
                        testUser.first_name + 
                          " requires assistance regarding policy " +
                          item.policyNumber
                      )
                    }
                    className="tableButton1"
                  >
                    Need Contact For This Policy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
export default PoliciesPage;
