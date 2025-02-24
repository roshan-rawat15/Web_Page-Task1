import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
    <div className="container mx-auto py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        ⭐ STAR PERFORMER OF THE WEEK ⭐
      </h2>

      <div className="text-center text-lg text-gray-600 mb-4">
        Showing <span className="text-pink-500 font-semibold">{currentSlide}</span> of
        <span className="text-purple-500 font-semibold"> {images.length}</span> performers
      </div>

      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className="p-4 flex justify-center items-center bg-gray-100 rounded-xl shadow-md h-[260px]"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full max-w-[350px] h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel; 
