import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NexGenLogoImg from "../../CSS/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 150px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <Link to="/">
        <img src={NexGenLogoImg} alt="NexGen logo" />
        </Link>
      </LogoImg>
    </LogoWrapper>
  );
}
