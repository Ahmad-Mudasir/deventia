import { euroStyle, genos, poppins } from '@/utils/fonts';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { PinContainer } from '../ui/PinCards3d';
import Image from 'next/image';
import isaImg from '../../assets/images/isa-desktop.webp';
import rsImg from '../../assets/images/RS-desktop.webp';
import makewellImg from '../../assets/images/makewell-mobile.webp';

const Portfolio = () => {
  return (
    <div
      className={`w-full h-full px-[5%] bg-[#191919] overflow-hidden ${euroStyle.className} z-10 relative`}
    >
      <div
        className="absolute top-0 -right-4 w-72 h-72 bg-[#7571e6] rounded-full filter blur-3xl opacity-10 animate-blob "
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute right-20 w-72 h-72 bg-[#cccaf0] rounded-full filter blur-3xl opacity-10 animate-blob"
        style={{ animationDelay: '4s' }}
      ></div>
      <div
        className="absolute top-0 -left-4 w-72 h-72 bg-[#7571e6] rounded-full filter blur-3xl opacity-10 animate-blob "
        style={{ animationDelay: '6s' }}
      ></div>
      <div
        className="absolute left-20 w-72 h-72 bg-[#cccaf0] rounded-full filter blur-3xl opacity-10 animate-blob"
        style={{ animationDelay: '8s' }}
      ></div>
      <div className=" px-4 pt-8 w-full flex flex-wrap justify-between items-center gap-4">
        <div className="">
          <h3
            className={`${genos.className} text-[2rem] text-white z-10 font-[200]
        `}
          >
            Portfolio{' '}
          </h3>
          <h1
            className={`${euroStyle.className} text-[2rem] md:text-[3rem] leading-none text-white/75  z-10
          `}
          >
            Our Previous Works{' '}
          </h1>
        </div>
        <Link
          href={'/Our-Portfolio'}
          className="p-2 bg-transparent  text-[#7471E6] hover:text-white hover:bg-[#7471E6] border border-[#7471E6] flex items-center gap-1 text-[16px] self-end font-semibold leading-[1.2rem] tracking-[0.19rem] z-10"
        >
          <p> View More</p> <MdArrowOutward size={25} />
        </Link>
      </div>
      <div className="flex items-center flex-wrap justify-center">
        <PinContainer
          key={1}
          title={'RS Global Ties'}
          href={'https://rs-global-ties.com'}
        >
          <div className="flex basis-full flex-col rounded-xl tracking-tight sm:basis-1/2 w-[20rem] ">
            <Image src={rsImg} width={350} height={400} alt="website image" />
            <div className="mt-2 p-2 flex items-center justify-between">
              <div className="">
                <h3
                  className={`!tracking-widest text-[1rem] text-white z-10 font-[300]`}
                >
                  Click Here To Visit{' '}
                </h3>
                <h3
                  className={`!tracking-[0.15rem] text-[0.8rem] text-white z-10 font-[600] leading-none`}
                >
                  {'RS Global Ties - Where Businesses Grow'}
                </h3>
              </div>
              <MdArrowOutward size={30} fill="#fff" />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          key={2}
          title={'ISA Consulting'}
          href={'https://isaconsulting.com'}
        >
          <div className="flex basis-full flex-col rounded-xl tracking-tight sm:basis-1/2 w-[20rem] ">
            <Image src={isaImg} width={350} height={400} alt="website image" />
            <div className="mt-2 p-2 flex items-center justify-between">
              <div className="">
                <h3
                  className={`!tracking-widest text-[1rem] text-white z-10 font-[300]`}
                >
                  Click Here To Visit{' '}
                </h3>
                <h3
                  className={`!tracking-[0.15rem] text-[0.8rem] text-white z-10 font-[600] leading-none`}
                >
                  {'ISA Consulting - Get Dream Job'}
                </h3>
              </div>
              <MdArrowOutward size={30} fill="#fff" />
            </div>
          </div>
        </PinContainer>
        <PinContainer
          key={3}
          title={'Makewell.life'}
          href={'https://makewell.life/'}
        >
          <div className="flex basis-full flex-col rounded-xl tracking-tight sm:basis-1/2 w-[20rem] ">
            <Image
              src={makewellImg}
              width={350}
              height={400}
              alt="website image"
            />
            <div className="mt-2 p-2 flex items-center justify-between">
              <div className="">
                <h3
                  className={`!tracking-widest text-[1rem] text-white z-10 font-[300]`}
                >
                  Click Here To Visit{' '}
                </h3>
                <h3
                  className={`!tracking-[0.15rem] text-[0.8rem] text-white z-10 font-[600] leading-none`}
                >
                  {'RS Global Ties - Where Businesses Grow'}
                </h3>
              </div>
              <MdArrowOutward size={30} fill="#fff" />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
};

export default Portfolio;
