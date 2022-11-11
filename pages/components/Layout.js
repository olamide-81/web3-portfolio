import React from "react";
import Hero from "./Hero";
import Summary from "./Summary";
import Projects from "./Projects";
import Gradient from "./Gradient";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Grad from "./Grad";

export default function Layout() {
  return (
    <div>
      <Gradient />
      <Navbar />
      <Hero />
     
      <Projects />
      <Footer />
      <Gradient />
    </div>
  );
}
