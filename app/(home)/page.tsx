import ChooseUs from '@/components/home/ChooseUs';
import Hero from '@/components/home/Hero';
import { ScrollView } from '@/components/home/ScrollView';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import StatsAndPartners from '@/components/home/Stats';
import WhoWeAre from '@/components/home/WhoWeAre';
import { TracingBeam } from '@/components/ui/tracingbeam';
import { users } from '@/data/data';
import React from 'react';
import Portfolio from '@/components/home/Portfolio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "DevEntia Tech Pvt. Ltd | Web Development, App Development, and AI Services",
  description: "Welcome to DevEntia Tech Pvt. Ltd, your leading partner in web development, app development, and AI solutions. Discover how our innovative technology can transform your business.",
  openGraph: {
    title: "DevEntia Tech Pvt. Ltd | Web Development, App Development, and AI Services",
    description: "Welcome to DevEntia Tech Pvt. Ltd, your leading partner in web development, app development, and AI solutions. Discover how our innovative technology can transform your business.",
    siteName: "DevEntia Tech Pvt. Ltd",
    images: [
      {
        url: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417324/home_m9zoc7.jpg", 
        width: 1200,
        height: 630,
        alt: "Innovative Technology Solutions by DevEntia Tech", 
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <TracingBeam>
        <Hero />
        <Services />
        <ScrollView
          users={users}
          titleComponent={
            <>
              <h1 className="text-xl font-semibold text-white">
                10+ Completed Projects <br />
                <span className="text-3xl md:text-[5rem] font-bold mt-1 leading-none">
                  And Counting ....
                </span>
              </h1>
            </>
          }
        />
        <ChooseUs />
        <StatsAndPartners />
        <WhoWeAre />
        {/* <Testimonial /> */}
        <Portfolio />
      </TracingBeam>
    </>
  );
};

export default page;
