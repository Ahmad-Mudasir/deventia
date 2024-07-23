import React from "react";

function RequestDevelopmentServices() {
  return (
    <div className="p-16 flex flex-col md:flex-row">
      <div className="left flex flex-col gap-10 w-full">
        <div className="w-full p-0 m-0">
          <h1 className="text-4xl mb-12 font-bold">Request Development Services</h1>
          <ul className="list-disc space-y-3 ml-4">
            <li>Let us handle the deployment of your applications</li>
            <li>Deployment Environment</li>
            <li>Select the environment you want your app deployed to</li>
          </ul>
        </div>
        <div className="flex flex-row items-center gap-5">
          <button className="p-[8px] h-[52px] w-[98px] text-sm bg-[#6765C5]">
            Development
          </button>
          <button className="p-[8px] h-[52px] w-[98px] text-sm bg-[#6765C5]">
            Staging
          </button>
          <button className="p-[8px] h-[52px] w-[98px] text-sm bg-[#6765C5]">
            Production
          </button>
        </div>
      </div>
      <form action="" className="flex flex-col w-full !mt-4 md:!mt-44">
        <input
          type="text"
          placeholder="Application Name"
          className="p-3 bg-black border-none w-full outline-none"
        />
        <input
          type="text"
          placeholder="Email"
          className="p-3 bg-black border-none w-full mt-4 mb-12 outline-none" 
        />
        <div className="flex flex-col items-center md:flex-row">
        <button className="p-3  text-sm bg-[#6765C5] w-full">
          Submit Your Request
        </button>
        <p className="text-[#727171] p-3 w-full">Please provide the exact name of your application</p>
        </div>
      </form>
    </div>
  );
}

export default RequestDevelopmentServices;
