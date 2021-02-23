
import React, {useState} from 'react';
import LoginPage from './components/LoginPage';

function Login() {
  //this user is to test logiing in replace with mysql function
    const testUser = {username: "test@test.com", password: "password"}
    //contains information of the user
    const [user, setUser] = useState({username: "", email: ""});
    //contains information of the error message that is sent 
    const [error, setError] = useState("");

    //function login pass in details
    const Validate = details => {
      console.log(details);

      if(details.email == testUser.email && details.password == testUser.password) {
        console.log("logged in");
        setUser({username: details.username, email: details.email});
      }

      else {
        console.log("Credentails do not match");
        setError("Your credentials do not match!");
      }
    }

    //function logout
    const Logout = () => {
      console.log("Logout");
      setUser({username: "", email: ""});
    }

    return (
      <div className="App">
        {/* if the email is null show this page */}
          {(user.email != "") ? (
            <div className="welcome">
              <h2>Welcome, <span>{user.username}</span></h2>
              {/* button calls logout function that sets fields to null */}
              <button onClick={Logout}> Logout</button>
            </div>
    ) : (
     
      <LoginPage Login={Validate} error={error}/>
    )}
    </div>
    )}
export default Login;
