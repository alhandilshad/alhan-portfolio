import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandVite } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <div className="mb-28">
        <h1 className="text-[32px] sm:text-[40px] font-[800] uppercase text-center">Skills</h1>
        <p className="text-center pt-3 text-sm sm:text-base">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
        <div className="flex flex-col justify-center items-center gap-10 sm:gap-14 mt-12 sm:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-center items-center gap-6 md:gap-10 lg:gap-20">
            <div className="group flex flex-col items-center cursor-pointer">
              <FaHtml5 className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-[#e34c26] group-hover:scale-110 transition duration-300" />
              <p className="mt-2 text-center text-sm sm:text-xl">HTML5</p>
            </div>
            <div className="group flex flex-col items-center cursor-pointer">
              <FaCss3Alt className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-[#2175c3] group-hover:scale-110 transition duration-300" />
              <p className="mt-2 text-center text-sm sm:text-xl">CSS3</p>
            </div>
            <div className="group flex flex-col items-center cursor-pointer">
              <IoLogoJavascript className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-[#f0db4f] group-hover:scale-110 transition duration-300" />
              <p className="mt-2 text-center text-sm sm:text-xl">JavaScript</p>
            </div>
            <div className="group flex flex-col items-center cursor-pointer">
              <RiReactjsFill className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-[#61dafb] group-hover:scale-110 transition duration-300" />
              <p className="mt-2 text-center text-sm sm:text-xl">React.js</p>
            </div>
            <div className="group flex flex-col items-center cursor-pointer">
              <RiNextjsFill className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-[#222] group-hover:scale-110 transition duration-300" />
              <p className="mt-2 text-center text-sm sm:text-xl">Next.js</p>
            </div>
            <div className="group flex flex-col items-center cursor-pointer">
              <IoLogoFirebase className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-[#ffca28] group-hover:scale-110 transition duration-300" />
              <p className="mt-2 text-center text-sm sm:text-xl">Firebase</p>
            </div>
            <div className="group flex flex-col items-center cursor-pointer">
              <BiLogoTypescript className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-[#007acc] group-hover:scale-110 transition duration-300" />
              <p className="mt-2 text-center text-sm sm:text-xl">TypeScript</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-center items-center gap-6 md:gap-10 lg:gap-20">
            <div className="group flex flex-col items-center cursor-pointer">
              <RiTailwindCssFill className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-[#06b6d4] group-hover:scale-110 transition duration-300" />
              <p className="mt-2 text-center text-sm sm:text-xl">Tailwind CSS</p>
            </div>
            <div className="group flex flex-col items-center cursor-pointer">
              <TbBrandVite className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-[#9575CD] group-hover:scale-110 transition duration-300" />
              <p className="mt-2 text-center text-sm sm:text-xl">Vite</p>
            </div>
            <div className="group flex flex-col items-center cursor-pointer">
              <FaGithub className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-[#24292e] group-hover:scale-110 transition duration-300" />
              <p className="mt-2 text-center text-sm sm:text-xl">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;