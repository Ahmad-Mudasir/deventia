import Image from 'next/image';

const DesktopVersion = ({
  projectLogo,
  projectImg,
}: {
  projectLogo: any;
  projectImg: any;
}) => {
  return (
    <section className="p-[5%]">
      <Image src={projectLogo} alt="logo" className="w-32 h-24" />
      <h1 className="font-semibold text-2xl lg:text-5xl mb-12">
        <span className="bg-gradient-to-tr from-[#0DBEFB] via-[#9DC6F2] to-[#74A2D1]  pb-0.5">
          <span className="bg-[#141414]">Des</span>
        </span>
        ktop Version
      </h1>

      <Image
        src={projectImg}
        alt="website image"
        className="w-auto h-auto mx-auto"
      />
    </section>
  );
};
export default DesktopVersion;
