import React from "react";
import Footer from "./Footer";
import Gradient from "./Gradient";
import Navbar from "./Navbar";
import About from "./About";
import UnderConstruction from './UnderConstruction'

export default function Construction() {
  return (
    <div className="font-monolisa">
      <Gradient/>
      <Navbar/>
      <UnderConstruction/>
      <Footer/>
      <Gradient/>
    </div>
  );
}
