'use client';

import Link from 'next/link';
import React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#161616] h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={'/homepagebg.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-start p-8">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-1 1200px:w-1/2">
            <h3 className="text-white/50 text-sm ">
              Empowering Ideas to Shape <br /> Tomorrow&apos;s World
            </h3>
            <div
              onClick={handleScroll}
              className=" border border-white flex items-center justify-center cursor-pointer"
            >
              <IoArrowDownOutline
                size={40}
                color="#fff"
                className="hover:animate-bounce transition-all duration-700 ease-in-out p-2"
              />
            </div>
          </div>
          <h1 className="text-white text-start text-[3rem] 500px:text-[5rem] font-bold 1200px:leading-none">
            Unlocking <br /> Digital Excellence
          </h1>
          <Link
            href={'/Contact-us'}
            className="flex items-center gap-2 flex-wrap hover:bg-[#7471E6] hover:scale-110 transition-all duration-700 ease-in-out"
          >
            <p className="p-4 bg-[#7471E6] text-white flex items-center gap-2">
              Let&apos;s Connect
            </p>
            <div className="p-4 bg-[#7471E6] flex items-center justify-center">
              <MdOutlineArrowOutward size={25} color="#fff" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
