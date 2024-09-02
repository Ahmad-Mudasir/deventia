import Image from 'next/image';
import Link from 'next/link';
import { FaRegSquareCheck } from 'react-icons/fa6';
import { MdOutlineArrowOutward } from 'react-icons/md';
import designService from '../../../assets/images/design-service.webp';

const ServicesByOurExpertise = () => {
  return (
    <section className="services-bg flex flex-col md:flex-row pr-0 bg-[#ffffff07] mx-[5%]">
      <div className="py-8 px-4 lg:px-12">
        <h1 className="text-2xl lg:text-4xl text-[#ECECEC] font-bold w-full mb-6">
          Services By Our Experts
        </h1>
        <p className="text-lg text-[#fff]/80">
          our team of experts is dedicated to providing tailored services
          designed to meet your unique business needs. From IT consulting to
          software development, web design, and digital marketing, we offer a
          full suite of solutions to help you thrive in today&apos;s competitive
          landscape.
        </p>
        <br />
        <p className="text-lg text-[#fff]/80">
          With years of industry experience and a commitment to excellence, our
          experts are equipped to tackle any challenge and deliver results that
          exceed expectations.
        </p>
        <p className="text-[#E6E6E6] flex gap-2 text-lg mt-6">
          <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
          Tailored solutions designed to meet your unique business needs
        </p>
        <p className="text-[#E6E6E6] flex gap-2 text-lg mt-2">
          <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
          Expertise across IT consulting, software development, web design, and
          digital marketing
        </p>

        <Link
          href={'/Contact-us'}
          className="flex items-center gap-2 flex-wrap hover:bg-[#7471E6] hover:scale-110 transition-all duration-700 ease-in-out w-fit mt-8"
        >
          <p className="p-4 bg-[#7571e68c] text-white flex items-center gap-2">
            Book a call
          </p>
          <div className="p-4 bg-[#7571e68c] flex items-center justify-center">
            <MdOutlineArrowOutward size={25} color="#fff" />
          </div>
        </Link>
      </div>
      <Image
        src={designService}
        alt="design service"
        className="w-full md:w-[40%]"
      />
    </section>
  );
};
export default ServicesByOurExpertise;
