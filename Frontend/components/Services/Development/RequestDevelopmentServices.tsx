import React from "react";

function RequestDevelopmentServices() {
  return (
    <div className="lg:p-16 mg:p-10 p-4 flex flex-col md:flex-col lg:flex-row w-full">
      <div className="left flex flex-col lg:gap-10 md:gap-3 gap-3 w-full lg:pr-4">
        <div className="w-full p-0 m-0">
          <h1 className="lg:text-4xl lg:mb-12 md:text-3xl text-xl font-bold mb-4">Request Development Services</h1>
          <ul className="list-disc space-y-3 ml-4">
            <li className="text-xs lg:text-base md:text-base">Let us handle the deployment of your applications</li>
            <li className="text-xs lg:text-base md:text-base">Deployment Environment</li>
            <li className="text-xs lg:text-base md:text-base">Select the environment you want your app deployed to</li>
          </ul>
        </div>
        <div className="flex flex-row items-center gap-5 justify-between">
          <button className="p-[8px] lg:h-[52px] lg:w-1/3 text-sm w-1/3 bg-[#6765C5]">
            Development
          </button>
          <button className="p-[8px] lg:h-[52px] lg:w-1/3 md:w-1/3 text-sm w-1/3 bg-[#6765C5]">
            Staging
          </button>
          <button className="p-[8px] lg:h-[52px] lg:w-1/3 md:w-1/3 text-sm w-1/3 bg-[#6765C5]">
            Production
          </button>
        </div>
      </div>
      <form action="" className="flex flex-col w-full !mt-4 lg:!mt-56">
        <input
          type="text"
          placeholder="Application Name"
          className="p-3 bg-black border-none w-full outline-none"
        />
        <input
          type="text"
          placeholder="Email"
          className="p-3 bg-black border-none w-full mt-4 lg:mb-12 mb-4 outline-none" 
        />
        <div className="flex flex-col items-center lg:flex-row">
        <button className="p-3  text-sm bg-[#6765C5] w-full">
          Submit Your Request
        </button>
        <p className="text-[#727171] lg:p-3 w-full md:p-2 p-1">Please provide the exact name of your application</p>
        </div>
      </form>
    </div>
  );
}

export default RequestDevelopmentServices;
