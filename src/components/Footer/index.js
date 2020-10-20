import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkItems,
  FooterLink,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle >Terms of service</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Locations</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Contact us</FooterLink>
              <FooterLink to="/signin">FAQ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle >Terms of service</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Locations</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Contact us</FooterLink>
              <FooterLink to="/signin">FAQ</FooterLink>
            </FooterLinkItems>
            
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle >Terms of service</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Locations</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Contact us</FooterLink>
              <FooterLink to="/signin">FAQ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle >Terms of service</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Locations</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Contact us</FooterLink>
              <FooterLink to="/signin">FAQ</FooterLink>
            </FooterLinkItems>
            
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
