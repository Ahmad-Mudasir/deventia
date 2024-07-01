import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import React from 'react';

const ServicesCard = ({
  title,
  flexReverse,
  Checkboxes,
  exploreLink,
  img,
}: {
  title: string;
  flexReverse: boolean;
  Checkboxes: React.ReactNode;
  exploreLink: string;
  img: any;
}) => {
  return (
    <section
      className={`flex gap-8 lg:gap-28 flex-col mt-8 ${
        flexReverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } services-bg p-[5%]`}
    >
      <div className="w-full">
        <h1 className="font-bold text-xl md:text-3xl mb-4">{title}</h1>
        {Checkboxes}
        <div className="flex items-center gap-2 flex-wrap mt-8">
          <Link
            href={exploreLink}
            className="p-4 bg-[#7571e68c] text-white flex items-center gap-2"
          >
            Explore More
          </Link>
          <div className="p-4 bg-[#7571e68c] flex items-center justify-center">
            <MdOutlineArrowOutward size={25} color="#fff" />
          </div>
        </div>
      </div>
      <Image
        src={img}
        alt="services"
        className="w-full h-screen max-h-[30rem]"
      />
    </section>
  );
};
export default ServicesCard;
