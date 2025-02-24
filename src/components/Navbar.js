import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import mail from "../assets/mail.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const dropdownItems = {
    Outsourcing: ["ERP & Customized Softwares", "Software Testing"],
    Investing: [
      "Mutual Fund",
      "Wealth Management",
      "Portfolio Management",
      "Pension Funds",
      "Real Estate",
    ],
    Careers: ["Internship", "Current Openings"],
  };

  const navItems = [
    "Home",
    "About",
    "Investing",
    "Outsourcing",
    "Careers",
    "Gallery",
    "Contact Us",
  ];

  return (
    <nav
      className={`bg-white shadow-md sticky top-0 z-50 transform transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        {/* ✅ Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-16" />
          <h1 className="text-2xl font-extrabold text-gray-800 whitespace-nowrap">
            Bridge Group Solutions
          </h1>
        </div>

        {/* ✅ Email Section */}
        <div className="flex items-center space-x-3 mt-3 md:mt-0 bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
          <img src={mail} alt="Mail" className="w-6" />
          <p className="text-base font-medium text-gray-700">
            contactus@bridgegroupsolutions.com
          </p>
        </div>
      </div>

      {/* ✅ Navigation Links with Dropdowns */}
      <div className="bg-gray-900 hidden md:flex justify-center">
        <div className="container mx-auto flex space-x-8 p-3 text-white">
          {navItems.map((name, index) => (
            <div
              key={index}
              className="relative group cursor-pointer text-lg font-medium"
              onMouseEnter={() => setActiveDropdown(name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center space-x-1">
                <a
                  href={`/${name.toLowerCase().replace(/ /g, "")}`}
                  className="hover:text-blue-300 transition-all duration-300 ease-in-out"
                >
                  {name}
                </a>
                {dropdownItems[name] && <ChevronDown size={16} />}
              </div>
              {dropdownItems[name] && activeDropdown === name && (
                <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg py-2 w-56 rounded-lg z-50">
                  {dropdownItems[name].map((item, idx) => (
                    <a
                      key={idx}
                      href={`/${item.toLowerCase().replace(/ /g, "")}`}
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
              <div className="absolute left-0 w-full h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Mobile Navigation with Dropdown on Click */}
      <div className="md:hidden bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col space-y-2 p-4">
          {navItems.map((name, index) => (
            <div key={index} className="relative">
              <div
                className="flex justify-between items-center py-2 border-b border-gray-700 cursor-pointer"
                onClick={() =>
                  setActiveDropdown(activeDropdown === name ? null : name)
                }
              >
                <span>{name}</span>
                {dropdownItems[name] && <ChevronDown size={16} />}
              </div>
              {dropdownItems[name] && activeDropdown === name && (
                <div className="bg-gray-800 rounded-lg shadow-lg">
                  {dropdownItems[name].map((item, idx) => (
                    <a
                      key={idx}
                      href={`/${item.toLowerCase().replace(/ /g, "")}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-700 transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
