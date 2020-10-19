import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Arrow,
  ArrowHover,
} from "./HeroElements";
import {Button} from '../ButtonComponent'
import Video from "../../videos/video.mp4";

const HeroSection = () => {
    const [hover,setHover] = useState(false)
    const onHover = ()=>{
        setHover(!hover)
    }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>This is a sample site</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="/signin" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Get Started {hover ? <Arrow /> : <ArrowHover />}{" "}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
