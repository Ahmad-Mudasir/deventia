import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import heroBgImg from '../../assets/images/contact us hero bg.webp';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { AiTwotoneMail } from 'react-icons/ai';

const Hero = () => {
  return (
    <header className="relative bg-[#161616] h-screen flex flex-col justify-center items-center gap-6 !z-0">
      <Image
        src={heroBgImg}
        alt="people"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <h1 className="z-10 text-white text-start text-[3rem] md:text-[5rem] font-bold leading-tight">
        Get in Touch Today!
      </h1>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="bg-white flex gap-2 z-10 items-center p-4">
          <div className="flex items-center justify-center p-4 bg-[#3535D8]">
            <AiTwotoneMail size={23} />
          </div>
          <h3 className="font-bold text-xl text-[#1B2534]">Email</h3>
          <a
            href="mailto:info@deventiateam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-[#797979]"
          >
            info@deventiateam.com
          </a>
        </div>{' '}
        <div className="bg-white flex gap-4 z-10 items-center p-4">
          <div className="flex items-center justify-center p-4 bg-[#3535D8]">
            <BiSolidPhoneCall size={23} />
          </div>
          <h3 className="font-bold text-xl text-[#1B2534]">Call Us</h3>
          <div>
            <a
              href="tel:(+44) 3333 660 173"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#797979]"
            >
              UK: (+44) 3333 660 173
            </a>
            <br />
            <a
              href="tel:(+1) 929 946 7607"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#797979]"
            >
              US: (+1) 929 946 7607
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
