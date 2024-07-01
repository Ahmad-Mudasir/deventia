import { FaLocationDot, FaStar, FaUser } from 'react-icons/fa6';
import InfoCard from './InfoCard';

const AboutCompany = () => {
  return (
    <aside className="bg-[#7571e618] p-8 w-fit col-span-1">
      <h1 className="font-bold text-lg md:text-xl">Highspeed Studios</h1>
      <p className="text-base text-[#BEBEBE] mt-2 mb-12">
        Creative Design Agency
      </p>
      <div className="flex gap-8 flex-wrap">
        <InfoCard
          icon={FaUser}
          title="0 &mdash; 50"
          subtitle="Employee"
          bgColor="#8743DF"
          iconColor="white"
        />
        <InfoCard
          icon={FaStar}
          title="4.5"
          subtitle="Reviews"
          bgColor="#FFBE17"
          iconColor="white"
        />
        <InfoCard
          icon={FaLocationDot}
          title="London, England"
          subtitle="Location"
          bgColor="#ECECEC"
          iconColor="#808080"
        />
      </div>
      <hr className="border-none h-[1.5px] bg-[#EBEBEB] my-8" />
      <h2 className="font-bold text-base">About Company</h2>
      <p className="text-sm text-[#535768] mt-4">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat{' '}
      </p>
    </aside>
  );
};
export default AboutCompany;
