'use client';
import { useState } from 'react';
import { FaAngleDown, FaSliders } from 'react-icons/fa6';

type FilterType = 'fulltime' | 'parttime' | 'internship';

const CareerFillters = ({
  jobLength,
  filters,
  onFilterChange,
  sortBy,
  onSortChange,
}: {
  jobLength: number;
  filters: { fulltime: boolean; parttime: boolean; internship: boolean };
  onFilterChange: (filter: FilterType) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}) => {
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
        <h3 className="mr-auto">Showing {jobLength || 0} Jobs</h3>
        <div className="flex flex-wrap items-center justify-between mr-0 ml-auto gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 border-2 border-[#8A88EC] rounded-sm bg-transparent checked:bg-[#8A88EC]"
              checked={filters.fulltime}
              onChange={() => onFilterChange('fulltime')}
            />
            Fulltime
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 border-2 border-[#8A88EC] rounded-sm bg-transparent checked:bg-[#8A88EC]"
              checked={filters.parttime}
              onChange={() => onFilterChange('parttime')}
            />
            Part time
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 border-2 border-[#8A88EC] rounded-sm bg-transparent checked:bg-[#8A88EC]"
              checked={filters.internship}
              onChange={() => onFilterChange('internship')}
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
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
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
