import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Left Arrow
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-4xl text-gray-500 font-semibold cursor-pointer"
    onClick={onClick}
  >
    {"<"}
  </div>
);

// Custom Right Arrow
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 text-4xl text-gray-500 font-semibold cursor-pointer"
    onClick={onClick}
  >
    {">"}
  </div>
);

const Video = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 1 second auto-slide
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const videos = [
    "/videos/video1.gif",
    "/videos/video2.gif",
    "/videos/video3.gif",
    "/videos/video4.gif",
    "/videos/video5.gif",
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center text-charcol mb-8">
  Intern Testimonials
</h2>

      <div className="relative">
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="relative">
              <video
                src={video}
                controls
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Video;
