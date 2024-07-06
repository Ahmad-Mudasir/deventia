import Image from 'next/image';
import isaDesktop1 from '../../../assets/images/isa-desktop1.png';

const AboutProject = ({
  aboutProject,
  projectImg,
}: {
  aboutProject: string;
  projectImg: any;
}) => {
  return (
    <section className=" bg-gradient-to-b from-[#6460ce0a] to-[#2424260f] px-[5%]">
      <h1 className="font-semibold text-2xl lg:text-5xl">
        <span className="bg-gradient-to-tr from-[#0DBEFB] via-[#9DC6F2] to-[#74A2D1]  pb-0.5">
          <span className="bg-[#141414]">Abo</span>
        </span>
        ut
      </h1>

      <div className="flex gap-4 flex-col md:flex-row">
        <p className="font-medium text-lg mt6 md:mt-16">{aboutProject}</p>
        <Image
          src={projectImg}
          alt="website image"
          className="w-full md:w-[50%] h-auto:"
        />
      </div>
    </section>
  );
};
export default AboutProject;
