'use client';

import React from "react";
import Image from "next/image";
import testinsection from "../../../assets/images/TestingSection.jpg";
function TestingSection() {
  return (
    <div className="flex flex-col justify-evenly px-20 py-4 md:flex-row">
      <div className="h-full flex flex-col w-3/4 gap-6 md:pr-24">
        <div className="heading text-[40px] font-bold">
          <h1>Testing Section</h1>
        </div>
        <div className="description flex flex-col justify-center items-center gap-5">
          <div className="container text-md">
            Testing experts is dedicated to providing tailored services designed
            to meet your unique business needs. From functional and performance
            testing to security and usability testing, we offer a comprehensive
            suite of solutions to help you thrive in today&apos;s competitive
            landscape.
          </div>
          <div className="container text-md">
            With years of industry experience and a commitment to excellence,
            our experts are equipped to tackle any challenge and deliver results
            that exceed expectations. Tailored solutions designed to meet your
            unique business needs, with expertise across functional,
            performance, security, and usability testing.
          </div>
        </div>
      </div>
      <div className="p-5 ">
        <Image
          src={testinsection}
          alt="Landscape picture"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default TestingSection;
