import React from "react";
import Hero from "../Pagecomponent/home/Hero";
import newsbg from "../../assets/newsbg.jpg";
import Search from "../Pagecomponent/home/Search";
import Blog from "../Pagecomponent/news/blog";
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
