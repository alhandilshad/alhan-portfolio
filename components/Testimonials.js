import React from 'react';

const Testimonials = () => {
  return (
    <>
      <div className='mb-36' id='testimonials'>
        <h1 className='text-center text-4xl font-extrabold'>CLIENT SAY ABOUT ME</h1>
        <p className='pt-4 text-center text-lg sm:text-base text-[#777777]'>
          Here are some of the kind words from my valued clients. Their feedback motivates me to continue<br /> 
          striving for excellence in every project I undertake.
        </p>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-12 mt-24 px-8'>
          <div className='w-full lg:w-[37%] h-auto lg:h-[28vh] flex flex-col lg:flex-row items-center gap-5 p-10 shadow-xl'>
            <img src='/t1.jpg' className='w-20 h-20 lg:w-auto lg:h-auto' />
            <div>
              <h1 className='text-xl font-semibold text-center lg:text-left'>ELITE MARTIN</h1>
              <p className='text-[#777777] pt-3 text-center lg:text-left'>
                Alhan did an excellent job on our project. Their attention to detail and dedication to the work were outstanding.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-[37%] h-auto lg:h-[28vh] flex flex-col lg:flex-row items-center gap-5 p-10 shadow-xl'>
            <img src='/t2.jpg' className='w-20 h-20 lg:w-auto lg:h-auto' />
            <div>
              <h1 className='text-xl font-semibold text-center lg:text-left'>DAVIL SADEN</h1>
              <p className='text-[#777777] pt-3 text-center lg:text-left'>
                Working with Alhan was a fantastic experience. They delivered high-quality code on time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;