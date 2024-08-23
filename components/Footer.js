import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7 mb-14">
        <h1
          className="text-4xl font-bold bg-clip-text text-transparent cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(to right, #4458dc 0%, #854fee 100%), radial-gradient(circle at top left, #4458dc, #854fee)",
          }}
        >
          ALHAN
        </h1>
        <h1 className="text-xl font-semibold">FOLLOW ME</h1>
        <div className="flex justify-center items-center gap-5">
        <Link
            href="https://www.linkedin.com/in/alhan-dilshad/"
            className="text-2xl text-black p-2 rounded-full hover:p-2 hover:rounded-full hover:bg-[#4458dc] hover:text-[#fff] duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://github.com/alhandilshad"
            className="text-2xl text-black p-2 rounded-full hover:p-2 hover:rounded-full hover:bg-[#4458dc] hover:text-[#fff] duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.instagram.com/alhandilshad/"
            className="text-2xl text-black p-2 rounded-full hover:p-2 hover:rounded-full hover:bg-[#4458dc] hover:text-[#fff] duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center text-[#777777] gap-1">
          <p>Copyright ©2024 All rights reserved |</p>
          <p>This Portfolio is made with</p>
          <CiHeart className="text-xl" /> by
          <p className="text-blue-700 font-semibold">ALHAN</p>

        </div>
      </div>
    </>
  );
};

export default Footer;