import Image from 'next/image';
import Link from 'next/link';

const ProjectDetials = ({
  description,
  projectLogo,
  projectLink,
  projectName,
  deliverables,
}: {
  description: string;
  projectLogo: any;
  projectLink: string;
  projectName: string;
  deliverables: string;
}) => {
  return (
    <section className="about-us-bg p-[5%] flex gap-12 flex-col md:flex-row">
      <p className="text-lg font-medium  w-full md:w-1/2">{description}</p>
      <div className="bg-[#282730] px-12 py-4 w-full md:w-[45%]">
        <div className="w-20 md:w-32 h-12 md:h-24 flex items-end">
          <Image src={projectLogo} alt="logo" className="w-auto h-auto" />
        </div>
        <div className="ml-24 md:ml-32 ">
          <h6 className="font-semibold text-xl mb-1">Project Name</h6>
          <p className="text-base mb-4">{projectName}</p>
          <h6 className="font-semibold text-xl mb-1">Deliverables</h6>
          <p className="text-base mb-4">{deliverables || 'Website'} </p>
          {/* <h6 className="font-semibold text-xl mb-1">Live Website</h6>
          <Link
            href={projectLink}
            target="_blank"
            className="relative text-base mb-4 border-b-[1.5px] border-white hover:border-[#7471E6] pr-1 w-fit hover:text-[#7471E6]"
          >
            Website{' '}
            <span className="absolute -right-1 -bottom-[10.9px]">&gt;</span>
          </Link> */}
        </div>
      </div>
    </section>
  );
};
export default ProjectDetials;
