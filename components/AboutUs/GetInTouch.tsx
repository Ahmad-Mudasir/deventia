import Image from 'next/image';
import bgImg from '../../assets/images/getInTouch.webp';
import { euroStyle } from '@/utils/fonts';

const GetInTouch = () => {
  return (
    <section className="relative w-full z-0">
      <Image
        src={bgImg}
        alt="background"
        className="w-full h-full absolute -z-10"
      />
      <form className="p-[5%] z-10 flex gap-8 flex-col md:flex-row">
        <div className="w-full">
          <h1
            className={`font-bold text-3xl md:text-5xl lg:text-9xl tracking-wider ${euroStyle.className}`}
          >
            let’s get <br className="hidden md:block" /> in touch
          </h1>
          <p className="italic">
            <span className="text-[#ffffffd1] not-italic">Disclaimer:</span> we
            talk too much!
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start h-fit">
          <label className="bg-white text-sm text-[#7571e6a2] font-bold flex flex-row p-4 gap-1 w-full col-span-2">
            Name:
            <input
              type="text"
              name="name"
              className="outline-none bg-transparent border-b-2 border-[#7571e6a2] w-full"
            />
          </label>
          <label className="bg-white text-sm text-[#7571e6a2] font-bold flex flex-row p-4 gap-1 w-full col-span-2 md:col-span-1">
            Email:
            <input
              type="email"
              name="email"
              className="outline-none bg-transparent border-b-2 border-[#7571e6a2] w-full"
            />
          </label>
          <label className="bg-white text-sm text-[#7571e6a2] font-bold flex flex-row p-4 gap-1 w-full col-span-2 md:col-span-1">
            Phone:
            <input
              type="tel"
              name="phone"
              className="outline-none bg-transparent border-b-2 border-[#7571e6a2] w-full"
            />
          </label>
          <label className="bg-white text-sm text-[#7571e6a2] font-bold flex flex-row p-4 gap-1 w-full col-span-2">
            Message:
            <input
              type="text"
              name="message"
              className="outline-none bg-transparent border-b-2 border-[#7571e6a2] w-full"
            />
          </label>
        </div>
      </form>
    </section>
  );
};
export default GetInTouch;
