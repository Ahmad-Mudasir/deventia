"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import { carouselData } from "@/data/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import BlueGlowEffect from "./BlueGlowEffect";

const carouselVideos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper: {
    realIndex: React.SetStateAction<number>;
  }) => {
    setCurrentSlide(swiper.realIndex);
  };

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };

  return (
    <div className=" relative bg-[#0B0B0B] h-[650px] md:h-[800px]  lg:h-[912px]">
      {/* Gradient Background */}

      {/* lighting effect */}
      <BlueGlowEffect
        className="-top-10 -left-4  "
        size={200}
        blur={100}
        opacity={0.5}
        rotate={0}
      />

      {/* Floating Orbs */}
      <div className="absolute top-[60px] right-10 md:right-40 w-[25px] h-[25px] rounded-[41px] bg-gradient-to-b from-[#AD6AFF] to-[#AD6AFF00]" />
      
      <div className="relative flex justify-center   mx-auto w-[90%] md:w-[80%] lg:w-[777px] h-[630px] md:h-[800px] lg:h-[900px]">

      <div className="absolute top-[120px] md:top-[125px] left-10 md:left-0 w-4 h-4 rounded-full bg-gradient-to-b from-[#FAC977] to-[#FAC97700]" />
      <div className="absolute top-[390px] lg:top-[420px] left-1 lg:-left-[4%] w-[13px] h-[13px] rounded-[21px] bg-gradient-to-b from-[#7ADB78] to-[#7ADB7800]" />
      <div className="absolute top-[250px] lg:top-[261px] right-[5%] lg:-right-[14px] w-[13px] h-[13px] rounded-[21px] bg-gradient-to-b from-[#7ADB78] to-[#7ADB7800]" />

        {/* Circular Gradient */}
        <div className="absolute top-[300px] md:top-[385px] lg:top-[430px] flex justify-center rounded-full bg-blue-900/20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] lg:w-[100%] h-[500px] md:h-[670px] lg:h-[775px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-[140px] md:top-[120px] lg:top-[160px] w-[200px] md:w-[400px] h-[150px] md:h-[300px]"
            >
              <Image
                src={carouselData[currentSlide].heroImage}
                alt="Business handshake"
                width={400}
                className="rounded-full h-[100%]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 pt-20 pb-12 text-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {carouselData[currentSlide].title}
              <br />
              {carouselData[currentSlide].titleBr}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`description-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[8px] md:text-xs w-[68%] mx-auto md:w-auto lg:text-sm text-gray-300 mb-8"
            >
              {carouselData[currentSlide].description}
              <br />
              {carouselData[currentSlide].descriptionBr}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center gap-4 flex-wrap"
            >
              <button className="bg-blue-600 text-white text-xs md:text-sm lg:text-lg px-4 md:px-6 lg:px-8 py-1 md:py-2 lg:py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="flex items-center gap-2 text-white text-xs md:text-sm lg:text-lg px-4 md:px-6 lg:px-8 py-1 md:py-2 lg:py-3 hover:bg-white/10 transition-colors">
                <MdPlayArrow
                  size={24} // Adjust icon size for responsiveness
                  className="border-2 rounded-md border-[#4848FF]"
                />
                <span>{carouselData[currentSlide].buttonText}</span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Swiper Carousel */}
        <div className="absolute rounded-xl   bottom-20 w-[80%]  h-[230px] md:h-[350px] lg:h-[400px] lg:w-[100%]   mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              el: ".hero-pagination",
              clickable: true,
            }}
            autoplay={{ delay: 9000, disableOnInteraction: false }}
            loop={true}
            onSlideChange={handleSlideChange}
            className=" overflow-hidden rounded-xl w-[100%] h-[200px] md:h-[330px] lg:h-[400px] "
          >
            {carouselVideos.map((video, index) => (
              <SwiperSlide key={index}>
                <motion.video
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={video}
                  
                  width={400}
                  height={200}
                  className="w-[100%] bg-blue-500 h-[90%] mx-auto rounded-xl  object-cover"
                />
              </SwiperSlide>
            ))}
             
          </Swiper>
         
          <div className="hero-pagination flex gap-2   justify-center absolute mx-auto bottom-0"></div>
        </div>
       
        {/* Adjust Pagination Position */}
        <style jsx global>{`
          .hero-pagination .swiper-pagination-bullet{
            bottom: 20px !important; /* Move outside carousel */
            background-color: white !important;
          }
         
          .hero-pagination .swiper-pagination-bullet-active {
            background-color: white !important; /* Set the active dot color to white */
          }
        `}</style>
      </div>
    </div>
  );
};

export default Hero;
