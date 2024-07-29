import React from 'react';
import { FaCompass, FaLocationDot, FaNewspaper, FaStar } from 'react-icons/fa6';
import InfoCard from './InfoCard';

const JobDescription = ({
  job,
}: {
  job: {
    job_title: string;
    job_description: string;
    location: string;
    experience: number;
    _id: number;
    createdAt: Date;
    updatedAt: Date;
  };
}) => {
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
      <p className="text-sm text-[#535768] mt-4">{job.job_description}</p>
    </main>
  );
};
export default JobDescription;
