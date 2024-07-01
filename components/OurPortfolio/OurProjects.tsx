import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

const OurProjects = ({
  flexReverse,
  img,
  description,
  projectURL,
  projectName,
}: {
  flexReverse: boolean;
  img: any;
  description: string;
  projectURL: string;
  projectName: string;
}) => {
  return (
    <div
      className={`flex flex-col ${
        flexReverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-12 mt-20 items-center px-[5%]`}
    >
      <Image src={img} alt="alpine edge" className="w-full md:w-[48%] h-3/4" />
      <div>
        <h3 className="bg-[#7571e694] uppercase px-4 py-3 font-bold rounded-md w-fit">
          Case study
        </h3>
        <h1 className="font-bold text-xl md:text-3xl my-4">{projectName}</h1>
        <p className="text-base">{description}</p>
        <Link
          href={projectURL}
          target="_blank"
          className="border-2 border-[#7571e694] text-[#7571e694] hover:text-white hover:bg-[#7571e6d3] px-4 py-3 uppercase flex items-center gap-2 mt-12 font-bold w-fit transition-all ease-in-out duration-700"
        >
          View work
          <IoIosArrowForward size={22} />
        </Link>
      </div>
    </div>
  );
};
export default OurProjects;
