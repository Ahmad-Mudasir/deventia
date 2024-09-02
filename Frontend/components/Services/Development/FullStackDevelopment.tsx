import React from 'react';
import fullStackimg from '../../../assets/images/FullStackDevelopment.jpg';
import Image from 'next/image';

function FullStackDevelopment() {
  return (
    <div className="flex lg:flex-row lg:h-full lg:px-20 lg:py-4 md:flex-row md:h-full md:px-10 md:py-2 mt-4 px-5 py-1 flex-col">
      <div className="lg:w-3/4 lg:h-full lg:pr-24 md:flex-row md:w-1/2 lg:flex-col lg:gap-6 md:gap-6 md:pr-5 mb-3">
        <div className="heading lg:text-[40px] mb-3 font-bold">
          <h1>Welcome to Full </h1> <h1>Stack Development</h1>
        </div>
        <div className="description flex flex-col justify-center items-center lg:gap-5 md:gap-3">
          <div className="container1 lg:text-md md:text-sm text-xs">
            Our team of full-stack development experts is dedicated to providing
            tailored services designed to meet your unique business needs. From
            backend and frontend development to database management and API
            integration, we offer a comprehensive suite of solutions to help you
            thrive in today&apos;s competitive landscape.
          </div>
          <div className="container2 lg:text-md md:text-sm text-xs">
            MERN stack development refers to using four key technologies for
            building web applications: MongoDB (a NoSQL database), Express.js (a
            backend web framework), React (a frontend library for building user
            interfaces), and Node.js (a runtime environment for executing
            JavaScript code outside the browser). It&apos;s quite popular for
            its flexibility and efficiency in developing full-stack applications
          </div>
        </div>
      </div>
      <div className="lg:p-5 lg:w-1/2 md:w-1/2">
        <Image
          src={fullStackimg}
          alt="Landscape picture"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default FullStackDevelopment;
