import { TfiPencilAlt } from 'react-icons/tfi';
import FlipCard from '../DesignService/FlipCard';
import { IoIosBulb } from 'react-icons/io';
import { RiFilePaper2Line } from 'react-icons/ri';

const ChartingCourse = () => {
  return (
    <section className="p-[5%]">
      <h1 className="text-2xl lg:text-4xl font-medium w-full mb-2">
        Brain Storming
      </h1>
      <h2 className="text-xl lg:text-2xl font-medium mb-8">Setting Goals</h2>
      <div className=" flex gap-8 flex-col md:flex-row justify-center">
        <FlipCard
          title="Strategy Planning"
          icon={<TfiPencilAlt size={50} className="text-[#8A88EC] mb-3 mt-1" />}
          description="We customize our strategies to align with your unique vision, ensuring a perfect fit for your brand's identity."
        />
        <FlipCard
          title="Goal Setting"
          icon={<IoIosBulb size={50} className="text-[#8A88EC] mb-3 mt-1" />}
          description="Our personalized plans are tailored to your unique aspirations, ensuring a perfect alignment with your vision for success."
        />
        <FlipCard
          icon={
            <RiFilePaper2Line size={50} className="text-[#8A88EC] mb-3 mt-1" />
          }
          title="Execution Plan"
          description="We customize our designs to align perfectly with your brand identity, ensuring they meet your unique needs and vision"
        />
      </div>
    </section>
  );
};
export default ChartingCourse;
