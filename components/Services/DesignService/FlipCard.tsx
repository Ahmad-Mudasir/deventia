import { GoArrowUpRight } from 'react-icons/go';

const FlipCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flip-box">
      <div className="flip-box-inner">
        <div className="flip-box-front flex flex-col p-4 pb-20 border-[1.5px] border-b-4 border-[#8A88EC] max-w-[350px]">
          <GoArrowUpRight size={30} className="ml-auto mr-[80px]" />
          <div className="w-20">{icon}</div>
          <h1 className="text-[var(--primary-color)] font-semibold text-3xl">
            {title}
          </h1>
        </div>
        <div className="flip-box-back rounded pl-4">
          <h1 className="text-2xl font-semibold mt-2 pr-4">{title}</h1>
          <p className="font-normal mt-2 pr-4">{description}</p>
          <div className="w-16 ml-auto -mr-4 mt-auto -mb-4">{icon}</div>
        </div>
      </div>
    </div>
  );
};
export default FlipCard;
