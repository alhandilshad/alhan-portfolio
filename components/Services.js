import React from "react";

const Services = () => {
  return (
    <>
      <div className="mt-16 mb-10 lg:mt-28 lg:mb-28">
        <h1 className="text-center text-2xl lg:text-4xl font-[800] uppercase">
          service offers
        </h1>
        <p className="text-center pt-2 lg:pt-3 text-sm lg:text-base">
          Here are some of the key services I offer as a Frontend Developer.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-16 lg:mt-28">
          <div className="w-[80%] sm:w-[45%] md:w-[30%] lg:w-[18%] h-[35vh] md:h-[40vh] lg:h-[48vh] bg-[#f9f9fd] hover:bg-white hover:shadow-custom duration-500 cursor-pointer flex flex-col justify-center items-center gap-5">
            <img src="/s1.png" className="w-16 h-16 lg:w-20 lg:h-20" alt="Responsive Web Design"/>
            <h1 className="text-lg lg:text-xl font-semibold">Responsive Web Design</h1>
            <p className="text-center text-[#777777] px-4 text-sm lg:text-base">
              I create responsive websites that look great on all devices, ensuring a seamless user experience no matter the screen size.
            </p>
          </div>
          <div className="w-[80%] sm:w-[45%] md:w-[30%] lg:w-[18%] h-[35vh] md:h-[40vh] lg:h-[48vh] bg-[#f9f9fd] hover:bg-white hover:shadow-custom duration-500 cursor-pointer flex flex-col justify-center items-center gap-5">
            <img src="/s2.png" className="w-16 h-16 lg:w-20 lg:h-20" alt="UI/UX Prototyping"/>
            <h1 className="text-lg lg:text-xl font-semibold">UI/UX Prototyping</h1>
            <p className="text-center text-[#777777] px-4 text-sm lg:text-base">
              I design and prototype user interfaces that are not only visually appealing but also highly functional and easy to use.
            </p>
          </div>
          <div className="w-[80%] sm:w-[45%] md:w-[30%] lg:w-[18%] h-[35vh] md:h-[40vh] lg:h-[48vh] bg-[#f9f9fd] hover:bg-white hover:shadow-custom duration-500 cursor-pointer flex flex-col justify-center items-center gap-5">
            <img src="/s3.png" className="w-16 h-16 lg:w-20 lg:h-20" alt="Single Page Applications"/>
            <h1 className="text-lg lg:text-xl font-semibold">Single Page Applications</h1>
            <p className="text-center text-[#777777] px-4 text-sm lg:text-base">
              Developing fast, dynamic, and user-friendly single-page applications using modern JavaScript frameworks like React.
            </p>
          </div>
          <div className="w-[80%] sm:w-[45%] md:w-[30%] lg:w-[18%] h-[35vh] md:h-[40vh] lg:h-[48vh] bg-[#f9f9fd] hover:bg-white hover:shadow-custom duration-500 cursor-pointer flex flex-col justify-center items-center gap-5">
            <img src="/s4.png" className="w-16 h-16 lg:w-20 lg:h-20" alt="API Integration"/>
            <h1 className="text-lg lg:text-xl font-semibold">API Integration</h1>
            <p className="text-center text-[#777777] px-4 text-sm lg:text-base">
              I integrate APIs into your website or application, enabling seamless communication between different services and systems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
