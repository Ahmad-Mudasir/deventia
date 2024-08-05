import { servicesData } from '@/data/data';
import { euroStyle } from '@/utils/fonts';
import React from 'react';
import { HoverCard } from '../ui/hovercards';

const Services = () => {
  return (
    <div
      className={`relative w-full flex flex-col md:flex-row items-stretch bg-[#191919] overflow-hidden ${euroStyle.className} z-0`}
    >
      <div className="md:px-8 px-4 py-8 md:py-16 md:w-1/2 flex flex-col justify-center relative">
        {/* ANIMATING DIVS  */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover bg-repeat"
        >
          <source src={'/servicesbganimations.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div
          className="absolute top-0 -left-4 w-72 h-72 bg-[#7571e6] rounded-full filter blur-3xl opacity-40 animate-blob "
          style={{ animationDelay: '4s' }}
        ></div>
        <div
          className="absolute left-20 w-72 h-72 bg-[#cccaf0] rounded-full filter blur-3xl opacity-40 animate-blob"
          style={{ animationDelay: '2s' }}
        ></div> */}
        {/* CONTENT  */}
        <h3
          className={`${euroStyle.className} text-6xl text-white z-10 tracking-widest`}
        >
          Services
        </h3>
        <h1
          className={`${euroStyle.className} text-[2rem] md:text-[4rem] leading-none text-white/75 z-10 tracking-wider`}
        >
          Empowering our global client to embrace modern technology, rethink
          processes, and elevate experiences
        </h1>
      </div>
      <div className=" md:w-3/5 grid grid-cols-1 lg:grid-cols-2 md:border-l-2 md divide-y-2">
        {servicesData.map((item, index) => (
          <HoverCard
            title={item.title}
            description={item.description}
            link={item.link}
            key={index + 0.01 * 2}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
