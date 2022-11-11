import React from "react";
import Footer from "./Footer";
import Gradient from "./Gradient";
import Navbar from "./Navbar";
import About from "./About";
import Certificates from './Certificates'

export default function Summary() {
  return (
    <div className="font-monolisa">
      <Gradient/>
      <Navbar/>
      <About/>
      <Certificates/>
      <Footer/>
      <Gradient/>
    </div>
  );
}
