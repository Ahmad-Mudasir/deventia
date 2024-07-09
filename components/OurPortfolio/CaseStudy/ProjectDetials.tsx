import Image from 'next/image';
import Link from 'next/link';

const ProjectDetials = ({
  projectLogo,
  projectLink,
}: {
  projectLogo: any;
  projectLink: string;
}) => {
  return (
    <section className="about-us-bg p-[5%] flex gap-12 flex-col md:flex-row">
      <p className="text-lg font-medium  w-full md:w-1/2">
        In the heart of the Austrian Alps, where the whispers of history echo
        through the mountain peaks, AlpineEdge finds its roots. For centuries,
        these rugged landscapes have been a crucible of human endeavor, shaping
        the spirit of those who call this region home. From the ancient tales of
        mountaineers braving the elements to the timeless traditions passed down
        through generations, the alpine Alps have always been a source of
        inspiration and resilience.
      </p>
      <div className="bg-[#282730] px-12 py-4 w-full md:w-[45%]">
        <div className="w-20 md:w-32 h-12 md:h-24 flex items-end">
          <Image src={projectLogo} alt="logo" className="w-auto h-auto" />
        </div>
        <div className="ml-24 md:ml-32 ">
          <h6 className="font-semibold text-xl mb-1">Client</h6>
          <p className="text-base mb-4">Henry klassen</p>
          <h6 className="font-semibold text-xl mb-1">Deliverables</h6>
          <p className="text-base mb-4">Website</p>
          <h6 className="font-semibold text-xl mb-1">Live Website</h6>
          <Link
            href={projectLink}
            target="_blank"
            className="relative text-base mb-4 border-b-[1.5px] border-white hover:border-[#7471E6] pr-1 w-fit hover:text-[#7471E6]"
          >
            Website{' '}
            <span className="absolute -right-1 -bottom-[10.9px]">&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ProjectDetials;
