
import React, {useState} from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import axios from 'axios';

function Login() {
    //contains user object
    const [user, setUser] = useState()
    //contains information of the error message that is sent
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState(""); 

    //function login pass in details
    const Validate = details => {
        console.log(details);

        axios.get("http://localhost:8080/clients/login/" + details.username + "&" + details.password)
        .then((response) => {
            setError("");
            const testUser = response.data;
            setUser(testUser);
            setEmail(details.email);
            setPass(details.password);
            
            localStorage.setItem('user', JSON.stringify(testUser));
            console.log(testUser);
            console.log("logged in");
        }, (error) => {
            setError("Your credentials are invalid");
        });
    }

    //function logout
    const Logout = () => {
        console.log("Logout");
        setUser({});
        localStorage.clear();
    }

    return (
        <div className="App">
            {/* if the email is null show this page */}
            {(email != "") ? (
                <div className="welcome">
                    <MainPage/>
                    {/* button calls logout function that sets fields to null */}
                    <button onClick={Logout}> Logout</button>
                </div>
            ) : (

                <LoginPage Login={Validate} error={error}/>
            )}
        </div>
    )}
export default Login;