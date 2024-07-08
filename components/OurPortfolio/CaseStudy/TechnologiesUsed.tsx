import Image from 'next/image';
import img from '../../../assets/images/man-and-laptop-avatar.png';
import icon from '../../../assets/images/scss.png';
import TechUsedImgandName from './TechUsedImgandName';
const TechnologiesUsed = () => {
  return (
    <section className="our-solution-bg p-[5%]">
      <h1 className="font-semibold text-2xl lg:text-5xl">
        <span className="gradient-border">Technol</span>
        ogy Used
      </h1>
      <div className="flex relative md:h-[400px] w-full md:items-center md:justify-end flex-col gap-4">
        <Image src={img} alt={img.src} className="w-[200px] h-auto " />
        <TechUsedImgandName
          techImg={icon}
          techName="SCSS"
          top=""
          left="20%"
          bottom="0"
          right=""
        />
      </div>
    </section>
  );
};
export default TechnologiesUsed;
