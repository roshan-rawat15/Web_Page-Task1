import React from "react";

// Removed 'framer-motion' and 'react-helmet' imports to fix module not found errors.
// If animations or SEO tags are needed, ensure proper installation:
// npm install framer-motion react-helmet

const ServicesSection = () => {
  const services = [
    {
      title: "Risk Management",
      description:
        "Risk management involves identifying, evaluating, and prioritizing risks, followed by coordinated application of resources to minimize or control unfortunate events.",
      icon: "/images/risk.png",
    },
    {
      title: "Portfolio Management",
      description:
        "Portfolio management balances investments with objectives, asset allocation, and risk performance for individuals and institutions.",
      icon: "/images/portfolio.png",
    },
    {
      title: "Wealth Management",
      description:
        "Wealth management integrates financial planning, portfolio management, and a range of aggregated financial services.",
      icon: "/images/wealth.png",
    },
    {
      title: "Project Outsourcing",
      description:
        "Outsourcing enables companies to subcontract tasks or departments, enhancing efficiency and expertise.",
      icon: "/images/outscoring.png",
    },
    {
      title: "ERP & Customized Software",
      description:
        "ERP solutions streamline business processes through integrated applications, automating back-office functions.",
      icon: "/images/erp.png",
    },
  ];

  return (
    <>
      {/* Moved <title> and <meta> tags inside the main HTML file (public/index.html) for SEO */}
      <div className="container mx-auto py-16 px-4 md:px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Our Best Services
        </h2>
        <p className="text-center text-gray-500 text-lg mb-12">
          We have grown in different sectors in no time because of unmatched
          services. Below are a few of these.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-2xl text-center transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white hover:shadow-blue-500/50"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
