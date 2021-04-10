import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: white;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #e85a4f;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e85a4f;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #e85a4f;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #e85a4f;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #e85a4f;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LogoutButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #e85a4f;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #e85a4f;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #e85a4f;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const MyAccountButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: white;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #e85a4f;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e85a4f;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const AdminButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: white;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #e85a4f;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e85a4f;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
  }
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const Logout = () => {
    console.log("Logout");
    setUser({});
    setType({});
    localStorage.clear();
  }

  const getUser = async () => {
    try {
          const user = await JSON.parse(localStorage.getItem('user'));
          const type = await JSON.parse(localStorage.getItem('type'));
          console.log(user.email);
        
          setType(type);
          setUser(user);
          setEmail(user.email);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect( () => {
   
    getUser();
  }, []);

  var registerButton;
  var loginButton;
  var logoutButton;
  var myAccountButton;
  var adminButton;

  if(type == "admin") {
    console.log(user.email);
    logoutButton = <LogoutButton as="a" onClick={Logout} href="/">Logout</LogoutButton>
    myAccountButton = <MyAccountButton as="a" href="/MainPage">My Account</MyAccountButton>
    adminButton = <AdminButton as="a" href="/AdminPage">Control Page</AdminButton>
  }
  else if(email != "") {
    console.log(user.email);
    logoutButton = <LogoutButton as="a" onClick={Logout} href="/">Logout</LogoutButton>
    myAccountButton = <MyAccountButton as="a" href="/MainPage">My Account</MyAccountButton>
  }
  else {
    registerButton = <RegisterButton as="a" href="/register">Register</RegisterButton>
    loginButton = <LoginButton as="a" href="/login">Login</LoginButton>
  }

  return (
    <AccessibilityContainer>
      {registerButton}
      {loginButton}
      {adminButton}
      {myAccountButton}
      {logoutButton}
    </AccessibilityContainer>
  );
}
