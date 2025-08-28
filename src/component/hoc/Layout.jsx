import React from "react";
import NavBar from "../Nav/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Nav/footer";

function Layout() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;
