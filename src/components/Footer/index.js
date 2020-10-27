import React from "react";
import{FaTwitter,FaGithub,FaLinkedin,FaMedium} from "react-icons/fa"
import {
  FooterContainer,
  FooterWrap,
  FooterLinkItems,
  FooterLink,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
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
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              Hello World
            </SocialLogo>
            <WebsiteRights>
              Hai Ho © 2020 All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink herf="/" target="_blank" aria-label="Twitter">
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink herf="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin/>
              </SocialIconLink>
              <SocialIconLink herf="/" target="_blank" aria-label="Github">
                <FaGithub/>
              </SocialIconLink>
              <SocialIconLink herf="/" target="_blank" aria-label="Medium">
                <FaMedium/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
