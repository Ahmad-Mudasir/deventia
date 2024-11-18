"use client";
import React from "react";
import Image from "next/image";
import heroBgImg from "@/assets/images/services-hero-bg.webp";

const Hero = () => {
  return (
    <header className="relative bg-[#161616] h-[75vh]">
      <Image
        src={heroBgImg}
        alt="people"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-start p-8">
        <h1 className="text-white text-start text-[3rem] 500px:text-[5rem] font-bold leading-tight">
          Privacy Policy
        </h1>
      </div>
    </header>
  );
};

export default Hero;
