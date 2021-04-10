import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Redirect, Router, Route, Link } from 'react-router-dom';

function Logout() {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const Logout = () => {
    console.log("Logout");
    setUser({});
    localStorage.clear();
    return <Redirect to="/login" />;
  }

  const getUser = async () => {
    try {
          const user = await JSON.parse(localStorage.getItem('user'));
          console.log(user.email);
          setEmail("a");
          console.log(email);
          setUser(user);    
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect( () => {
    getUser();
  }, []);
    
  /*const thing = policies.map((policy, index) => (<div><li key={index}>{policy.id}</li></div>));*/
  
  return (
    <div>
        {(email == "") ? (
            (console.log("logout")),
            (console.log(email)),
            <button hidden onLoad={Logout}>a</button>
        ) : (
            (console.log("user logged in"))
        )}
    </div>
  );
}
export default Logout;