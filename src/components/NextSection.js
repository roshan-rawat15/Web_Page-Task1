import React from "react";
import teamImage from "../assets/team.jpg";

const NextSection = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16 flex flex-col items-center text-center text-white"
      style={{ backgroundImage: `url(${teamImage})` }}
    >
      {/* Overlay to reduce color blurring and enhance text readability */}
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4">You Always Get the Best Guidance</h2>
        <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all">
          Request Quote
        </button>
      </div>
    </div>
  );
};

export default NextSection;