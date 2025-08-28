import NavBar from "../Nav/NavBar";
import Footer from "../Nav/footer";

import Hero from "../Page component/home/Hero";
import abouthero from "../../assets/abouthero.jpg";
import Search from "../Page component/home/Search";
import Few from "../Page component/about/few";
import Icons from "../Page component/about/Icons";
import Choice from "../Page component/about/Choice";
function About() {
  return (
    <>
      {/* <NavBar /> */}
      <Hero image={abouthero} height="585px" />
      <Search/>
      <Few/>
      <Icons/>
      <Choice/>
      {/* <Footer/> */}
    </>

  );
}

export default About;
