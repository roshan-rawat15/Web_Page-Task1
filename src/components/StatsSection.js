import React from "react";
import bgImage from "../assets/image.jpg";

const StatsSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-85"></div>

      {/* Content Section */}
      <div className="relative container mx-auto py-20 px-6 text-center text-white animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-wide">
          You Always Get the Best Guidance
        </h2>

        {/* Stats Box */}
        <div className="bg-white bg-opacity-90 text-gray-800 rounded-3xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-6">
          {/* Stat 1 */}
          <div className="transform transition-transform duration-500 hover:scale-110">
            <h3 className="text-5xl font-extrabold text-blue-600">259+</h3>
            <div className="w-16 h-1 bg-blue-500 mx-auto my-3"></div>
            <p className="uppercase text-base font-semibold tracking-wide">
              Projects Completed
            </p>
          </div>

          {/* Stat 2 */}
          <div className="transform transition-transform duration-500 hover:scale-110">
            <h3 className="text-5xl font-extrabold text-blue-600">10,000+</h3>
            <div className="w-16 h-1 bg-blue-500 mx-auto my-3"></div>
            <p className="uppercase text-base font-semibold tracking-wide">
              Satisfied Customers
            </p>
          </div>

          {/* Stat 3 */}
          <div className="transform transition-transform duration-500 hover:scale-110">
            <h3 className="text-5xl font-extrabold text-blue-600">32</h3>
            <div className="w-16 h-1 bg-blue-500 mx-auto my-3"></div>
            <p className="uppercase text-base font-semibold tracking-wide">
              Awards Received
            </p>
          </div>

          {/* Stat 4 */}
          <div className="transform transition-transform duration-500 hover:scale-110">
            <h3 className="text-5xl font-extrabold text-blue-600">10+</h3>
            <div className="w-16 h-1 bg-blue-500 mx-auto my-3"></div>
            <p className="uppercase text-base font-semibold tracking-wide">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
