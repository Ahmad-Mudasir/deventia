import { GoArrowUpRight } from 'react-icons/go';
import React from 'react';

const ExpertiseCard = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="p-4 pb-20 border-[1.5px] border-b-4 border-[#8A88EC] max-w-[350px] hover:scale-105 duration-700 transition-all ease-in-out cursor-pointer">
      <GoArrowUpRight size={30} className="ml-auto mr-[80px]" />
      {icon}
      <h1 className="font-bold text-xl md:text-3xl">{title}</h1>
    </div>
  );
};
export default ExpertiseCard;
