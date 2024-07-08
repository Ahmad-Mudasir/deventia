import React from 'react';

const OurDesignProcess = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactElement;
}) => {
  return (
    <div className="min-w-[220px] w-full h-full scissor-effect">
      <div className="w-full h-full text-[#EBEBEB] bg-[#141414] border-2 border-[#ADA0FF] px-6 py-10">
        <h2 className="font-semibold text-xl mb-4">{title}</h2>
        <div className="w-full h-full">{content}</div>
      </div>
    </div>
  );
};
export default OurDesignProcess;
