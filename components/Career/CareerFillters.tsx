'use client';
import { useState } from 'react';
import { FaAngleDown, FaSliders } from 'react-icons/fa6';

const CareerFillters = () => {
  const [arrow, setArrow] = useState(false);
  const handleClick = () => {
    setArrow(!arrow);
  };
  return (
    <section className="px-[5%]">
      <h1 className="font-bold text-2xl md:text-4xl pt-12 mb-2">
        Available Vacancy
      </h1>
      <p className="text-base text-[#ACACAC]">
        Join Our Team and Explore Exciting Opportunities to Shape Your Future.
      </p>
      <div className="flex items-center flex-col md:flex-row justify-between gap-4 my-12">
        <h3 className="mr-auto">Showing 34 Jobs</h3>
        <div className="flex items-center justify-between mr-0 ml-auto gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 border-2 border-[#8A88EC] rounded-sm bg-transparent checked:bg-[#8A88EC]"
            />
            Fulltime
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 border-2 border-[#8A88EC] rounded-sm bg-transparent checked:bg-[#8A88EC]"
            />
            Part time
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 border-2 border-[#8A88EC] rounded-sm bg-transparent checked:bg-[#8A88EC]"
            />
            Internship
          </label>
          <label className="relative">
            <FaAngleDown
              className={`absolute top-4 right-4 text-[#7471E6] ${
                arrow ? 'rotate-180' : ''
              }`}
              size={25}
            />
            <select
              name="vacancy"
              className="appearance-none bg-transparent text-white border-[1.5px] border-[#E6E6E6] outline-none pl-6 pr-16 py-3 w-full"
              onClick={handleClick}
            >
              <option className="bg-black" value="Newest">
                Newest
              </option>
              <option className="bg-black" value="Oldest">
                Oldest
              </option>
            </select>
          </label>
          <button className="appearance-none bg-transparent text-[#7471E6] border-[1.5px] border-[#E6E6E6] outline-none px-4 py-3">
            <FaSliders size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default CareerFillters;
