
import Hero from "../Pagecomponent/home/Hero";
import abouthero from "../../assets/abouthero.jpg";
import Search from "../Pagecomponent/home/Search";
import Few from "../Pagecomponent/about/Few";
import Icons from "../Pagecomponent/about/Icons";
import Choice from "../Pagecomponent/about/Choice";
import Team from "../Pagecomponent/about/Team";
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
