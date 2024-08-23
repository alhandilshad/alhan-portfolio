"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }

      const sections = ["about", "services", "skills", "portfolio", "testimonials", "contact"];
      const scrollPos = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;
          if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <>
      <div
        className={`sticky top-0 z-10 w-full h-20 flex justify-between items-center px-6 md:px-12 lg:px-44 transition-shadow duration-300 ${
          shadow ? "shadow-md md:bg-white bg-black" : ""
        } md:bg-white bg-black`}
      >
        <div>
          <Link href="/">
            <h1
              className="text-4xl font-bold bg-clip-text text-transparent cursor-pointer"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #4458dc 0%, #854fee 100%), radial-gradient(circle at top left, #4458dc, #854fee)",
              }}
            >
              ALHAN
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex justify-center items-center gap-10">
          <Link
            href="/#about"
            onClick={() => handleLinkClick("about")}
            className={`uppercase font-semibold tracking-tighter ${activeSection === "about" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
          >
            About
          </Link>
          <Link
            href="/#services"
            onClick={() => handleLinkClick("services")}
            className={`uppercase font-semibold tracking-tighter ${activeSection === "services" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
          >
            Services
          </Link>
          <Link
            href="/#skills"
            onClick={() => handleLinkClick("skills")}
            className={`uppercase font-semibold tracking-tighter ${activeSection === "skills" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
          >
            Skills
          </Link>
          <Link
            href="/#portfolio"
            onClick={() => handleLinkClick("portfolio")}
            className={`uppercase font-semibold tracking-tighter ${activeSection === "portfolio" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
          >
            Portfolio
          </Link>
          <Link
            href="/#testimonials"
            onClick={() => handleLinkClick("testimonials")}
            className={`uppercase font-semibold tracking-tighter ${activeSection === "testimonials" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
          >
            Testimonials
          </Link>
          <Link
            href="/#contact"
            onClick={() => handleLinkClick("contact")}
            className={`uppercase font-semibold tracking-tighter ${activeSection === "contact" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex justify-center items-center gap-2">
          <Link
            href="https://www.linkedin.com/in/alhan-dilshad/"
            className="text-2xl text-[#4458dc] p-2 rounded-full hover:p-2 hover:rounded-full hover:bg-[#4458dc] hover:text-[#fff] duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://github.com/alhandilshad"
            className="text-2xl text-[#4458dc] p-2 rounded-full hover:p-2 hover:rounded-full hover:bg-[#4458dc] hover:text-[#fff] duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.instagram.com/alhandilshad/"
            className="text-2xl text-[#4458dc] p-2 rounded-full hover:p-2 hover:rounded-full hover:bg-[#4458dc] hover:text-[#fff] duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
        </div>

        {/* Toggle button for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={handleToggle} className="text-2xl text-[#4458dc]">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden sticky z-10 top-20 w-full bg-black text-white shadow-md py-4">
          <div className="flex flex-col items-center gap-6">
            <Link
              href="/#about"
              onClick={() => handleLinkClick("about")}
              className={`uppercase font-semibold tracking-tighter ${activeSection === "about" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
            >
              About
            </Link>
            <Link
              href="/#services"
              onClick={() => handleLinkClick("services")}
              className={`uppercase font-semibold tracking-tighter ${activeSection === "services" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
            >
              Services
            </Link>
            <Link
              href="/#skills"
              onClick={() => handleLinkClick("skills")}
              className={`uppercase font-semibold tracking-tighter ${activeSection === "skills" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
            >
              Skills
            </Link>
            <Link
              href="/#portfolio"
              onClick={() => handleLinkClick("portfolio")}
              className={`uppercase font-semibold tracking-tighter ${activeSection === "portfolio" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
            >
              Portfolio
            </Link>
            <Link
              href="/#testimonials"
              onClick={() => handleLinkClick("testimonials")}
              className={`uppercase font-semibold tracking-tighter ${activeSection === "testimonials" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              onClick={() => handleLinkClick("contact")}
              className={`uppercase font-semibold tracking-tighter ${activeSection === "contact" ? "text-[#4458dc]" : "hover:text-[#4458dc]"} duration-300`}
            >
              Contact
            </Link>

            <div className="flex justify-center items-center gap-2">
              <Link
                href="https://www.linkedin.com/in/alhan-dilshad/"
                className="text-2xl text-[#4458dc] p-2 rounded-full hover:p-2 hover:rounded-full hover:bg-[#4458dc] hover:text-[#fff] duration-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://github.com/alhandilshad"
                className="text-2xl text-[#4458dc] p-2 rounded-full hover:p-2 hover:rounded-full hover:bg-[#4458dc] hover:text-[#fff] duration-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.instagram.com/alhandilshad/"
                className="text-2xl text-[#4458dc] p-2 rounded-full hover:p-2 hover:rounded-full hover:bg-[#4458dc] hover:text-[#fff] duration-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
