
import React, {useState} from 'react';
import LoginPage from './components/LoginPage';
import axios from 'axios';

function Login() {

    //contains information of the user
    const [user, setUser] = useState({username: "", email: ""});
    //contains information of the error message that is sent
    const [error, setError] = useState("");

    //function login pass in details
    const Validate = details => {
        console.log(details);

        axios.get("http://localhost:8080/clients/login/" + details.username + "&" + details.password)
        .then((response) => {
            setError("");
            const testUser = response.data;
            setUser(testUser);
        }, (error) => {
            setError("Your credentials are invalid");
        });
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
