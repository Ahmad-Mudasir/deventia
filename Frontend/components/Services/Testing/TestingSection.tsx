'use client';

import React from "react";
import Image from "next/image";
import testinsection from "../../../assets/images/TestingSection.jpg";
function TestingSection() {
  return (
    <div className="flex flex-col  px-5 md:px-10 lg:px-15 lg:py-4 md:py-4 mt-3 md:flex-row gap-2">
      <div className="h-full flex flex-col lg:w-3/4 md:gap-4 lg:gap-6 md:pr-10 lg:pr-24 lg:p-10 gap-3">
        <div className="heading  text-2xl md:text-xl lg:md:text-[40px] font-bold">
          <h1>Testing Section</h1>
        </div>
        <div className="description flex flex-col justify-center items-center lg:gap-5 md:gap-5 gap-3">
          <div className="container md:text-sm text-xs lg:text-base">
            Testing experts is dedicated to providing tailored services designed
            to meet your unique business needs. From functional and performance
            testing to security and usability testing, we offer a comprehensive
            suite of solutions to help you thrive in today&apos;s competitive
            landscape.
          </div>
          <div className="container md:text-sm text-xs lg:text-base">
            With years of industry experience and a commitment to excellence,
            our experts are equipped to tackle any challenge and deliver results
            that exceed expectations. Tailored solutions designed to meet your
            unique business needs, with expertise across functional,
            performance, security, and usability testing.
          </div>
        </div>
      </div>
      <div className="md:p-5 lg:p-10 p-2 ">
        <Image
          src={testinsection}
          alt="Landscape picture"
          className="object-cover h-full w-full "
        />
      </div>
    </div>
  );
}

export default TestingSection;
