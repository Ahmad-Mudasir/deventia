import React from 'react';
import fullStackimg from '../../../assets/images/FullStackDevelopment.jpg';
import Image from 'next/image';

function FullStackDevelopment() {
  return (
    <div className="grid grid-cols-12 h-[480px] px-20 py-4">
      <div className="left col-span-7 h-full pr-24 flex flex-col gap-6">
        <div className="heading text-[40px] font-bold">
          <h1>Welcome to Full </h1> <h1>Stack Development</h1>
        </div>
        <div className="description flex flex-col justify-center items-center gap-5">
          <div className="container1 text-md">
            Our team of full-stack development experts is dedicated to providing
            tailored services designed to meet your unique business needs. From
            backend and frontend development to database management and API
            integration, we offer a comprehensive suite of solutions to help you
            thrive in today&apos;s competitive landscape.
          </div>
          <div className="container2 text-md">
            MERN stack development refers to using four key technologies for
            building web applications: MongoDB (a NoSQL database), Express.js (a
            backend web framework), React (a frontend library for building user
            interfaces), and Node.js (a runtime environment for executing
            JavaScript code outside the browser). It&apos;s quite popular for
            its flexibility and efficiency in developing full-stack applications
          </div>
        </div>
      </div>
      <div className="right p-5 col-span-5">
        <Image
          src={fullStackimg}
          alt="Landscape picture"
          className="object-cover h-full w-full"
          //   width={580}
          //   height={480}
        />
      </div>
    </div>
  );
}

export default FullStackDevelopment;
