import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import StatsSection from "./components/StatsSection";
import Video from "./components/Video.js";
import Scorol from "./components/Scorol.js";
import Service from "./components/Service.js";
import NextSection from "./components/NextSection";
import FooterSection from "./components/FooterSection";
import About from "./pages/About";  // Imported About page
import "./index.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <>
    {/* <Navbar/> */}
      <HeroSection />
      <Features />
      <StatsSection />
      <Video />
      <Scorol />
      <Service />
      <NextSection />
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
