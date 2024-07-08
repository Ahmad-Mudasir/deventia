import Hero from '@/components/Services/DesignService/Hero';
import OurDesignProcess from '@/components/Services/DesignService/OurDesignProcess';
import OurSolutionApproach from '@/components/Services/DesignService/OurSolutionApproach';
import ServicesByOurExpertise from '@/components/Services/DesignService/ServicesByOurExpertise';
import Testimonial from '@/components/Services/DesignService/Testimonial';
import { GiPuzzle, GiStarFlag, GiTribalGear } from 'react-icons/gi';
import { euroStyle } from '@/utils/fonts';
import user from '../../../assets/images/team-Member.webp';
import user2 from '../../../assets/images/mission.webp';
import user3 from '../../../assets/images/coFounder.webp';
import GetInTouch from '@/components/AboutUs/GetInTouch';
import FlipCard from '@/components/Services/DesignService/FlipCard';

const page = () => {
  return (
    <>
      <Hero />
      <div className="p-[5%] flex gap-8 flex-col md:flex-row">
        <h1 className="text-2xl lg:text-4xl font-bold w-full">
          Learn More About Our <br className="hidden lg:block" />
          Design Services
        </h1>
        <p className="text-lg text-[#ACACAC]">
          Unleash your brand&apos;s potential with our tailored design
          solutions. Dive into our portfolio for inspiration and learn how we
          can bring your vision to life. <br /> <br /> Discover how our design
          expertise can elevate your brand. Explore our portfolio and see the
          impact we&apos;ve made for clients like you. Learn more about our
          services and let&apos;s collaborate.
        </p>
      </div>
      <div className="p-[5%] flex gap-8 flex-col md:flex-row justify-center">
        <FlipCard
          title="Tailored Solutions"
          icon={<GiPuzzle size={50} className="text-[#8A88EC] mb-3 mt-1" />}
          description="Your Brand, Your Vision - Our designs are customized to fit your unique needs, ensuring a perfect match for your brand identity."
        />
        <FlipCard
          title="Creative Expertise"
          icon={<GiTribalGear size={50} className="text-[#8A88EC] mb-3 mt-1" />}
          description="Ideas Transformed - With our skilled team, your concepts come to life with captivating visuals and innovative design."
        />
        <FlipCard
          icon={<GiStarFlag size={50} className="text-[#8A88EC] mb-3 mt-1" />}
          title="Client Success"
          description="Real Results - Explore our portfolio for proof of our impact, from heightened brand recognition to increased engagement."
        />
      </div>

      <ServicesByOurExpertise />
      <div className="our-solution-bg">
        <OurSolutionApproach />
        <h1 className="text-2xl lg:text-4xl font-bold w-full mb-6 px-[5%]">
          Our Process Of Designing
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-[5%] gap-4 place-items-center items-stretch z-20">
          <OurDesignProcess
            title="Idea"
            content={
              <>
                <p className="text-sm mb-1">User Flow</p>
                <p className="text-sm mb-1">Card Sorting</p>
                <p className="text-sm mb-1">Information Architecture</p>
              </>
            }
          />
          <OurDesignProcess
            title="Discover"
            content={
              <>
                <p className="text-sm mb-1">User Interviews</p>
                <p className="text-sm mb-1">User Research</p>
                <p className="text-sm mb-1">Competitive Analysis</p>
              </>
            }
          />
          <OurDesignProcess
            title="Define"
            content={
              <>
                <p className="text-sm mb-1">Persona</p>
                <p className="text-sm mb-1">Empathy Map</p>
                <p className="text-sm mb-1">Journey Map</p>
              </>
            }
          />
          <OurDesignProcess
            title="Design"
            content={
              <>
                <p className="text-sm mb-1">Wireframe</p>
                <p className="text-sm mb-1">Visual Design </p>
              </>
            }
          />
          <OurDesignProcess
            title="Test"
            content={
              <>
                <p className="text-sm mb-1">Usability Testing </p>
              </>
            }
          />
        </div>
      </div>
      <div className="p-[5%] bg-[#ffffff0c] services-bg">
        <h5 className="opacity-70 text-xl">Testimonial</h5>
        <h1
          className={`uppercase text-2xl md:text-3xl xl:text-4xl font-normal mt-2 tracking-wider ${euroStyle.className}`}
        >
          What Our Clients Says
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          <Testimonial
            description="Deventia provides businesses with an edge over the competition with various benefits. Opting for outsourced IT services improves business efficiency"
            img={user}
          />
          <Testimonial
            description="Deventia provides businesses with an edge over the competition with various benefits."
            img={user3}
          />
          <Testimonial
            description="Deventia provides businesses with an edge over the competition with various benefits. Opting for outsourced IT services improves business efficiency"
            img={user2}
          />
        </div>
      </div>

      <GetInTouch />
    </>
  );
};
export default page;
