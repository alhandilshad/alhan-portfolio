"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`sticky top-0 z-10 w-full h-20 flex justify-between items-center px-6 md:px-12 lg:px-44 transition-shadow duration-300 ${
          shadow ? "shadow-md md:bg-white bg-black" : ""
        } md:bg-white bg-black`}
      >
        <div>
          <h1
            className="text-4xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #4458dc 0%, #854fee 100%), radial-gradient(circle at top left, #4458dc, #854fee)",
            }}
          >
            ALHAN
          </h1>
        </div>

        <div className="hidden md:flex justify-center items-center gap-10">
          <Link href="#about" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
            About
          </Link>
          <Link href="#services" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
            Services
          </Link>
          <Link href="#skills" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
            Skills
          </Link>
          <Link href="#portfolio" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
            Portfolio
          </Link>
          <Link href="#blog" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
            Blog
          </Link>
          <Link href="#contact" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
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
        <div className="md:hidden fixed w-full bg-black text-white shadow-md py-4">
          <div className="flex flex-col items-center gap-6">
            <Link href="#about" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
              About
            </Link>
            <Link href="#services" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
              Services
            </Link>
            <Link href="#skills" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
              Skills
            </Link>
            <Link href="#portfolio" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
              Portfolio
            </Link>
            <Link href="#blog" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
              Blog
            </Link>
            <Link href="#contact" className="uppercase font-semibold tracking-tighter hover:text-[#4458dc] duration-300">
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
