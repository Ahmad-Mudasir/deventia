'use client';

import React from 'react';
import Image from 'next/image';
import logoImg from '@/assets/images/logoImg.gif';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { RiMenu4Line } from 'react-icons/ri';
import { inter } from '@/utils/fonts';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPath = usePathname();
  const isActive = (pathName: string) => {
    return currentPath.startsWith(pathName);
  };

  return (
    <div
      className={`navbar bg-[#7571e67c] fixed top-0 bg-opacity-5 backdrop-filter backdrop-blur-sm shadow-sm z-20 !p-0 w-full ${inter.className} !font-[400]`}
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#161616]"
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
              className={`p-3 ${
                isActive('/Services') ? 'bg-[#7471E680]' : 'text-white'
              }`}
            >
              <Link href={'/Services'}>Services</Link>
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
              <Link href={'/Our-Portfolio'}>Our Portfolio</Link>
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
          className={`p-3 ${
            isActive('/Services') ? 'bg-[#7471E680]' : 'text-white'
          }`}
        >
          <Link href={'/Services'}>Services</Link>
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
          className={`p-3 ${
            isActive('/Our-Portfolio') ? 'bg-[#7471E680]' : 'text-white'
          }`}
        >
          <Link href={'/Our-Portfolio'}>Our Portfolio</Link>
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
          className="p-3 bg-[#7471E680] text-white/70 flex items-center gap-2"
        >
          Contact Us <MdOutlineArrowOutward size={25} />
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
