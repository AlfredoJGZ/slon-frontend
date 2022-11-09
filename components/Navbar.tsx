import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const NavbarBackground = styled.div`
  width: 100%;
  background-color: #000000;
  position: fixed;
  z-index: 1;
  &.transparent {
    background-color: transparent;
  }
`;

const NavbarContent = styled.div`
  width: min(1200px, 90%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0 auto;
  @media (max-width: 720px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

const NavbarMenu = styled.nav`
  height: 100%;

  display: flex;
  align-items: center;
  color: #000000;
`;

/* padding: 0 5px 5px;
margin: 0px;
border:none;
display: block;
width:20%;
background-color:#000000;
color: white; */
const NavButton = styled.button`
  margin: 0 5px;

  position: relative;
  display: block;

  border-radius: 0px;
  text-transform: uppercase;
  background-color: transparent;
  color: white;
  font-size: 14px;
  text-align: center;

  transition: all 500ms ease;

  z-index: 0;
  font-weight: 700;

  &::after {
    content: "";
    display: block;
    position: absolute;
    background-color: #f7ca4c;
    transition: all 700ms ease;
    z-index: -1;
    bottom: -1rem;
  }

  &::after {
    width: 0;
    height: 2px;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 720px) {
    padding: 0 1rem;
  }
`;

const NavMid = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-wrap: no wrap;
  align-items: center;
  background-color: #000000;
  color: white;

  @media (max-width: 720px) {
    margin-bottom: 10px;
    order: 3;
    width: 100%;

    &:hover div {
      border: 2px solid #c8a936;
      max-height: 100px;
      border-radius: 4px;
    }
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 50px;
`;

const NavLeft = styled.div``;

const NavIcon = styled.div`
  display: inline-block;
  font-size: 2rem;
  color: white;
  padding: 0rem 1rem;
`;

const Navbar = () => {
  return (
    <NavbarBackground className="transparent">
      <NavbarContent>
        <NavLeft>
          <Image src={"/slon-logo.svg"} width={"60"} height={"60"} />
        </NavLeft>

        <NavMid>
          <NavbarMenu>
            <NavButton>Blusas</NavButton>
            <NavButton>Blazers</NavButton>
            <NavButton>Jeans</NavButton>
            <NavButton>Lenceria</NavButton>
          </NavbarMenu>
        </NavMid>

        <NavRight>
          <NavIcon>
            <FontAwesomeIcon icon={faInstagram} />
            {"  "}
          </NavIcon>
          <NavIcon>
            <FontAwesomeIcon icon={faFacebookF} />
            {"  "}
          </NavIcon>
          <NavIcon>
            <FontAwesomeIcon icon={faTiktok} />
            {"  "}
          </NavIcon>
        </NavRight>
      </NavbarContent>
    </NavbarBackground>
  );
};

export default Navbar;
