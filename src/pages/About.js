import React, { useState } from "react";
import singleImage from "../assets/team1.jpg";
import { NavLink } from "react-router-dom";
import History from "../assets/his.png";
import coreValuesImage from "../assets/image1.jpg";
import Slider from "react-slick";
import bgImage from "../assets/image.jpg";
import clientImage from "../assets/image.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const About = () => {
  return (
    <div
      className="relative w-full h-[300px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${singleImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">About Us</h1>
        <div className="text-lg font-medium">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>{" "}
          <span className="mx-1">›</span> About Us
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-20"> {/* Increased padding for longer section */}
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-left">
        Overview
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="text-lg leading-relaxed text-gray-700 space-y-8"> {/* Increased spacing */}
          <p>
          B.G.S was found in 2014 as one of India's original Project Outsourcing start-ups, with an aim to bridge gaps in process management and outsourcing. We started as project outsourcing firm and later on moved into different zones with a motto of providing high-quality, low-cost, and applicable interventions to handle gaps.
          </p>
          <p>
          Today, the BGS enterprise has its presence across varied sectors that include technology, wealth management and talent management solutions. We have expanded to more than 5 cities in less than two years and are going at great velocity towards greater heights.
          </p>
          <p>
          We believe aspiration meets innovation, candor fuels collaboration, and
          teamwork achieves the extraordinary.
          </p>
          <p>
          Our energy has been focused on creating an experienced team, developing technology enablers and institutionalizing standardized processes. Our strong research and consistent outperformance, while maintaining high standards of client servicing are testaments to the robustness of the model.
          </p>
          {/* ✅ Added extra content for extended length */}
          <p>
          We have consistently grown with clients through referrals and have a very high customer retention rate.
          </p>
          <p>
          We seek out people and clients who challenge themselves to be exceptional—and champion that spirit in others. We’re guided by True North, our unwavering commitment to always do the right thing by our clients, people and communities.
          </p>
          <p>
          We define a bold ambition with clients, then work together as one team to create such high levels of value that we set new standards of excellence for our industries.
          </p>
        </div>
        <div className="border-4 border-blue-400 p-8 rounded-3xl shadow-xl bg-gray-50">
          <img
            src={singleImage}
            alt="Success Team"
            className="w-full h-72 object-cover rounded-2xl mb-6 shadow-md" // 🔥 Increased height for visibility
          />
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Be a Part of Success Story Building Team
          </h3>
          <p className="text-gray-600 text-center mb-6">
            We are hiring for various profiles and internships for winter projects. Join
            us to build extraordinary success stories.
          </p>
          <button className="w-full bg-blue-600 text-white py-3 rounded-full text-lg hover:bg-blue-700 transition-all duration-300">
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
};

const HistorySection = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 tracking-wide">History</h2>
      <img
        src={History}
        alt="History Section"
        className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg border-4 border-blue-400"
      />
    </section>
  );
};

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "20px",
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex + 1),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  const images = [
    "/images/a.jfif",
    "/images/b.jfif",
    "/images/d.jpeg",
    "/images/i.png",
    "/images/m.png",
  ];
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Our Partners
      </h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-[70%] h-[120px] object-contain rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

const CoreValuesSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={coreValuesImage}
          alt="Core Values"
          className="w-full h-full rounded-3xl shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 tracking-wide">
            Our Core Values
          </h2>
          <p>
          Bridge Group Solutions hold our associates, customers, employees, as well as our community in the highest regard, where we incorporate both the needs of our company, as well as the needs of our ever-changing world into our culture. Our core values are the backbone to our company which resonate with our vision:
          </p>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">People</h3>
              <p>
              We must be caring, show respect, compassion and humanity for our colleagues, associates and customers around the world, and always work for the benefit of the communities we serve.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
              <p>
              Conducting our operations with integrity and with the respect for the each people, business associate whom we touch in different juncture of our business journey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Customer Delight</h3>
              <p>
              We are committed to foster customer centric culture where our processes, services and innovations are aligned around customer/franchisee/business associate expectations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
              <p>
              We must constantly strive to achieve the highest possible standards in our execution and in the quality of the services we provide at affordable cost and need based solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Trust</h3>
              <p>
              We as team believe that the trust is the foundation of our relationship with our associates, franchisee, customer and employees and we cultivate it every day by being accountable of every single property transaction we offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-85"></div>

      {/* Content Section */}
      <div className="relative container mx-auto py-12 px-4 text-center text-white animate-fadeInUp">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide">
          You Always Get the Best Guidance
        </h2>

        {/* Stats Box */}
        <div className="bg-white bg-opacity-90 text-gray-800 rounded-3xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8 px-4">
          {[
            { count: "259+", label: "Projects Completed" },
            { count: "10,000+", label: "Satisfied Customers" },
            { count: "32", label: "Awards Received" },
            { count: "10+", label: "Years of Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className="transform transition-transform duration-500 hover:scale-110"
            >
              <h3 className="text-4xl font-extrabold text-blue-600">{stat.count}</h3>
              <div className="w-14 h-1 bg-blue-500 mx-auto my-2"></div>
              <p className="uppercase text-sm font-semibold tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientTestimonialsSection = () => {
  const testimonials = [
    { name: "Jyotika Raymond", feedback: "A place where you find better opportunities of Investment. Comfortable and helping environment." },
    { name: "Iravadi Sharma", feedback: "Good organization with good services and employees who are always ready to help their customers." },
    { name: "Bhumika Arora", feedback: "I had wonderful internship experience with the organisation." },
    { name: "Amit Verma", feedback: "The team is highly professional and provides great opportunities." },
    { name: "Riya Kapoor", feedback: "Amazing culture and supportive management. Highly recommended!" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    customPaging: () => <div className="w-3 h-3 bg-blue-400 rounded-full slick-dot" />,
    appendDots: (dots) => <div><ul className="flex justify-center space-x-2"> {dots} </ul></div>,
  };

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 border-2 border-blue-200 mx-4">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-100 rounded-md overflow-hidden mb-4">
                <img src={clientImage} alt="Client" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 text-base">
                "{testimonial.feedback}"
              </p>
              <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const FooterSection = () => {
  const links = ["Home", "About", "Careers", "Gallery", "Contact Us", "Service"];
  const services = ["Mutual Funds", "Wealth Management", "Portfolio Management", "Pension Funds", "Real Estate", "Erp & Customized Software", "Software Testing", "Internship", "Current opening"];

  return (
    <footer className="bg-gray-900 text-white py-16 px-8 w-full min-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 h-full">
        {/* Contact Section */}
        <div className="h-full">
          <h3 className="text-xl font-semibold mb-4">Have a Question?</h3>
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
            {links.map((name, index) => (
              <li key={index}>
                <a href={`/${name.toLowerCase()}`} className="hover:text-white cursor-pointer transition-all">
                  → {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="h-full">
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            {services.map((service, index) => (
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
              {[
                { icon: <FaLinkedinIn className="text-white text-xl" />, link: "https://www.linkedin.com" },
                { icon: <FaFacebookF className="text-white text-xl" />, link: "https://www.facebook.com" },
                { icon: <FaInstagram className="text-white text-xl" />, link: "https://www.instagram.com" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all"
                >
                  {item.icon}
                </a>
              ))}
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

const AboutPage = () => {
  return (
    <>
      <About />
      <AboutUs />
      <HistorySection />
      <ImageCarousel />
      <CoreValuesSection />
      <StatsSection />
      <ClientTestimonialsSection />
      <FooterSection />
    </>
  );
};

export default AboutPage;