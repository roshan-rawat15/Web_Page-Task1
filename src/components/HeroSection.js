import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { NavLink } from "react-router-dom";
import bg1 from "../assets/bg_1.jpg";
import bg2 from "../assets/bg_2.jpg";
import bg3 from "../assets/bg_3.jpg";

const slides = [
  {
    image: bg1,
    heading: "THE NEXT BIG THING",
    subheading: "WHERE YOU NEED TO BE...",
  },
  {
    image: bg2,
    heading: "THE GAME CHANGERS",
    subheading: "PACE WITH US",
  },
  {
    image: bg3,
    heading: "JOIN OUR SUCCESS STORY",
    subheading: "BUILD THE FUTURE TOGETHER",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showJoinUs, setShowJoinUs] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
      setShowJoinUs(false);
      setTimeout(() => setShowJoinUs(true), 1200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-screen flex flex-col justify-center items-start px-6 md:px-16 text-left bg-cover bg-center relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
      {/* 🌈 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent transition-opacity duration-1000"></div>

      {/* 💡 Animated Text and Buttons */}
      <div className="z-10 max-w-3xl space-y-6">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[currentSlide].heading}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg"
          >
            {slides[currentSlide].heading}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={slides[currentSlide].subheading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-200 mb-8 drop-shadow-md"
          >
            {slides[currentSlide].subheading}
          </motion.p>
        </AnimatePresence>

        {/* 🎯 Buttons with Animations */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          {currentSlide === 0 && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300 shadow-lg"
            >
              Careers
            </motion.button>
          )}

          {showJoinUs && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(59,130,246,0.8)",
              }}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              Join Us
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
