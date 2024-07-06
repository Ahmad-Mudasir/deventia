import Image from 'next/image';
import img from '../../../assets/images/man-and-laptop-avatar.png';
import icon from '../../../assets/images/scss.png';
const TechnologiesUsed = () => {
  return (
    <section className="p-[5%]">
      <h1 className="font-semibold text-2xl lg:text-5xl">
        <span className="bg-gradient-to-tr from-[#0DBEFB] via-[#9DC6F2] to-[#74A2D1]  pb-0.5">
          <span className="bg-[#141414]">Technol</span>
        </span>
        ogy Used
      </h1>

      <div className="relative h-[400px] w-full flex items-center justify-end flex-col">
        <Image src={img} alt={img.src} className="w-[200px] h-auto " />
        <div className="flex gap-2 items-center bg-[#282730] px-4 py-2 absolute bottom-0 left-[20%]">
          <Image src={icon} alt={icon.src} className="size-[40px]" />
          <h5>SCSS</h5>
        </div>
        <div className="flex gap-2 items-center bg-[#282730] px-4 py-2 absolute bottom-[60px] left-[30%]">
          <Image src={icon} alt={icon.src} className="size-[40px]" />
          <h5>SCSS</h5>
        </div>
      </div>
    </section>
  );
};
export default TechnologiesUsed;
