import Image from 'next/image';
import React from 'react';
import curve from '../../../assets/images/curve.png';

const RecycleEffect = () => {
  return (
    <section className="hidden md:flex justify-center items-center">
      <div className="size-[450px] bg-[#070707] rounded-full relative">
        {' '}
        <Image
          src={curve}
          alt="curve"
          className=" -rotate-[22deg] w-full h-full"
        />{' '}
      </div>
    </section>
  );
};

export default RecycleEffect;
