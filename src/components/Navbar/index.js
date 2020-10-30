import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { motion } from "framer-motion";
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

  const buttonVariants = {
    hover: {
      scale: 1.1,
    },
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav scrollNav={scrollNav}>
          <NavContainer>
            <NavContainer>
              <NavLogo onClick={toggleHome} to="/">
                <motion.span variants={buttonVariants} whileHover="hover">
                  Home
                </motion.span>
              </NavLogo>

              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>

              <NavMenu>
                <NavItem>
                  <NavLinks
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    to="about"
                  >
                    <motion.span variants={buttonVariants} whileHover="hover">
                      About
                    </motion.span>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    to="discover"
                  >
                    <motion.span variants={buttonVariants} whileHover="hover">
                      Discover
                    </motion.span>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    to="services"
                  >
                    <motion.span variants={buttonVariants} whileHover="hover">
                      Services
                    </motion.span>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    to="signup"
                  >
                    <motion.span variants={buttonVariants} whileHover="hover">
                      Sign Up
                    </motion.span>
                  </NavLinks>
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
