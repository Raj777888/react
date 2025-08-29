import NavBar from "../Nav/NavBar";
import Footer from "../Nav/footer";

import Hero from "../Page component/home/Hero";
import abouthero from "../../assets/abouthero.jpg";
import Search from "../Page component/home/Search";
import Few from "../Page component/about/few";
import Icons from "../Page component/about/Icons";
import Choice from "../Page component/about/Choice";
import Team from "../Page component/about/Team";
// import { useState } from "react";
import Button from "../Button";
function About() {
  // const [isopen, setisopen] = useState(false);
  return (

    <>
      <Hero image={abouthero} height="585px" />
      <Search/>
      <Few/>
      <Icons/>
      <Choice/>
      <Team/>
    </>
    // <>
    //   <div className="h-48 w-">
    //     <div>
    //       <button
    //         className="border-2 border-amber-500 bg-amber-900 p-[20px] "
    //         onClick={() => setisopen(!isopen)}
    //       >
    //         {isopen?"close" :"open"}
    //       </button>
    //     </div>
    //     <div>{isopen && <div>opened </div>}</div>
    //   </div>
    // </>
  );
}

export default About;
