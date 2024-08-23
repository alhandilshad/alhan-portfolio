import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <> 
      <div className="mb-36"id="portfolio">
        <h1 className="text-center text-4xl font-[800]">PORTFOLIO</h1>
        <p className="text-center pt-4 text-[#777777]">
          Here, you'll find some of my recent projects and works.
        </p>
        <div className="flex flex-col justify-center items-center gap-16 mt-24">
          <div className="flex md:flex-row flex-col justify-center items-center gap-9">
            <div className="relative md:w-[24%] w-[80%] h-[40vh] group rounded-lg">
              <img
                src="/ecommerce.png"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-70 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center gap-3">
                <h1 className="text-white text-lg text-center font-bold opacity-0 group-hover:opacity-100 duration-300">
                  ECOMMERCE WEBSITE
                </h1>
                <Link
                  href="https://capitalshop-website.vercel.app/"
                  target="_blank"
                  className="bg-white text-black opacity-0 group-hover:opacity-100 flex items-center gap-2 rounded-2xl hover:bg-blue-700 duration-300 hover:text-white py-[6px] px-6"
                >
                  <h1>VISIT</h1>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
            <div className="relative md:w-[24%] w-[80%] h-[40vh] group rounded-lg">
              <img
                src="/makelots.png"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-70 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center gap-3">
                <h1 className="text-white text-lg text-center font-bold opacity-0 group-hover:opacity-100 duration-300">
                  MAKELOTS WEBSITE
                </h1>
                <Link
                  href="https://makelots.vercel.app/"
                  target="_blank"
                  className="bg-white text-black opacity-0 group-hover:opacity-100 flex items-center gap-2 rounded-2xl hover:bg-blue-700 duration-300 hover:text-white py-[6px] px-6"
                >
                  <h1>VISIT</h1>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
            <div className="relative md:w-[24%] w-[80%] h-[40vh] group rounded-lg">
              <img
                src="/restaurant.png"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-70 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center gap-3">
                <h1 className="text-white text-lg text-center font-bold opacity-0 group-hover:opacity-100 duration-300">
                  RESTAURANT WEBSITE
                </h1>
                <Link
                  href="https://restaurant-one-gamma.vercel.app/"
                  target="_blank"
                  className="bg-white text-black opacity-0 group-hover:opacity-100 flex items-center gap-2 rounded-2xl hover:bg-blue-700 duration-300 hover:text-white py-[6px] px-6"
                >
                  <h1>VISIT</h1>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center gap-9">
            <div className="relative md:w-[24%] w-[80%] h-[40vh] group rounded-lg">
              <img
                src="/smitwebsite.png"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-70 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center gap-3">
                <h1 className="text-white text-lg text-center font-bold opacity-0 group-hover:opacity-100 duration-300">
                  ALHAN'S WEBSITE
                </h1>
                <Link
                  href="https://alhandilshad.github.io/smit-website/"
                  target="_blank"
                  className="bg-white text-black opacity-0 group-hover:opacity-100 flex items-center gap-2 rounded-2xl hover:bg-blue-700 duration-300 hover:text-white py-[6px] px-6"
                >
                  <h1>VISIT</h1>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
            <div className="relative md:w-[24%] w-[80%] h-[40vh] group rounded-lg">
              <img
                src="/greenprotocol.png"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-70 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center gap-3">
                <h1 className="text-white text-lg text-center font-bold opacity-0 group-hover:opacity-100 duration-300">
                  GREENPROTOCOL WEBSITE
                </h1>
                <Link
                  href="https://greenprotocol.vercel.app/"
                  target="_blank"
                  className="bg-white text-black opacity-0 group-hover:opacity-100 flex items-center gap-2 rounded-2xl hover:bg-blue-700 duration-300 hover:text-white py-[6px] px-6"
                >
                  <h1>VISIT</h1>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
            <div className="relative md:w-[24%] w-[80%] h-[40vh] group rounded-lg">
              <img
                src="/quiz.png"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-70 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center gap-3">
                <h1 className="text-white text-lg text-center font-bold opacity-0 group-hover:opacity-100 duration-300">
                  QUIZ APP
                </h1>
                <Link
                  href="https://alhandilshad.github.io/Quiz-App/"
                  target="_blank"
                  className="bg-white text-black opacity-0 group-hover:opacity-100 flex items-center gap-2 rounded-2xl hover:bg-blue-700 duration-300 hover:text-white py-[6px] px-6"
                >
                  <h1>VISIT</h1>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
