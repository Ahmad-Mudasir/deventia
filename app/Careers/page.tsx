'use client';

import axiosInstance from '@/lib/axiosInstance';
import CareerCard from '@/components/Career/CareerCard';
import CareerFillters from '@/components/Career/CareerFillters';
import Hero from '@/components/Career/Hero';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';

interface Job {
  _id: number;
  job_title: string;
  job_description: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

const Page = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axiosInstance.get('/job/get');
        setJobs(response.data);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <ImSpinner8 size={30} className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Hero />
      <div className="careers-bg">
        <CareerFillters jobLength={jobs.length} />
        <motion.section
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.5 } },
          }}
          initial="hidden"
          whileInView="show"
          className="px-[5%] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8"
        >
          {jobs.map((job) => (
            <CareerCard
              key={job._id}
              title={job.job_title}
              description={job.job_description}
              jobType="Internship"
              location={job.location}
              jobId={job._id}
            />
          ))}
        </motion.section>
      </div>
    </>
  );
};

export default Page;
