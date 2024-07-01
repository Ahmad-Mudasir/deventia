import React from 'react';
import { FaCompass, FaLocationDot, FaNewspaper, FaStar } from 'react-icons/fa6';
import InfoCard from './InfoCard';

const JobDescription = () => {
  return (
    <main className="bg-[#7571e618] p-8 w-fit col-span-1 md:col-span-2">
      <h1 className="font-bold text-lg md:text-xl">Software Engineer</h1>
      <p className="text-base text-[#BEBEBE] mt-2 mb-12">
        Posted by Admin on November 12th, 2020
      </p>
      <div className="flex gap-8 flex-wrap">
        <InfoCard
          icon={FaCompass}
          title="2-3 Years"
          subtitle="Experience"
          bgColor="#8653C7"
          iconColor="white"
        />
        <InfoCard
          icon={FaLocationDot}
          title="London, England"
          subtitle="Location"
          bgColor="#FBA556"
          iconColor="white"
        />
        <InfoCard
          icon={FaNewspaper}
          title="Total Applications received"
          subtitle="150+"
          bgColor="#5666FB"
          iconColor="#fff"
        />
      </div>
      <h2 className="font-bold text-base mt-8">Job Description</h2>
      <p className="text-sm text-[#535768] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat{' '}
      </p>
    </main>
  );
};
export default JobDescription;
