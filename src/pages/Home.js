import React from "react";
import NavBar from "../components/NavBar";
import MainHeader from "../components/MainHeader";
import Booking from "../components/Booking";
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
        <ParallaxSection
          content={false}
          src="https://static.wixstatic.com/media/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_950,al_c,q_85,usm_0.66_1.00_0.01/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.webp"
        />
        <Booking />
        <About />
        <ParallaxSection
          content={true}
          src="https://static.wixstatic.com/media/84770f_98aabcec66e34956acf748305c555ec3~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_950,al_c,q_85,usm_0.66_1.00_0.01/84770f_98aabcec66e34956acf748305c555ec3~mv2_d_2500_1658_s_2.webp"
        />
        <Services />
        <Gallery />
        <ThingsToDo />
        <ParallaxSection
          content={true}
          src="https://static.wixstatic.com/media/a9ff3b_75dfd28a431049f39b6f85be15a1820e~mv2_d_2500_1829_s_2.jpg/v1/fill/w_980,h_950,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_75dfd28a431049f39b6f85be15a1820e~mv2_d_2500_1829_s_2.webp"
        />
        <Contact />
        <GoogleMaps />
      </>
    );
  }
}

export default Home;
