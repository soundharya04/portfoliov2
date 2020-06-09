import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contact";

const Layout = () => (
  <div>
    <Header />
    <Navbar />
    <About />
    <Skills />
    <Services />
    <Contact />
  </div>
);
export default Layout;
