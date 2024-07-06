import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Hero = ({
  projectLogo,
  projectName,
  projectImg,
}: {
  projectLogo: any;
  projectName: string;
  projectImg: any;
}) => {
  return (
    <header className="relative bg-gradient-to-b from-[#6460ce56] to-[#2424260f] flex h-fit lg:h-screen max-h-fit w-full">
      {/* <Image
        src={heroBgImg}
        alt="people"
        className="absolute top-0 left-0 w-full h-full object-cover"
      /> */}
      <div className="flex flex-col items-start justify-center gap-4 px-[5%] lg:pr-[3%]">
        <h2 className="text-white text-start text-2xl lg:text-5xl font-bold leading-tight flex items-end gap-4">
          <Image src={projectLogo} alt="logo" className="w-[120px] h-[80px]" />
          {projectName}
        </h2>
        <h1 className="text-white text-start text-2xl lg:text-5xl font-bold leading-tight">
          Case Study for {projectName} Website
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

      <Image
        src={projectImg}
        alt="website"
        className="w-full lg:w-[55%] mr-0 ml-auto h-auto"
      />

      {/* <div className="flex">
        <iframe
          src="https://isaconsulting.com/"
          title="ISA Consulting"
          className="iphone-case case-1 w-[350px] sm:w-[400px]"
        ></iframe>
        <div className="rounded-3xl w-full h-screen border-2 border-[#ffffff43] overflow-hidden lg:scale-50">
          <iframe
            src="https://isaconsulting.com/"
            title="ISA Consulting"
            className="bg-black rounded-3xl !overflow-y-hidden"
          ></iframe>
        </div>
      </div> */}
    </header>
  );
};

export default Hero;
