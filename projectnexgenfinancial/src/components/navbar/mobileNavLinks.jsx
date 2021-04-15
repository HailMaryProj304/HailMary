import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 3% 1%;
  display: flex;
  left: 0;
  right: 0;
  top: 70px;
  list-style: none;
  background-color: #fff;
  flex-direction: column;
  position: absolute;
  overflow-x:hidden;
  padding-bottom: 5%;
  border-radius: 5px;
  z-index:999;
  box-shadow: 0 2px 0 rgba(15, 15, 15, 0.13);
`;

const LinkItem = styled.li`
  width: 100%;
  padding-left: 0.7em;
  padding-bottom: 1.1em;
  color: #222;
  font-weight: 700;
  font-size: 20px;
  display: flex;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="about">About us</Link>
          </LinkItem>
          <LinkItem>
            <Link href="services">Services</Link>
          </LinkItem>
          <LinkItem>
            <Link href="contact">Contact</Link>
          </LinkItem>
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
