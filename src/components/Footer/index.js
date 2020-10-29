import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
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
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>

              <FooterLink to="/signin">Contact us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Email</FooterLink>
              <FooterLink to="/signin">Phone</FooterLink>
              <FooterLink to="/signin">Address</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>FAQ</FooterLinkTitle>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Sponsorships</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Follow us</FooterLinkTitle>
              <FooterLink to="/signin">Linked In</FooterLink>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>Hai Ho © 2020 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink herf="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink herf="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink herf="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink herf="/" target="_blank" aria-label="Medium">
                <FaMedium />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
