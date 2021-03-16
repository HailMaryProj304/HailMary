import React, {useState, useEffect} from 'react';
import axios from 'axios';
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

      <li key={item.id}>{item.type}</li>
    )));
      
    
  }, []);
    
  /*const thing = policies.map((policy, index) => (<div><li key={index}>{policy.id}</li></div>));*/
  

  return (
    <div>
      <ul>
        {policiesContent}
      </ul>
    </div>
  );
}
export default PoliciesPage;