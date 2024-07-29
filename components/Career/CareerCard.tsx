'use client';

import Link from 'next/link';

const CareerCard = ({
  title,
  description,
  jobType,
  location,
  key,
  jobId,
}: {
  title: string;
  description: string;
  jobType: string;
  location: string;
  key: number;
  jobId: number;
}) => {
  return (
    <div
      key={key}
      className="border-[1px] border-[#5357689d] p-8 bg-gradient-to-b from-[rgba(117,113,230,0.21)] to-[rgba(65,63,128,0.21)] "
    >
      <h2 className="font-bold text-2xl md:text-3xl mb-4">{title}</h2>
      <p className="text-base text-[#C0C0C0] border-b-[1.5px] border-dashed border-[#c0c0c07c] pb-8">
        {description}
      </p>
      <div className="flex flex-wrap gap-4 items-center mt-6">
        <h3 className="font-bold text-xl md:text-2xl">{jobType}</h3>
        <p className="text-base text-[#A7A7A7] mr-auto">{location}</p>
        <Link
          href={`/Careers/${jobId}`}
          className="bg-[#7471E6] border-2 border-[#7471E6] hover:bg-transparent text-white hover:text-[#7471E6] px-4 py-2 text-base font-semibold transition-all ease-in-out duration-700"
        >
          Detials
        </Link>
      </div>
    </div>
  );
};
export default CareerCard;
