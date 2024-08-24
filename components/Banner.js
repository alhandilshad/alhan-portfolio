import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div id="banner" className="flex justify-center items-center py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-24 w-[85%] mx-auto md:ml-40">
          <div className="text-center md:text-left">
            <h1 className="text-[32px] md:text-[40px] font-semibold">HELLO</h1>
            <h1 className="text-[50px] md:text-[70px] font-bold">I AM ALHAN</h1>
            <h1 className="text-[20px] md:text-[24px] font-semibold">FRONTEND DEVELOPER</h1>
            <Link href="/Alhan-Dilshad (1).pdf" target="_blank" >
            <button className="text-white px-8 md:px-10 py-3 rounded-md font-semibold mt-6 duration-500 shadow-[0px_10px_30px_rgba(118,85,225,0.3)] bg-origin-border bg-clip-border border-2 border-transparent bg-[linear-gradient(to_right,#4458dc_0%,#854fee_100%),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:bg-[linear-gradient(#ffffff,#ffffff),radial-gradient(circle_at_top_left,#4458dc,#854fee)] hover:border-2 hover:border-[#854fee] hover:text-[#222222] hover:shadow-none hover:bg-clip-border">
              HIRE ME
            </button>
            </Link>
          </div>
          <div className="w-[80%] md:w-auto">
            <img src="/home-right.png" alt="Banner Image" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;