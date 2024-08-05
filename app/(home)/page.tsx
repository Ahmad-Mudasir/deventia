import ChooseUs from '@/components/home/ChooseUs';
import Hero from '@/components/home/Hero';
import { ScrollView } from '@/components/home/ScrollView';
import Services from '@/components/home/Services';
// import Testimonial from '@/components/home/Testimonial';
import StatsAndPartners from '@/components/home/Stats';
import WhoWeAre from '@/components/home/WhoWeAre';
import { TracingBeam } from '@/components/ui/tracingbeam';
import { users } from '@/data/data';
import React from 'react';
import Portfolio from '@/components/home/Portfolio';
import { Metadata } from 'next';
import GetInTouch from '@/components/AboutUs/GetInTouch';

export const metadata: Metadata = {
  title: 'DevEntia Tech Pvt. Ltd',
  description:
    'Welcome to DevEntia Tech Pvt. Ltd, your leading partner in web development, app development, and AI solutions. Discover how our innovative technology can transform your business.',
  openGraph: {
    title: 'DevEntia Tech Pvt. ',
    description:
      'Welcome to DevEntia Tech Pvt. Ltd, your leading partner in web development, app development, and AI solutions. Discover how our innovative technology can transform your business.',
    siteName: 'DevEntia Tech Pvt. Ltd',
    images: [
      {
        url: 'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722603971/home-hero_zyqkwj.png',
        width: 1200,
        height: 630,
        alt: 'Innovative Technology Solutions by DevEntia Tech',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return (
    <>
      <TracingBeam>
        <Hero />
        <WhoWeAre />
        <Services />
        <ChooseUs />
        <StatsAndPartners />
        <ScrollView
          users={users}
          titleComponent={
            <>
              <h3
                className={`text-[2rem] text-white z-10 font-[200]
        `}
              >
                Portfolio{' '}
              </h3>
              <h1 className="text-xl font-semibold text-white">
                30+ Completed Projects <br />
                <span className="text-3xl md:text-[5rem] font-bold mt-1 leading-none">
                  And Counting ....
                </span>
              </h1>
            </>
          }
        />
        {/* <Testimonial /> */}
        {/* <Portfolio /> */}
        <GetInTouch />
      </TracingBeam>
    </>
  );
};

export default page;
