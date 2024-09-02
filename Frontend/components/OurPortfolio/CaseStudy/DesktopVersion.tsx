import Image from 'next/image';

const DesktopVersion = ({
  projectLogo,
  projectImg,
  title,
}: {
  projectLogo: any;
  projectImg: any;
  title: string;
}) => {
  return (
    <section className="p-[5%]">
      <div className="w-20 md:w-32 h-12 md:h-24 flex items-end mb-4 justify-start">
        <Image src={projectLogo} alt="logo" className="w-auto h-auto" />
      </div>
      <h1 className="font-semibold text-2xl lg:text-5xl mb-12">
        <span className="gradient-border">{title?.slice(0, 3)}</span>
        {title?.slice(3, title?.length)}
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
