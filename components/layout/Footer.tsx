import Image from 'next/image';
import React from 'react';
import logoImg from '@/assets/images/logoImg.gif';
// import { euroStyle } from '@/utils/fonts';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaSquareFacebook } from 'react-icons/fa6';
import { LuSlack } from 'react-icons/lu';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-[5%] bg-[#161616] z-20 relative">
      <div className="absolute bottom-0 left-0 footer-bg-img"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        <div>
          <h4 className="font-semibold text-xl text-white/35 mb-4">
            Navigation
          </h4>
          <div className="flex flex-col">
            <Link className="text-lg font-medium" href="/">
              Home
            </Link>
            <Link className="text-lg font-medium" href="/Services">
              Services
            </Link>
            <Link className="text-lg font-medium" href="About Us">
              About Us
            </Link>
            <Link className="text-lg font-medium" href="/Our-Portfolio">
              Our Portfolio
            </Link>
            <Link className="text-lg font-medium" href="/Careers">
              Careers
            </Link>
            <Link className="text-lg font-medium" href="Contacts">
              Contacts
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-xl text-white/35 mb-4">
            Contact us
          </h4>
          <a
            className="text-lg font-medium"
            rel="stylesheet"
            href="tel:+9240-9331148"
          >
            +9240-9331148
          </a>
          <h4 className="font-semibold text-xl text-white/35 my-4 md:mt-20">
            Follow us
          </h4>
          <div className="flex gap-2">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 rounded-full"
            >
              <FaSquareFacebook />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 rounded-full"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 rounded-full"
            >
              <LuSlack />
            </a>
          </div>
          <h4 className="font-semibold text-xl text-white/35 my-4 mt-8">
            Location
          </h4>

          <a
            className="text-lg font-medium mt-4"
            rel="stylesheet"
            href="Mansehra, kpk 21300, PK"
          >
            Mansehra, kpk 21300, PK
          </a>
        </div>
        <div className="">
          <a href="mailto:deventialimited@gmail.com" className="block mt-12">
            deventialimited@gmail.com
          </a>
          <h4 className="font-semibold text-xl text-white/35 my-4 md:mt-20">
            Contact us
          </h4>
          <div className="flex gap-2">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 rounded-full"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-white/25 rounded-full"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
        <Image
          src={logoImg}
          alt="deventia logo"
          width={125}
          unoptimized
          className="mr-0 ml-auto"
        />
      </div>
      <div className="mt-20 mb-8">
        <p className="font-medium text-lg text-white/35 ">Copyright</p>
        <p className="font-medium text-lg text-white/35 ">Privacy</p>
        <p className="font-medium text-lg text-white/35 ">
          All rights reserved
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <h4 className="font-semibold text-xl text-white/35 text-center ml-auto mr-0">
          © 2024 — DEVENTIA
        </h4>
        <h4 className="ml-auto mr-0 font-semibold text-xl text-white/35">
          En {'   '}Es
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
