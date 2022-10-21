import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const NavbarBackground = styled.div`
  width: 100%;
  background-color: #000000;
`;

const NavbarContent = styled.div`
  width: min(1200px, 90%);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: nowrap;
  margin: 0 auto;
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

position:relative;
display:block;
height:77px;
width: 15%;
border-radius: 0px;
text-transform:uppercase;
background-color:transparent;
color:white;
font-size:18px;
overflow:hidden;
transition: all 500ms ease;
border: 2px solid #f7ca4c;

z-index: 0;
font-weight: 700;

&::before{
  content:'';
  position: absolute;
  left:0;
  right:0;
  top:0;
  margin:auto;
  background-color:#f7ca4c;
  transition: all 500ms ease;
  z-index: -1;
}

&::before{
  width: 0;
  heigth: 100%
}

 &:hover{
  background-color:#f7ca4c;

  &::before{
    width:100%;
  }

  
} 

`;

const NavMid = styled.div`
width:70%;
height:100%;
align-items: center;
background-color:#000000;
color: white;
`;

const NavRight = styled.div`
width:15%;
`;

const NavLeft = styled.div`
padding: 0 0 5px 0;
margin: 0 0 5px 0;
`;

const NavIcon = styled.div`
display:inline-block;
font-size: 2rem;
color: white;
padding: 0rem 1rem ;

`;

const Navbar = () => {
  return (
    <NavbarBackground>
      <NavbarContent>
        <NavLeft>
          <Image src={"/slon-logo.svg"} width={"40"} height={"40"} />
        </NavLeft>

        <NavMid>
          <NavbarMenu>
            <NavButton><p>Blusas</p></NavButton>
            <NavButton><p>Blazers</p></NavButton>
            <NavButton><p>Jeans</p></NavButton>
            <NavButton><p>Lenceria</p></NavButton>
          </NavbarMenu>
        </NavMid>

        <NavRight>
          <NavIcon>
            <FontAwesomeIcon icon={faInstagram} />{"  "}
          </NavIcon>
          <NavIcon>
            <FontAwesomeIcon icon={faFacebookF} />{"  "}
          </NavIcon>
          <NavIcon>
            <FontAwesomeIcon icon={faTiktok} />{"  "}
          </NavIcon>
        </NavRight>

      </NavbarContent>
    </NavbarBackground>
  );
};

export default Navbar;
