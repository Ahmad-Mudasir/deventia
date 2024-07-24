import Image from 'next/image';
import React from 'react';
import curve from '../../../assets/images/curve.png';

const RecycleEffect = ({
  centerHeading,
  heading1,
  heading2,
  heading3,
  des1,
  des2,
  des3,
}: {
  centerHeading: string;
  heading1: string;
  heading2: string;
  heading3: string;
  des1: string;
  des2: string;
  des3: string;
}) => {
  return (
    <section className="p-[5%]">
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="my-auto mt-12">
          <h2 className="font-medium text-2xl lg:text-4xl mb-2">{heading1}</h2>
          <p className="relative font-medium text-base border-t-2 ">
            {des1}
            <span className="absolute hidden lg:inline-block border-t-2 border-dashed w-20 top-[26px] rotate-45 -right-[66px]"></span>
          </p>
        </div>
        <div className="!grow-0 w-full h-full max-w-fit size-[300px] bg-[#070707] rounded-full relative">
          <h1
            className="absolute top-[40%] w-full uppercase font-medium text-2xl lg:text-4xl text-center whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: centerHeading }}
          />
          <Image src={curve} alt="curve" className="w-auto h-auto" />
        </div>
        <div>
          <h2 className="font-medium text-2xl lg:text-4xl mb-2">{heading2}</h2>
          <p className="relative font-medium text-base border-t-2 ">
            {des2}
            <span className="absolute hidden lg:inline-block border-t-2 border-dashed w-20 top-[26px] -rotate-45 -left-[66px]"></span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-end w-full md:max-w-md ml-auto mr-0 mt-8 md:mt-0">
        <h2 className="font-medium text-2xl lg:text-4xl mb-2">{heading3}</h2>
        <p className="relative font-medium text-base border-t-2 ">
          {des3}
          <span className="absolute hidden lg:inline-block border-t-2 border-dashed w-20 -top-[29px] rotate-[222deg] -left-[69px]"></span>
        </p>
      </div>
    </section>
  );
};

export default RecycleEffect;
