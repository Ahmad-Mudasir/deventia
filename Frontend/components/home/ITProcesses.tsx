"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import grayimage from "../../assets/images/black3dpng.png";
import Blueimage from "../../assets/images/blue3d.png";
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const staffAugmentationSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell your requirements",
    description:
      "Share your staffing needs, including the tech stack, team size, and project duration. The more details, the quicker we can find the right candidates for you.",
  },
  {
    number: "02",
    title: "Choose developers",
    description:
      "Review and select from our pre-vetted pool of talented developers who match your technical requirements and team culture.",
  },
  {
    number: "03",
    title: "Onboard remote programmers",
    description:
      "We handle all the onboarding processes to ensure a smooth integration of remote developers into your team.",
  },
  {
    number: "04",
    title: "Manage extended team",
    description:
      "Get complete control over your extended team while we handle administrative tasks and support.",
  },
  {
    number: "05",
    title: "Get your project delivered",
    description:
      "Watch your project come to life with our dedicated developers working as an integral part of your team.",
  },
];

const developmentSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Project Planning",
    description:
      "We analyze your requirements and create a detailed project roadmap with timelines and milestones.",
  },
  {
    number: "02",
    title: "Design Phase",
    description:
      "Our designers create intuitive interfaces and user experiences tailored to your needs.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our expert developers build your solution using the latest technologies and best practices.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Comprehensive testing ensures your product meets the highest quality standards.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "We deploy your solution and provide ongoing support and maintenance.",
  },
];

export default function ITProcess() {
  const [activeProcess, setActiveProcess] = useState<"staff" | "development">(
    "staff"
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextStep = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < currentSteps.length - 1 ? prevIndex + 1 : 0
    );
  };

  const goToPreviousStep = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : currentSteps.length - 1
    );
  };

  const handleRightSectionClick = (index: number) => {
    setActiveIndex(index);
  };

  const currentSteps =
    activeProcess === "staff" ? staffAugmentationSteps : developmentSteps;

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white">
      {/* Top Navigation */}
      <div className="max-w-[1400px] mx-auto px-6 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:items-center border-b border-[#404040] pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#4848FF]">•</span>
            <span className="text-gray-400">
              {activeProcess === "staff" ? "Staff Augmentation" : "Development"}{" "}
              Process Development Process
            </span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveProcess("development")}
              className={`px-4 md:px-6 py-1 text-xs md:py-2 rounded-full transition-colors ${
                activeProcess === "development"
                  ? "bg-[#4848FF]"
                  : "bg-gray-800/50"
              }`}
            >
              Development Process
            </button>
            <button
              onClick={() => setActiveProcess("staff")}
              className={`px-4 md:px-6 py-1 text-xs md:py-2 rounded-full transition-colors ${
                activeProcess === "staff" ? "bg-[#4848FF]" : "bg-gray-800/50"
              }`}
            >
              Staff Augmentation Process
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 pt-7">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-12">
          Our IT{" "}
          {activeProcess === "staff" ? "Staff Augmentation" : "Development"}{" "}
          Process
        </h1>

        <button className="bg-[#4848FF] px-3 py-1 md:px-8 md:py-3 rounded-full flex items-center gap-2 mb-12 hover:bg-[#4848FF]/90 transition-colors">
          Book Consultation
          <TiArrowRight className="w-5 h-5" />
        </button>

        <div className=" border-t border-t-[#404040] flex flex-col lg:flex-row">
          {/* Left Side - Carousel */}
          <div className="relative  w-full md:w-[80%] lg:w-[44%]  h-[310px]">
            <div className="relative h-full">
              <div className="absolute top-0 right-0 text-[90px] font-bold text-[#525252] leading-none">
                {currentSteps[activeIndex].number}.
              </div>
              <div className="pt-28">
                <h2 className="text-lg md:text-2xl lg:text-xl font-bold mb-6">
                  {currentSteps[activeIndex].title}
                </h2>
                <p className="text-[#CCCCCC] text-lg md:text-2xl lg:text-[12px] max-w-2xl">
                  {currentSteps[activeIndex].description}
                </p>
              </div>
              {/* arrow and pagination parrent div */}
              <div className="absolute bottom-0 flex gap-5 items-center">
                {/* Navigation Buttons */}
                <div className="flex  gap-2 mt-0">
                  <button
                    onClick={goToPreviousStep}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
                  >
                    <TiArrowLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNextStep}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
                  >
                    <TiArrowRight className="w-6 h-6" />
                  </button>
                </div>
                {/* Pagination Dots */}
                <div className="flex justify-center  gap-3">
                  {currentSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-[5px] rounded-full transition-all ${
                        activeIndex === index
                          ? "w-[20px] bg-[#1E5CF1]"
                          : "w-[5px] bg-gray-500"
                      } rounded-full`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Placeholder for 3D Steps */}
          <div className=" relative border-t-[1px] lg:border-t-0 lg:border-l-[1px] border-[#404040] mx-auto w-full  md:w-[600px] mt-3 lg:mt-0 p-10 h-[281px]">
            {/* Add 3D visuals or steps here if needed */}
            {currentSteps.map((step, index) => (
              <>
                <div
                  className={` flex  items-center justify-start mb-4
                ${index % 2 !== 0 ? "justify-end " : "justify-start"}
                `}
                  onClick={() => handleRightSectionClick(index)}
                  key={index}
                >
                  {/* text and line parent div */}
                  <div
                    className={`flex justify-center items-center
                   ${index % 2 !== 0 ? "flex-row-reverse" : ""}
                  `}
                  >
                    <div
                      className={`p-1 text-[70%] rounded-lg px-1 transition-all flex  ${
                        activeIndex === index
                          ? "bg-[#4848FF] text-white"
                          : "bg-gray-700 text-[#CCCCCC]"
                      }`}
                    >
                      {step.number}. {step.title}{" "}
                    </div>
                    <div
                      className={`w-24 h-1  border-b-2  border-dotted
                        ${
                          activeIndex === index
                            ? "border-[#4848FF]"
                            : "border-white"
                        }
                    `}
                    ></div>
                  </div>

                  {/*  <div>{step.description}</div> */}
                </div>
                <div className="absolute top-4 flex flex-col justify-center items-center w-[20%] h-5/6 left-[45%] mx-auto ">
                  {[...Array(5)].map((_, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`w-40 h-[40px] rounded-full transition-all cursor-pointer `}
                    >
                      <Image
                        width={50}
                        height={50}
                        sizes="sm"
                        onClick={() => handleRightSectionClick(imgIndex)}
                        src={
                          activeIndex === imgIndex
                            ? Blueimage // Active Image
                            : grayimage // Default Image
                        }
                        alt={`Step ${index + 1} Image ${imgIndex + 1}`}
                        className="w-[141px] h-[49px] object-cover rounded-full"
                      />
                    </div>
                  ))}
                </div>
              </>
            ))}

            {/*  <div className="absolute top-10 w-40 h-5/6 left-[40%] mx-auto bg-red-500">
                   
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
