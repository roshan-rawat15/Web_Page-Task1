import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion, useMotionValue, animate } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideMotion = useMotionValue(currentSlide); // Motion value for animation

  useEffect(() => {
    const controls = animate(slideMotion, currentSlide, {
      duration: 0.5,
      ease: "easeInOut",
      onUpdate: (latest) => setCurrentSlide(Math.floor(latest)),
    });
    return controls.stop;
  }, [currentSlide, slideMotion]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    centerPadding: "10px",
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex + 1),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const images = [
    "/images/img1.jpeg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
    "/images/img10.jpg",
  ];

  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-wide">
        ⭐ STAR PERFORMER OF THE WEEK ⭐
      </h2>

      {/* ✅ Real-time animated counter */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center text-lg font-semibold text-gray-600 mb-4"
      >
        Showing{" "}
        <motion.span
          className="text-pink-500 text-2xl"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {currentSlide}
        </motion.span>{" "}
        of{" "}
        <span className="text-purple-500 text-2xl">{images.length}</span> performers
      </motion.div>

      <Slider {...settings}>
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-4 flex justify-center items-center bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 rounded-2xl shadow-2xl h-[260px] transition-all duration-500"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full max-w-[350px] h-full object-cover rounded-xl shadow-lg transition-transform duration-500"
            />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
