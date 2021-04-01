import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <RegisterButton as="a" href="/register">Register</RegisterButton>
      <LoginButton as="a" href="/login">Login</LoginButton>
    </AccessibilityContainer>
  );
}
