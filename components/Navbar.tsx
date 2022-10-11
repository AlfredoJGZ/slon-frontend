import React from "react";
import styled from "styled-components";
import Image from "next/image";

const NavbarBackground = styled.div`
  width: 100%;
  background-color: #ff456f;
`;

const NavbarContent = styled.div`
  width: min(1200px, 90%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0 auto;
`;

const Navbar = () => {
  return (
    <NavbarBackground>
      <NavbarContent>
        <Image src={"/slon-logo.svg"} width={"100"} height={"100"} />
        <nav>
          <button>BTN 01`</button>
          <button>BTN 01`</button>
          <button>BTN 01`</button>
          <button>BTN 01`</button>
        </nav>
      </NavbarContent>
    </NavbarBackground>
  );
};

export default Navbar;
