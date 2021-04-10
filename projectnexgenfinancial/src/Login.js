
import React, {useState} from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import AdminPage from './components/AdminPage';
import axios from 'axios';
import { Redirect, useHistory } from "react-router-dom";

function Login() {
    const [userType, setUserType] = useState("");
    //contains user object
    const [user, setUser] = useState("");
    //contains information of the error message that is sent
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState(""); 
    const history = useHistory();
    const redirect = () => {
        history.push('/')
    }
    //function login pass in details
    const Validate = details => {
        console.log(details);
        axios.get("http://localhost:8080/admin/login/" + details.username + "&" + details.password)
        .then((response) => {
            setError("");
            const testUser = response.data;
            console.log(testUser)
            if(!(testUser === "")) {
                setUser(testUser);
                setEmail(details.email);
                setPass(details.password);
                console.log("admin")
                localStorage.setItem('user', JSON.stringify(testUser));
                localStorage.setItem('type', JSON.stringify('admin'));
                console.log("logged in");
                setUserType("admin");
                redirect();
                window.location.reload();
            }
        })
            
        axios.get("http://localhost:8080/clients/login/" + details.username + "&" + details.password)
        .then((response) => {
            setError("");
            const testUser = response.data;
            console.log(testUser)
            if(!(testUser === "")) {
                setUser(testUser);
                setEmail(details.email);
                setPass(details.password);
                console.log("client")
                localStorage.setItem('user', JSON.stringify(testUser));
                console.log("logged in");
                setUserType("client");
                redirect();
                window.location.reload();
            }
            else {
                setError("Credentials are invalid")
                setUserType("");
            }
        })    
    
}
    
    //function logout
    const Logout = () => {
        console.log("Logout");
        setUser({});
        localStorage.clear();
        return <Redirect to="/" />;
    }



    return (
        <div className="App">
            {/* if the email is null show this page */}
            {(userType == "client") ? (
                (console.log("CLIENT IS LOGGEED IN NOW")),
                <div className="welcome">
                    <Redirect to="/MainPage" />
                    {/* button calls logout function that sets fields to null */}
                </div>
            ) : (userType == "admin") ? (
                (console.log("ADMIN IS LOGGEED IN NOW")),
                <div>
                    <Redirect to="/AdminPage" />
                </div>
            ) : (
                (console.log("User type: " + userType)),
                <LoginPage Login={Validate} error={error}/>
            )}
        
        </div>
    )}
export default Login;