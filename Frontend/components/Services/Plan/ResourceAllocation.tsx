import { IoMdInformationCircle } from 'react-icons/io';

const ResourceAllocation = () => {
  return (
    <div className="w-full">
      <h3 className="border-b-2 border-[#4F4F4F] p-[5%] flex justify-between gap-8 items-center font-semibold text-xl">
        Resource Allocation <IoMdInformationCircle size={34} />
      </h3>
      <div className="flex justify-evenly gap-8 flex-col md:flex-row mt-8">
        <div
          style={{
            backgroundImage:
              'conic-gradient(#0077FF 0deg, #0077FF 170deg, #051EFF 170deg, #051EFF 270deg, #63ABFD 270deg)',
          }}
          className="size-[200px] rounded-full flex items-center justify-center"
        >
          <div className="absolute size-[100px] bg-black rounded-full"></div>
        </div>
        <div className="space-y-2">
          <p className="flex items-center gap-4 text-xs">
            <span className="min-w-12 h-2 bg-[#0077FF]"></span>
            Designer
          </p>
          <p className="flex items-center gap-4 text-xs">
            <span className="min-w-12 h-2 bg-[#051EFF]"></span>
            Development
          </p>
          <p className="flex items-center gap-4 text-xs">
            <span className="min-w-12 h-2 bg-[#63ABFD]"></span>
            Testing
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResourceAllocation;
