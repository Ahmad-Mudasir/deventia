import Image from 'next/image';
import { FaRegSquareCheck } from 'react-icons/fa6';
import designService2 from '../../../assets/images/brain-storming.png';

const BrainStorming = () => {
  return (
    <section className="flex gap-8 flex-col md:flex-row-reverse p-[5%]">
      <Image
        src={designService2}
        alt="design service"
        className="w-full md:w-[48%]"
      />
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold w-full mb-6">
          Brain Storming
        </h1>
        <h2 className="text-xl lg:text-2xl flex gap-2 items-center font-semibold mt-8">
          <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
          Idea Generation Techniques
        </h2>
        <p className="ml-[30px] text-[#E0E5F3] text-base mt-2">
          Explore different brainstorming methods like mind mapping, SCAMPER,
          and the Six Thinking Hats technique to boost creativity by generating
          diverse and innovative ideas
        </p>
        <h2 className="text-xl lg:text-2xl flex gap-2 items-center font-semibold mt-4">
          <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
          Collaborative Sessions
        </h2>
        <p className="ml-[30px] text-[#E0E5F3] text-base mt-2">
          Brainstorm with your team to discover fresh perspectives by fostering
          open communication, encouraging diverse viewpoints, and
          collaboratively generating innovative ideas.
        </p>
      </div>
    </section>
  );
};
export default BrainStorming;
