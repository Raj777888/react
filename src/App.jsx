import React from "react";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import About from "./component/pages/About";
import Home from "./component/pages/Home";
import NavBar from "./component/Nav/NavBar";
import Layout from "./component/hoc/Layout";

function App() {
  return (
    <div>
    
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
