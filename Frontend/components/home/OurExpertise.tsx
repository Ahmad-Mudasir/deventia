import React from "react";
import GlowingText from "./Why-chose-deventia/GlowingText";
import { processSteps } from "@/data/data";

const OurExpertise: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] py-5">
      {/* Header Section */}
      <GlowingText
        glowingTitle="ENHANCE EFFICIENCY, OPEN DOORS WITH OUR EXPERTISE"
        title="Enhance efficiency, open doors with our Expertise ?"
      />

      <div className="container mx-auto w-[90%] py-3 px-3">
        {/* Introduction Paragraph */}
        <div className="mb-5">
          <p className="text-[7px] md:text-[10px] lg:text-[14px]">
            We’re a team of strategic software developers working globally with
            the largest brands. We believe that progress only happens when you
            refuse to play it safe. We combine ideas, behaviors, and insights
            with design, technology, and data to produce brand experiences that
            customers love.
          </p>
        </div>

        {/* Process Steps Section */}
        <div className="relative">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative mb-16 md:w-[65vw] lg:w-[90%] w-full ${
                index % 2 === 1 ? "md:ml-32" : ""
              }`}
            >
              {/* Step Box */}
              <div className="flex flex-col md:flex-row w-full md:w-[65vw] lg:w-[100%] border border-[#4848FF] group">
                {/* Step Number */}
                <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-[#000052] p-4 md:p-8 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-white group-hover:text-[#4848FF] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex-1 p-4 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 group-hover:text-[#4848FF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Lines */}
              {index < processSteps.length - 1 && (
                <div
                  className={`absolute bottom-0 ${
                    index % 2 === 0 ? "left-8" : "right-8"
                  } transform translate-y-full`}
                >
                  <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-0 w-px h-16 md:h-24 bg-[#4848FF]"></div>
                    {/* Horizontal Line */}
                    <div
                      className={`hidden md:flex absolute top-24 ${
                        index % 2 === 0 ? "left-0 w-24" : "right-0 w-24"
                      } h-px bg-[#4848FF]`}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
