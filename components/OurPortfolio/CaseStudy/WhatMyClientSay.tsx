import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa6';

const WhatMyClientSay = () => {
  return (
    <section className="px-[5%]">
      <h6 className="text-xl uppercase text-[#797C86] font-semibold mb-2">
        Testimonials
      </h6>
      <h1 className="font-semibold text-2xl lg:text-5xl mb-12">
        What My Clients Say
      </h1>
      <div className="bg-[#0E0E10] p-8 border-[1px] border-[#1C1C21] rounded-xl">
        <div className="flex flex-wrap justify-between gap-8">
          <div>
            <h4 className="text-[#E4E4E6] font-medium text-xl">
              Emily Johnson
            </h4>
            <p className="text-base text-[#62646C]">USA, California</p>
          </div>
          <div className="bg-[#070708] flex gap-4 p-4 rounded-full border-[1px] border-[#1C1C21]">
            <Link
              href={'#'}
              className="bg-[#1C1C21] p-3 rounded-full flex items-center justify-center"
            >
              <FaFacebook size={25} />
            </Link>
            <Link
              href={'#'}
              className="bg-[#1C1C21] p-3 rounded-full flex items-center justify-center"
            >
              <FaTwitter size={25} />
            </Link>
            <Link
              href={'#'}
              className="bg-[#1C1C21] p-3 rounded-full flex items-center justify-center"
            >
              <FaLinkedin size={25} />
            </Link>
          </div>
        </div>
        <div className="flex gap-2 text-[#FFCE22] mt-8">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="text-lg text-[#E4E4E6] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};
export default WhatMyClientSay;
