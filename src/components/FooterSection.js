import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8 w-full min-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 h-full">
        {/* Contact Section */}
        <div className="h-full">
          <h3 className="text-xl font-semibold mb-4">Have a Questions?</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19838.305594168525!2d0.012083720194143665!3d51.4060257111216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a84316e1a9f3%3A0x98a7c3f3a0d07052!2sBromley!5e0!3m2!1sen!2sin!4v1708523456789!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="location"
            className="rounded-lg"
          ></iframe>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <MdPhone className="text-xl" />
              <span>+91-8860060616</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-xl" />
              <span>contactus@bridgegroupsolutions.com</span>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="h-full">
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Careers", href: "/careers" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact Us", href: "/contact" },
              { name: "Service", href: "/service" }
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-white cursor-pointer transition-all"
                >
                  → {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="h-full">
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "Mutual Funds",
              "Wealth Management",
              "Portfolio Management",
              "Pension Funds",
              "Real Estate",
              "Erp & Customized Software",
              "Software Testing",
              "Internship",
              "Current opening"
            ].map((service, index) => (
              <li key={index}>
                <button className="hover:text-white cursor-pointer transition-all bg-transparent border-none p-0 text-left w-full text-start">
                  → {service}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe Us!</h3>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full py-3 px-4 rounded-md bg-gray-800 text-white mb-3 focus:outline-none"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-md transition-all">
              Subscribe
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mt-6 mb-3">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all"
              >
                <FaLinkedinIn className="text-white text-xl" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all"
              >
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 w-full">
        Copyright © 2025 All rights reserved | This template is made with <span className="text-red-500">❤️</span> by Techbuddies@bgs
      </div>
    </footer>
  );
};

export default FooterSection;
