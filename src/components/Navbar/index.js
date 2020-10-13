import React from "react";
import { Nav, NavContainer, NavLogo } from "./NavbarComponents";
import { BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <Nav>
        <NavContainer>
          <NavLogo>Hello</NavLogo>
        </NavContainer>
      </Nav>
    </Router>
  );
};

export default NavBar;
