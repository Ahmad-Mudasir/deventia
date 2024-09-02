import Image from 'next/image';
import designService2 from '../../../assets/images/design-service2.webp';
import { FaRegSquareCheck } from 'react-icons/fa6';

const OurSolutionApproach = () => {
  return (
    <section className="flex gap-8 flex-col md:flex-row p-[5%]">
      <Image
        src={designService2}
        alt="design service"
        className="w-full md:w-[48%]"
      />
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold w-full mb-6">
          Services By Our Experts
        </h1>
        <h2 className="text-xl lg:text-2xl flex gap-2 items-center font-semibold mt-8">
          <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
          Research and Discovery:
        </h2>
        <p className="ml-[30px] text-[#E0E5F3] text-base mt-2">
          Uncover client goals, understand the target audience, and analyze
          market trends to inform strategic design decisions.
        </p>
        <h2 className="text-xl lg:text-2xl flex gap-2 items-center font-semibold mt-4">
          <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
          Conceptualization and Ideation:
        </h2>
        <p className="ml-[30px] text-[#E0E5F3] text-base mt-2">
          Generate creative design concepts aligned with client objectives
          through collaborative brainstorming and exploration.
        </p>
        <h2 className="text-xl lg:text-2xl flex gap-2 items-center font-semibold mt-4">
          <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
          Iterative Design Process:
        </h2>
        <p className="ml-[30px] text-[#E0E5F3] text-base mt-2">
          Continuously refine designs based on client feedback to achieve
          optimal results, fostering flexibility and adaptability to meet
          evolving needs.
        </p>
      </div>
    </section>
  );
};
export default OurSolutionApproach;
