"use client"
import React,{useEffect} from "react";
import { FaCompass, FaLocationDot, FaNewspaper, FaStar } from "react-icons/fa6";
import InfoCard from "./InfoCard";
import { useContext } from "react";
import AppContext from "@/app/context/context";
const JobDescription = ({
  job,
}: {
  job: {
    job_title: string;
    job_description: string;
    location: string;
    experience: string;
    _id: number;
    createdAt: string;
    updatedAt: string;
  };
}) => {
  const createdAt = new Date(job.createdAt);
  const {setJobTitle} = useContext(AppContext)
  useEffect(() => {
    // Set the job title in context when the component mounts
    setJobTitle(job.job_title);
  }, [job.job_title, setJobTitle]);
  return (
    <main className="bg-[#7571e618] p-8 w-full">
      <h1 className="font-bold text-lg md:text-xl">{job.job_title}</h1>
      <p className="text-base text-[#BEBEBE] mt-2 mb-12">
        Posted by Admin on <span>{createdAt.toDateString()}</span>
      </p>
      <div className="flex gap-8 flex-wrap">
        <InfoCard
          icon={FaCompass}
          title={job.experience + " Years"}
          subtitle="Experience"
          bgColor="#8653C7"
          iconColor="white"
        />
        <InfoCard
          icon={FaLocationDot}
          title={job.location}
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
