import AboutUs from '@/components/AboutUs/AboutUs';
import GetInTouch from '@/components/AboutUs/GetInTouch';
import Hero from '@/components/AboutUs/Hero';
import MeetOurCoFounder from '@/components/AboutUs/MeetOurCoFounder';
import MeetOurTeam from '@/components/AboutUs/MeetOurTeam';
import OurCoreValues from '@/components/AboutUs/OurCoreValues';
import OurMissionAndVission from '@/components/AboutUs/OurMissionAndVission';

const page = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurCoreValues />
      <MeetOurCoFounder />
      <MeetOurTeam />
      <OurMissionAndVission />
      <GetInTouch />
    </>
  );
};
export default page;
