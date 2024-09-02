import React from 'react';
import Hero from '@/components/Services/Testing/Hero';
import TestingSection from '@/components/Services/Testing/TestingSection';
import PerfomanceMetrics from '@/components/Services/Testing/PerfomanceMetrics';

import RecycleEffect from '@/components/Services/Plan/RecycleEffect';
import GetInTouch from '@/components/AboutUs/GetInTouch';

function page() {
  return (
    <div>
      <Hero />
      <TestingSection />
      <RecycleEffect
        centerHeading="Testing </br> Check List"
        heading1="Functionality Testing"
        heading2="Usability Testing"
        heading3="Security Testing"
        des1="Functionality testing is a type of testing that ensures that a software application operates in conformance with the required functionality"
        des2="Usability testing evaluates a product by testing it with real users to understand how easily they can learn and use it, and to identify any issues they encounter during interaction.
"
        des3="Security testing is a process designed to uncover vulnerabilities in a system and ensure that data and resources are protected from potential intruders."
      />
      <PerfomanceMetrics />
      <GetInTouch />
    </div>
  );
}

export default page;
