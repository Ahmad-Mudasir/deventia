import React from 'react';

const OurDesignProcess = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactElement;
}) => {
  return (
    <div className="text-[#EBEBEB] bg-[#141414] border-2 border-[#ADA0FF] px-6 py-10 min-w-[220px]">
      <h2 className="font-semibold text-xl mb-4">{title}</h2>
      {content}
    </div>
  );
};
export default OurDesignProcess;
