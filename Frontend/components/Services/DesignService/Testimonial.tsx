import Image from 'next/image';

const Testimonial = ({
  description,
  img,
}: {
  description: string;
  img: any;
}) => {
  return (
    <div className="border-2 border-[#ADA0FF] px-6 py-4 rounded hover:-translate-y-5 duration-500 ease-linear">
      <div className="rounded-full bg-[#7471E6] flex justify-center items-center size-[68px]">
        <Image
          src={img}
          alt="client avatar"
          className="size-[65px] rounded-full object-cover bg-center"
        />
      </div>
      <p className="opacity-70 text-base pt-8 pb-12">{description}</p>
    </div>
  );
};
export default Testimonial;
