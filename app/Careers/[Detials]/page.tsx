'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';
// import AboutCompany from '@/components/Career/AboutCompany';
import JobDescription from '@/components/Career/JobDescription';
import JobApplication from '@/components/Career/JobApplication';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IoArrowDownOutline } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';
import heroBgImg from '../../../assets/images/career-hero-bg-img.webp';
import axiosInstance from '@/lib/axiosInstance';

const Page = () => {
  const path = usePathname();
  const pathSegments = path.split('/');
  const id = pathSegments[pathSegments.length - 1];
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (id) {
      axiosInstance
        .get('/job/get')
        .then((response) => {
          const jobs = response.data;
          const foundJob = jobs.find(
            (job: {
              job_title: string;
              job_description: string;
              location: string;
              experience: number;
              _id: string;
              createdAt: Date;
              updatedAt: Date;
            }) => job._id === id
          );
          setJob(foundJob);
        })
        .catch((error) => console.error('Error fetching job:', error));
    }
  }, [id]);

  if (!job) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <ImSpinner8 size={30} className="animate-spin" />
      </div>
    );
  }

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="relative bg-[#161616] h-screen">
        <Image
          src={heroBgImg}
          alt="people"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start p-8">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-1 1200px:w-1/2">
              <h3 className="text-white/50 text-sm ">
                Be a part of something bigger – <br /> your journey to success
                starts here.
              </h3>
              <div
                onClick={handleScroll}
                className=" border border-white flex items-center justify-center cursor-pointer"
              >
                <IoArrowDownOutline
                  size={40}
                  color="#fff"
                  className="hover:animate-bounce transition-all duration-700 ease-in-out p-2"
                />
              </div>
            </div>
            <h1 className="text-white text-start text-[3rem] md:text-[5rem] font-bold leading-tight">
              Elevate Your Career
              <br className="hidden lg:block" /> Path With Us
            </h1>
            <Link
              href={'/Contact-us'}
              className="flex items-center gap-2 flex-wrap hover:bg-[#7471E6] hover:scale-110 transition-all duration-700 ease-in-out"
            >
              <p className="p-4 bg-[#7471E6] text-white flex items-center gap-2">
                Let&apos;s Connect
              </p>
              <div className="p-4 bg-[#7471E6] flex items-center justify-center">
                <MdOutlineArrowOutward size={25} color="#fff" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-[5%]">
        <h1 className="font-bold text-2xl md:text-4xl pt-12 mb-2">
          Available Vacancy
        </h1>
        <p className="text-base text-[#ACACAC]">
          Join Our Team and Explore Exciting Opportunities to Shape Your Future.
        </p>
      </div>
      <div className="px-[5%] mt-12">
        {/* <AboutCompany /> */}
        <JobDescription job={job} />
      </div>

      <div className="px-[5%] mt-8">
        <JobApplication />
      </div>
    </>
  );
};
export default Page;
