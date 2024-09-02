import { TfiPencilAlt } from 'react-icons/tfi';
import FlipCard from '../DesignService/FlipCard';
import { IoIosBulb } from 'react-icons/io';
import { RiFilePaper2Line } from 'react-icons/ri';

const ChartingCourse = () => {
  return (
    <section className="p-[5%]">
      <h1 className="text-2xl lg:text-4xl font-medium w-full mb-2">
        Charting a Course
      </h1>
      <h2 className="text-xl lg:text-2xl font-medium mb-8">Setting Goals</h2>
      <div className=" flex gap-8 flex-col md:flex-row justify-center">
        <div className="max-w-[280px]">
          <FlipCard
            title="Strategy Planning"
            icon={
              <TfiPencilAlt size={50} className="text-[#8A88EC] mb-3 mt-1" />
            }
            description="We customize our strategies to align with your unique vision, ensuring a perfect fit for your brand's identity."
          />
          <h6 className="text-xl mt-2">Vision Workshop</h6>
          <h5 className="text-xl font-medium">Create a roadmap for success.</h5>
        </div>
        <div className="max-w-[280px]">
          <FlipCard
            title="Goal Setting"
            icon={<IoIosBulb size={50} className="text-[#8A88EC] mb-3 mt-1" />}
            description="Our personalized plans are tailored to your unique aspirations, ensuring a perfect alignment with your vision for success."
          />
          <h6 className="text-xl mt-2">Objective Alignment</h6>
          <h5 className="text-xl font-medium text-wrap">
            Align team objectives with organizational goals.
          </h5>
        </div>

        <div className="max-w-[280px]">
          <FlipCard
            icon={
              <RiFilePaper2Line
                size={50}
                className="text-[#8A88EC] mb-3 mt-1"
              />
            }
            title="Execution Plan"
            description="We customize our designs to align perfectly with your brand identity, ensuring they meet your unique needs and vision"
          />
          <h6 className="text-xl mt-2">Actionable Strategies</h6>
          <h5 className="text-xl font-medium">Implement plans effectively.</h5>
        </div>
      </div>
    </section>
  );
};
export default ChartingCourse;
