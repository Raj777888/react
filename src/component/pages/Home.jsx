import React from "react";
import Hero from "../Pagecomponent/home/Hero";
import Intro from "../Pagecomponent/home/Intro";
import Search from "../Pagecomponent/home/Search";
import Card from "../Pagecomponent/home/Card";
import Testomonials from "../Pagecomponent/home/Testomonials";
import Besttips from "../Pagecomponent/home/Besttips";
import background from "../../assets/background.jpg"


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
