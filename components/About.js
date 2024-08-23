import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-20 mt-16 px-4 md:px-0' id='about'>
        <div className='w-full flex justify-center md:w-auto'>
          <img src='/about-us.png' className='w-full md:w-auto max-w-xs md:max-w-none' />
        </div>
        <div className='w-full md:w-[60%] lg:w-[30%] text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl font-[800] leading-[40px] md:leading-[50px] uppercase'>
            let’s<br /> Introduce about<br /> myself
          </h1>
          <p className='text-[#777777] pt-3 md:pt-5 text-sm md:text-base'>
            Hi, I'm Alhan, a passionate Frontend Developer with a strong focus on creating engaging and user-friendly web experiences. With a solid foundation in HTML, CSS, JavaScript, and React, I enjoy bringing designs to life and ensuring seamless interactions on the web.
          </p>
          <p className='text-[#777777] pt-3 md:pt-5 text-sm md:text-base'>
            I have experience working on a variety of projects, from e-commerce websites to dynamic web applications, always striving for clean code, responsive design, and accessibility. My goal is to continuously learn and grow, adapting to the latest trends and technologies in frontend development.
          </p>
          <button className="text-white text-[13px] md:text-[15px] px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold mt-6 md:mt-8 duration-500 shadow-[0px_10px_30px_rgba(118,85,225,0.3)] bg-origin-border bg-clip-border border-2 border-transparent bg-[linear-gradient(to_right,#4458dc_0%,#854fee_100%),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:bg-[linear-gradient(#ffffff,#ffffff),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:border-2 hover:border-[#854fee] hover:text-[#222222] hover:shadow-none hover:bg-clip-border">
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
