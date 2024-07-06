'use client';

import CareerCard from '@/components/Career/CareerCard';
import CareerFillters from '@/components/Career/CareerFillters';
import Hero from '@/components/Career/Hero';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <>
      <Hero />
      <div className="careers-bg">
        <CareerFillters />
        <motion.section
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.5 } },
          }}
          initial="hidden"
          whileInView="show"
          className="px-[5%] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8"
        >
          <CareerCard
            title="Front End Engineer"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit."
            jobType="Internship"
            location="Manseera, Pakistan"
          />
          <CareerCard
            title="Front End Engineer"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit."
            jobType="Internship"
            location="Manseera, Pakistan"
          />
          <CareerCard
            title="Front End Engineer"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit."
            jobType="Internship"
            location="Manseera, Pakistan"
          />
          <CareerCard
            title="Front End Engineer"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit."
            jobType="Internship"
            location="Manseera, Pakistan"
          />
          <CareerCard
            title="Front End Engineer"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit."
            jobType="Internship"
            location="Manseera, Pakistan"
          />
        </motion.section>
      </div>
    </>
  );
};
export default page;
