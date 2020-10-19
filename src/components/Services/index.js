import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";
import Icon1 from '../../images/image1.svg'
import Icon2 from '../../images/image2.svg'
import Icon3 from '../../images/image3.svg'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <ServicesH2>Service 1</ServicesH2>
          <ServicesP>
            Nullam magna nunc, vestibulum id sollicitudin sed, laoreet quis
            nulla. Fusce vehicula magna vitae eros eleifend, non hendrerit
            mauris volutpat.eque. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>Service 2</ServicesH2>
          <ServicesP>
            Nullam magna nunc, vestibulum id sollicitudin sed, laoreet quis
            nulla. Fusce vehicula magna vitae eros eleifend, non hendrerit
            mauris volutpat. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2>Service 3</ServicesH2>
          <ServicesP>
            Nullam magna nunc, vestibulum id sollicitudin sed, laoreet quis
            nulla. Fusce vehicula magna vitae eros eleifend, non hendrerit
            mauris volutpat. 
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
