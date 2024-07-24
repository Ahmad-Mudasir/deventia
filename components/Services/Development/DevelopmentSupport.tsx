import React from "react";
import developmentSupportimg from "../../../assets/images/DevelopmentSupport.jpg";
import Image from "next/image";
import { IoIosCheckboxOutline } from "react-icons/io";
function DevelopmentSupport() {
  return (
    <div className="grid grid-cols-12 h-[480px] w-auto px-16 py-4">
      <div className="p-5 col-span-6">
        <Image
          src={developmentSupportimg}
          alt="banner"
          className="object-cover h-[400px] w-full"
        />
      </div>
      <div className="col-span-6 h-full pl-16 flex flex-col gap-6">
        <div className="heading text-4xl my-3 font-bold">
          <h1>Development Support</h1>
        </div>
        <div className="description flex flex-col  justify-center items-center gap-5">
          <div className="grid grid-cols-6">
            <IoIosCheckboxOutline className="h-10 w-10 text-[#8A88EC] col-span-1" />
            <div className="1st col-span-5 flex flex-col gap-4">
              <h1 className="text-xl font-bold">24/7 Assistance</h1>
              <p className="text-sm leading-8">
                Round-the-clock support ensures that assistance is available
                24/7 to address any development issues immediately, minimizing
                downtime and enhancing productivity.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <IoIosCheckboxOutline className="h-10 w-10 text-[#8A88EC] col-span-1" />
            <div className="1st col-span-5 flex flex-col gap-4">
              <h1 className="text-xl font-bold">Code Reviews</h1>
              <p className="text-sm leading-8">
                Detailed code reviews ensure that code is thoroughly examined
                for performance optimizations, best practices, and potential
                issues before deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentSupport;
