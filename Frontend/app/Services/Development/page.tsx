import React from 'react';
import Hero from '@/components/Services/Development/Hero';
import FullStackDevelopment from '@/components/Services/Development/FullStackDevelopment';
import DevelopmentSupport from '@/components/Services/Development/DevelopmentSupport';
import DevelopmentMatrics from '@/components/Services/Development/DevelopmentMatrics';
import RequestDevelopmentServices from '@/components/Services/Development/RequestDevelopmentServices';
import RecycleEffect from '@/components/Services/Plan/RecycleEffect';

function page() {
  return (
    <div>
      <Hero />
      <FullStackDevelopment />
      <RecycleEffect
        centerHeading="Machine  </br> Learning  </br> Services"
        heading1="Machine Learning Model"
        heading2="Data Analysis"
        heading3="Algorithm Optimization"
        des1="An algorithm trained on data to recognize patterns and make predictions or decisions without being explicitly programmed."
        des2="The process of inspecting, cleaning, and modeling data to discover useful information, draw conclusions, and support decision-making."
        des3="Algorithm Optimization involves improving the efficiency and performance of an algorithm to reduce its computational complexity and resource usage."
      />
      <DevelopmentSupport />
      <DevelopmentMatrics />
      <RequestDevelopmentServices />
    </div>
  );
}

export default page;
