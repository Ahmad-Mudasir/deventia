'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logoImg from '@/assets/images/logoImg.gif';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { RiMenu4Line } from 'react-icons/ri';
import { inter } from '@/utils/fonts';
import { usePathname } from 'next/navigation';
import { FaAngleDown } from 'react-icons/fa6';

const Navbar = () => {
  const [hovered, setHovered] = useState({ hover: false, name: '' });
  const currentPath = usePathname();
  const isActive = (pathName: string) => {
    return currentPath.startsWith(pathName);
  };

  const handleHover = (name: string, hover: boolean) => {
    setHovered({ hover: hover, name: name });
  };

  return (
    <div
      className={`navbar bg-[#7571e67c] fixed top-0 bg-opacity-5 backdrop-filter backdrop-blur-sm shadow-sm z-20 !p-0 w-full max-w-[1750px] ${inter.className} !font-[400]`}
    >
      <div className="navbar-start  ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="pl-2 lg:hidden flex justify-end"
          >
            <RiMenu4Line size={25} color="#fff" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#161616] h-screen overflow-y-auto flex flex-col"
          >
            <li
              className={`p-3 ${
                isActive('/Services') ||
                isActive('/Careers') ||
                isActive('/Our-Portfolio') ||
                isActive('/About-us')
                  ? 'text-white'
                  : 'bg-[#7471E680]'
              }`}
            >
              <Link href={'/'}>Home</Link>
            </li>
            <li
              className={`p-3 relative ${
                isActive('/Services') ? 'bg-[#7471E680]' : 'text-white'
              }`}
            >
              <Link className="flex gap-2 items-center" href={'/Services'}>
                Services <FaAngleDown />
              </Link>
              <div className="flex flex-col items-start mt-2 gap-2 bg-[#7471E6] w-fit h-fit rounded-lg shadow-md py-4 px-8 transition-all duration-700 ease-in-out">
                <Link
                  className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
                  href={'/Services/Plan'}
                >
                  Plan
                </Link>
                <Link
                  className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
                  href={'/Services/Design-service'}
                >
                  Design
                </Link>
                <Link
                  className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
                  href={'/Services/Development'}
                >
                  Development
                </Link>
                <Link
                  className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
                  href={'/Services/Testing'}
                >
                  Testing
                </Link>
              </div>
            </li>
            <li
              className={`p-3 ${
                isActive('/Careers') ? 'bg-[#7471E680]' : 'text-white'
              }`}
            >
              <Link href={'/Careers'}>Careers</Link>
            </li>
            <li
              className={`p-3 ${
                isActive('/Our-Portfolio') ? 'bg-[#7471E680]' : 'text-white'
              }`}
            >
              <Link className="flex gap-2 items-center" href={'/Our-Portfolio'}>
                Our Portfolio
                <FaAngleDown />
              </Link>
              <div className="flex flex-col items-start mt-2 gap-2 bg-[#7471E6] w-fit h-fit rounded-lg shadow-md py-4 px-8">
                <Link
                  className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
                  href={'/Our-Portfolio/Projects/RS-Global-Ties'}
                >
                  RS Global Ties
                </Link>
                <Link
                  className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
                  href={'/Our-Portfolio/Projects/Private-CPA'}
                >
                  Private CPA
                </Link>
                <Link
                  className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
                  href={'/Our-Portfolio/Projects/ISA'}
                >
                  ISA Consulting
                </Link>
                <Link
                  className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
                  href={'/Our-Portfolio/Projects/Makewell.life'}
                >
                  Makewell.life
                </Link>
                <Link
                  className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
                  href={'/Our-Portfolio/Projects/origin.com'}
                >
                  origin.com
                </Link>
                <Link
                  className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
                  href={'/Our-Portfolio/Projects/Dadi-Rent-Boat'}
                >
                  Dadi Rent Boat
                </Link>
              </div>
            </li>
            <li
              className={`p-3 ${
                isActive('/About-us') ? 'bg-[#7471E680]' : 'text-white'
              }`}
            >
              <Link href={'/About-us'}>About Us</Link>
            </li>

            <Link
              href={'/Contact-us'}
              className="p-3 bg-[#7471E680] text-white/70 flex items-center gap-2"
            >
              Contact Us <MdOutlineArrowOutward size={25} />
            </Link>
          </ul>
        </div>
        <Image
          unoptimized
          src={logoImg}
          width={100}
          alt="deventia logo"
          className="lg:ml-6 mr-auto"
        />
      </div>
      <ul className="navbar-end w-full hidden lg:flex px-1 items-center">
        <li
          className={`p-3 ${
            isActive('/Services') ||
            isActive('/Careers') ||
            isActive('/Our-Portfolio') ||
            isActive('/About-us')
              ? 'text-white'
              : 'bg-[#7471E680]'
          }`}
        >
          <Link href={'/'}>Home</Link>
        </li>
        <li className="text-[#7471E6]">|</li>
        <li
          onMouseEnter={() => {
            handleHover('services', true);
          }}
          onMouseLeave={() => {
            handleHover('services', false);
          }}
          className={`p-3 relative inline-block ${
            isActive('/Services') ? 'bg-[#7471E680]' : 'text-white'
          }`}
        >
          <Link className="flex gap-2 items-center" href={'/Services'}>
            Services{' '}
            <FaAngleDown
              className={`${
                hovered.hover && hovered.name === 'services' ? 'rotate-180' : ''
              }`}
            />
          </Link>
          <div
            onMouseLeave={() => {
              handleHover('services', false);
            }}
            className={`absolute top-12 -left-4 ${
              hovered.hover && hovered.name === 'services' ? 'flex' : 'hidden'
            }  flex-col gap-2 bg-[#7471E6] w-fit h-fit rounded-lg shadow-md py-4 px-8 transition-all duration-700 ease-in-out`}
          >
            <Link
              className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
              href={'/Services/Plan'}
            >
              Plan
            </Link>
            <Link
              className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
              href={'/Services/Design-service'}
            >
              Design
            </Link>
            <Link
              className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
              href={'/Services/Development'}
            >
              Development
            </Link>
            <Link
              className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
              href={'/Services/Testing'}
            >
              Testing
            </Link>
          </div>
        </li>
        <li className="text-[#7471E6]">|</li>

        <li
          className={`p-3 ${
            isActive('/Careers') ? 'bg-[#7471E680]' : 'text-white'
          }`}
        >
          <Link href={'/Careers'}>Careers</Link>
        </li>
        <li className="text-[#7471E6]">|</li>

        <li
          onMouseEnter={() => {
            handleHover('Portfolio', true);
          }}
          onMouseLeave={() => {
            handleHover('Portfolio', false);
          }}
          className={`p-3 relative ${
            isActive('/Our-Portfolio') ? 'bg-[#7471E680]' : 'text-white'
          }`}
        >
          <Link className="flex gap-2 items-center" href={'/Our-Portfolio'}>
            Our Portfolio
            <FaAngleDown
              className={`${
                hovered.hover && hovered.name === 'Portfolio'
                  ? 'rotate-180'
                  : ''
              }`}
            />
          </Link>
          <div
            onMouseLeave={() => {
              handleHover('Portfolio', false);
            }}
            className={`absolute whitespace-pre top-12 -left-4 ${
              hovered.hover && hovered.name === 'Portfolio' ? 'flex' : 'hidden'
            } flex-col gap-2 bg-[#7471E6] w-fit h-fit rounded-lg shadow-md py-4 px-8`}
          >
            <Link
              className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
              href={'/Our-Portfolio/Projects/RS-Global-Ties'}
            >
              RS Global Ties
            </Link>
            <Link
              className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
              href={'/Our-Portfolio/Projects/Private-CPA'}
            >
              Private CPA
            </Link>
            <Link
              className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
              href={'/Our-Portfolio/Projects/ISA'}
            >
              ISA Consulting
            </Link>
            <Link
              className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
              href={'/Our-Portfolio/Projects/Makewell.life'}
            >
              Makewell.life
            </Link>
            <Link
              className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
              href={'/Our-Portfolio/Projects/origin.com'}
            >
              origin.com
            </Link>
            <Link
              className="hover:font-medium hover:scale-110 transition-all duration-700 ease-in-out"
              href={'/Our-Portfolio/Projects/Dadi-Rent-Boat'}
            >
              Dadi Rent Boat
            </Link>
          </div>
        </li>
        <li className="text-[#7471E6]">|</li>

        <li
          className={`p-3 ${
            isActive('/About-us') ? 'bg-[#7471E680]' : 'text-white'
          }`}
        >
          <Link href={'/About-us'}>About Us</Link>
        </li>

        <Link
          href={'/Contact-us'}
          className="p-3 bg-[#7471E680] text-white/70 flex items-center gap-2 hover:font-medium  transition-all duration-700 ease-in-out"
        >
          Contact Us <MdOutlineArrowOutward size={25} />
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
