
import React, {useState} from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import axios from 'axios';
import { Redirect, useHistory } from "react-router-dom";

function Login() {
    //contains user object
    const [user, setUser] = useState()
    //contains information of the error message that is sent
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState(""); 
    const history = useHistory();
    //function login pass in details
    const Validate = details => {
        console.log(details);
        axios.get("http://localhost:8080/admin/login/" + details.username + "&" + details.password)
        .then((response) => {
            setError("");
            const testUser = response.data;
            if(!(testUser === null)) {
                setUser(testUser);
                setEmail(details.email);
                setPass(details.password);
                
                localStorage.setItem('user', JSON.stringify(testUser));
                console.log(testUser);
                console.log("logged in");
                return "admin";
            }
        })
            
        axios.get("http://localhost:8080/clients/login/" + details.username + "&" + details.password)
        .then((response) => {
            setError("");
            const testUser = response.data;
            if(!(testUser === null)) {
                setUser(testUser);
                setEmail(details.email);
                setPass(details.password);
                
                localStorage.setItem('user', JSON.stringify(testUser));
                console.log(testUser);
                console.log("logged in");
                return "client";
            }

            else {
                setError("Credentials are invalid")
                return "";
            }
        })

        
       
    
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