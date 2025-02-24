import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import mail from "../assets/mail.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Hide on scroll down
    } else {
      setShowNavbar(true); // Show on scroll up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden mt-3 md:mt-0">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <X size={30} /> : <Menu size={33} />}
          </button>
        </div>
      </div>

      {/* ✅ Navigation Links */}
      <div
        className={`bg-gray-900 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
        } md:flex md:items-center md:justify-start`}
      >
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-7 p-2 text-white">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Outsourcing", path: "/outsourcing" },
            { name: "Investing", path: "/investing" },
            { name: "Careers", path: "/careers" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact Us", path: "/contact" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="hover:text-blue-300 text-lg font-medium transition-all duration-300 ease-in-out py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
