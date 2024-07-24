import GetInTouch from '@/components/AboutUs/GetInTouch';
import BrainStorming from '@/components/Services/Plan/BrainStorming';
import ChartingCourse from '@/components/Services/Plan/ChartingCourse';
import DevelopmentTrends from '@/components/Services/Plan/DevelopmentTrends';
import Hero from '@/components/Services/Plan/Hero';
import RecycleEffect from '@/components/Services/Plan/RecycleEffect';
import ResourceAllocation from '@/components/Services/Plan/ResourceAllocation';

const Page = () => {
  return (
    <>
      <Hero />
      <BrainStorming />
      <RecycleEffect
        centerHeading="Start </br> Project"
        heading1="UI/UX Designer"
        heading2="MERN Stack Developer"
        heading3="QA Testing"
        des1="A UI/UX Designer creates visually appealing and user-friendly interfaces for digital products, ensuring seamless user experiences."
        des2="A MERN Stack Developer builds full-stack web applications using MongoDB, Express.js, React, and Node.js."
        des3="QA Testing ensures software quality by identifying and fixing bugs and issues through systematic testing processes."
      />
      <ChartingCourse />
      <section className="p-[5%] bg-[#080809]">
        <h1 className="text-2xl lg:text-4xl font-medium w-full mb-2">
          Agile Strategy
        </h1>
        <h2 className="text-xl lg:text-2xl font-medium mb-8">
          Adapt & Succeed
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <DevelopmentTrends />
          <ResourceAllocation />
        </div>
      </section>
      <GetInTouch />
    </>
  );
};
export default Page;
