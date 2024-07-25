import React from "react";
import developmentSupportimg from "../../../assets/images/DevelopmentSupport.jpg";
import Image from "next/image";
import { FaRegSquareCheck } from "react-icons/fa6";
function DevelopmentSupport() {
  return (
    <section className="flex gap-8 flex-col md:flex-row p-[5%]">
      <Image
        src={developmentSupportimg}
        alt="design service"
        className="w-full md:w-[48%]"
      />
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold w-full mb-6">
          Services By Our Experts
        </h1>
        <h2 className="text-xl lg:text-2xl flex gap-2 items-center font-semibold mt-8">
          <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
          24/7 Assistance
        </h2>
        <p className="ml-[30px] text-[#E0E5F3] text-base mt-2 leading-8">
          Round-the-clock support ensures that assistance is available 24/7 to
          address any development issues immediately, minimizing downtime and
          enhancing productivity.
        </p>
        <h2 className="text-xl lg:text-2xl flex gap-2 items-center font-semibold mt-4">
          <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
          Code Reviews
        </h2>
        <p className="ml-[30px] text-[#E0E5F3] text-base mt-2 leading-8">
          Detailed code reviews ensure that code is thoroughly examined for
          performance optimizations, best practices, and potential issues before
          deployment.
        </p>
      </div>
    </section>
  );
}

export default DevelopmentSupport;
