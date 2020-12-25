import React from "react";
import NavBar from "../components/NavBar";
import MainHeader from "../components/MainHeader";
import ParallaxSection from "../components/ParallaxSection";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import ThingsToDo from "../components/ThingsToDo";
import Contact from "../components/Contact";
import GoogleMaps from "../components/GoogleMaps";
class Home extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <MainHeader />
        <ParallaxSection content={false} />
        <About />
        <ParallaxSection content={true} />
        <Services />
        <Gallery />
        <ThingsToDo />
        <ParallaxSection content={true} />
        <Contact />
        <GoogleMaps />
      </>
    );
  }
}

export default Home;
