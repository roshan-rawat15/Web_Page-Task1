import React from "react";
import { FaTools, FaPhoneAlt, FaMoneyBillWave, FaLightbulb } from "react-icons/fa";
import teamImage from "../assets/team.jpg";

const features = [
  {
    title: "Personalized Solutions",
    desc: "We give our customers an unmatched personalized solution as per their needs.",
    icon: <FaTools size={50} className="text-blue-600" />,
  },
  {
    title: "Premium Customer Support",
    desc: "We provide premium 24x7 support to our customers.",
    icon: <FaPhoneAlt size={50} className="text-blue-600" />,
  },
  {
    title: "Best Service @ Low Cost",
    desc: "We believe in customer delight rather than in the number of customers.",
    icon: <FaMoneyBillWave size={50} className="text-blue-600" />,
  },
  {
    title: "Innovation & Implementations",
    desc: "We drive innovation for business success.",
    icon: <FaLightbulb size={50} className="text-blue-600" />,
  },
];

const Features = () => {
  return (
    <>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23007BFF'/><text y='0.6em' x='0.5em' font-size='60' fill='white'>🚀</text></svg>"
        />
      </head>
      <section className="container mx-auto py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Main Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="relative bg-blue-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer clip-path-custom flex flex-col items-center justify-center h-72"
              >
                <div className="text-center mb-4 w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-center leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border-2 border-blue-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between">
            <div className="w-full h-64 overflow-hidden rounded-t-3xl mb-4">
              <img
                src={teamImage}
                alt="Team Discussion"
                className="w-full h-full object-cover object-center rounded-t-3xl"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Be a part of success story building Team
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Good News is that we are hiring for various profiles and for
              various locations. We are also looking for interns for winter
              internship and live projects.
            </p>
            <button className="bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-800 transition-all duration-300">
              Join us
            </button>
          </div>
        </div>
      </section>
      <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
        }
      `}</style>
    </>
  );
};

export default Features;
