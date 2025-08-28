import React from "react";
import Hero from "../Page component/home/Hero";
import Intro from "../Page component/home/intro";
import Search from "../Page component/home/Search";
import Card from "../Page component/home/Card";
import Testomonials from "../Page component/home/Testomonials";
import Besttips from "../Page component/home/besttips";
import Footer from "../Nav/footer";
import background from "../../assets/background.jpg"
import NavBar from "../Nav/NavBar";


function Home() {
  return (
    <div>
      {/* <NavBar/> */}
      <Hero image={background}
      height="833px" description="Let us take you away"/>
      <Search />
      <Intro />
      <Card/>
      <Testomonials/>
      <Besttips/>
      {/* <Footer/>  */}
    </div>
  );
}

export default Home;
