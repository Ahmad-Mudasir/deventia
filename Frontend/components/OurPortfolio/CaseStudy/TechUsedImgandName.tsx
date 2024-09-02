import Image from 'next/image';

const TechUsedImgandName = ({
  techImg,
  techName,
  top,
  left,
  right,
  bottom,
}: {
  techImg: any;
  techName: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
}) => {
  return (
    <div
      style={{ top: top, left: left, right: right, bottom: bottom }}
      className={`flex gap-2 items-center bg-[#282730] px-4 py-2 lg:absolute w-fit`}
    >
      <Image src={techImg} alt={techImg.src} className="size-[40px]" />
      <h5>{techName}</h5>
    </div>
  );
};
export default TechUsedImgandName;
