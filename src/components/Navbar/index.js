import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarComponents";
const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav scrollNav={scrollNav}>
          <NavContainer>
            <NavContainer>
              <NavLogo onClick={toggleHome} to="/">
                Hello
              </NavLogo>

              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>

              <NavMenu>
                <NavItem>
                  <NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="discover">Discover</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="services">Services</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="signup">Sign up</NavLinks>
                </NavItem>

                <NavBtn>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
              </NavMenu>
            </NavContainer>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
