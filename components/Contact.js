"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [mess, setmess] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name ||!email ||!mess) {
      alert('Please fill in all fields');
      return;
    }
    
    const serviceId = 'service_6uhjsaf'
    const templateId = 'template_iy07d0a'
    const publicKey = 'UTjsQjXNVHtfWckSM'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Alhan',
      message: mess,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
     .then((res) => {
        console.log('email sent successfully', res);
        alert('Your message has been sent successfully!');
        setname('');
        setemail('');
        setmess('');
      })
     .catch((err) => console.error('Failed to send email', err));
  }
  return (
    <>
      <div className="mb-36" id='contact'>
        <h1 className="text-center font-extrabold text-4xl">GET IN TOUCH</h1>
        <p className="text-center pt-4 text-[#777777]">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
          <br /> Feel free to reach out using the form below or directly through
          my contact details.
        </p>
        <div className="flex justify-center items-center mt-28">
        <form
          onSubmit={handleSubmit}
          className="w-[76%] bg-cover bg-center shadow-md rounded pt-20 pb-20 mb-4"
          style={{
            backgroundImage: `url('/subscribe-bg.png')`,
          }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="md:w-[50%] w-[80%]">
              <label
                className="block text-white text-xl font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow bg-transparent placeholder:text-white border-white appearance-none border rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="md:w-[50%] w-[80%]">
              <label
                className="block text-white text-xl font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow bg-transparent placeholder:text-white border-white appearance-none border rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className='md:w-[50%] w-[80%]'>
              <label
                className="block text-white text-xl font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow bg-transparent placeholder:text-white border-white appearance-none border rounded w-full h-[20vh] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter your message"
                value={mess}
                onChange={(e) => setmess(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center md:w-[50%] w-[80%]">
              <button
                className="bg-white border-2 hover:bg-transparent hover:border-white hover:text-white text-blue-600 font-semibold duration-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Send Email
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Contact;
