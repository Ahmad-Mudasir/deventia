import { IoMdInformationCircle } from 'react-icons/io';

const DevelopmentTrends = () => {
  return (
    <section className="w-full">
      <h3 className="border-b-2 border-[#4F4F4F] p-[5%] flex justify-between gap-8 items-center font-semibold text-xl">
        Development Trends <IoMdInformationCircle size={34} />
      </h3>
      <div className="flex justify-evenly gap-8 flex-col md:flex-row mt-8">
        <div
          style={{
            backgroundImage:
              'conic-gradient(#051EFF 0deg, #051EFF 120deg, #0077FF 120deg, #0077FF 200deg, #0A11B4 200deg, #0A11B4 300deg, #44CCDE 300deg)',
          }}
          className="size-[200px] rounded-full flex items-center justify-center"
        >
          <div className="absolute size-[100px] bg-black rounded-full"></div>
        </div>
        <div className="space-y-2">
          <p className="flex items-center gap-4 text-xs">
            <span className="min-w-12 h-2 bg-[#051EFF]"></span>
            MERN stack developer
          </p>
          <p className="flex items-center gap-4 text-xs">
            <span className="min-w-12 h-2 bg-[#0077FF]"></span>
            Flutter development
          </p>
          <p className="flex items-center gap-4 text-xs">
            <span className="min-w-12 h-2 bg-[#44CCDE]"></span>
            Machine learning
          </p>
          <p className="flex items-center gap-4 text-xs">
            <span className="min-w-12 h-2 bg-[#0A11B4]"></span>
            Web development
          </p>
        </div>
      </div>
    </section>
  );
};
export default DevelopmentTrends;
