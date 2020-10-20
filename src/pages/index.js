import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { objectOne,objectTwo, objectThree} from "../components/InfoSection/Data";
import NavBar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection/>
      <InfoSection {...objectOne} />
      <InfoSection {...objectTwo}/>
      <Services/>
      <InfoSection {...objectThree}/>
      <Footer/>
    </>
  );
};

export default Home;
