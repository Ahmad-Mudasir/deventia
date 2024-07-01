import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IoArrowDownOutline } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';
import heroBgImg from '../../assets/images/about-us-hero-bg.webp';

const Hero = () => {
  return (
    <div className="relative bg-[#161616] h-screen">
      <Image
        src={heroBgImg}
        alt="people"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-start p-8">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-1 1200px:w-1/2">
            <h3 className="text-white/50 text-sm">
              Discover the Roots of Deventia <br /> and Our Guiding Principles
            </h3>
            <div className="p-2 border border-white flex items-center justify-center">
              <IoArrowDownOutline size={30} color="#fff" />
            </div>
          </div>
          <h1 className="text-white text-start text-[3rem] md:text-[5rem] font-bold leading-tight">
            Uncovering Our Evolution <br className="hidden lg:block" />
            Uncovering Our Evolution{' '}
          </h1>
          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href={'/'}
              className="p-4 bg-[#7471E6] text-white flex items-center gap-2"
            >
              Let&apos;s Connect
            </Link>
            <div className="p-4 bg-[#7471E6] flex items-center justify-center">
              <MdOutlineArrowOutward size={25} color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
