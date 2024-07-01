import Image from 'next/image';
import coFounder from '../../assets/images/coFounder.webp';

const MeetOurCoFounder = () => {
  return (
    <section className="flex gap-12 flex-col md:flex-row p-[5%] co-founder-bg">
      <Image
        src={coFounder}
        alt="Co Founder"
        className="w-full md:w-[45%] h-[80svh] md:h-screen max-h-[30rem]"
      />
      <div>
        <h1 className="font-bold text-3xl lg:text-4xl">Meet Our Co-founder</h1>
        <p className="text-lg text-[#BBBBBB] mt-4">
          As a versatile professional,{' '}
          <span className="text-[#8A88EC] font-semibold">Huzaifa Shad</span>{' '}
          brings a wealth of expertise to our team. With a background in
          software engineering, project management, software testing, design
          analysis, and QA engineering, he plays a pivotal role in driving our
          company's success. Huzaifa not only oversees project execution but
          also provides strategic direction, ensuring that our initiatives align
          with our goals and objectives. His multifaceted skills and visionary
          leadership are instrumental in shaping our company's future.
        </p>
        <button
          type="button"
          className="bg-[#7571e681] px-8 py-3 font-semibold text-balance w-fit mt-8 text-black"
        >
          Book a call
        </button>
      </div>
    </section>
  );
};
export default MeetOurCoFounder;