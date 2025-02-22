import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import StatsSection from "./components/StatsSection";
import "./index.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Video from "./components/Video.js";
import Scorol from "./components/Scorol.js";
import Service from "./components/Service.js";
import NextSection from "./components/NextSection";
import FooterSection from "./components/FooterSection";



function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <StatsSection />
      <Video/>
      <Scorol/>
      <Service/>
      <NextSection />
      <FooterSection />
    </div>
  );
}

export default App;
