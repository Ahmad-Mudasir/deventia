import { statsData } from '@/data/data';
import React from 'react';
import ScrollCounter from './Counter';

const StatsAndPartners = () => {
  return (
    <>
      <div className="bg-[#191919] text-white ">
        <div className="w-full h-full bg-gradient-to-b from-[#4848ff] to-[#514f9458] justify-center  flex md:items-center flex-wrap md:justify-around lg:gap-6 gap-4">
          {statsData.map((item, index) => (
            <div
              className="flex flex-col items-center gap-1 p-4 leading-none"
              key={index + 0.05 * 2}
            >
              <ScrollCounter targetValue={item.value} />
              {/* <h1 className="text-[8rem] font-semibold">+{item.value}</h1> */}
              <h3 className="uppercase ml-8  lg:text-[1.5rem]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-full bg-[#191919]">
        <InfiniteMovingCards
          items={partnersData}
          direction="right"
          speed="slow"
        />
      </div> */}
    </>
  );
};

export default StatsAndPartners;
