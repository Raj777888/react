import React from "react";
import Hero from "../Page component/home/Hero";
import newsbg from "../../assets/newsbg.jpg";
import Search from "../Page component/home/Search";
import Blog from "../Page component/news/blog";
function News() {
  return(
    <>
     <Hero image={newsbg} height="585px" />
     <Search/>
     <Blog/>
    </> 
  );
}

export default News;
