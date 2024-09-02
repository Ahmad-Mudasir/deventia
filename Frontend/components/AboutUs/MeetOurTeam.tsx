import Image from 'next/image';
import teamMember from '../../assets/images/team-Member.webp';

const MeetOurTeam = () => {
  return (
    <section className="our-team-bg px-[5%] py-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-16">
        <h1 className="font-bold text-3xl lg:text-4xl md:whitespace-nowrap">
          Meet Our Team
        </h1>
        <p className="text-[#BBBBBB] text-lg">
          Meet Our Team: Experts dedicated to driving your success. Get
          acquainted with the faces behind Deventia&apos;s innovative solutions.
        </p>
      </div>
      <div className="mt-8 flex gap-8 flex-wrap">
        <div>
          <Image
            src={teamMember}
            alt="team-Member"
            className="w-36 lg:w-[280px]"
          />
          <h4 className="font-bold text-xl">John Deo</h4>
          <p className="text-base font-medium mt-1">
            UX/UI Designer at Deventia
          </p>
        </div>
        <div>
          <Image
            src={teamMember}
            alt="team-Member"
            className="w-36 lg:w-[280px]"
          />
          <h4 className="font-bold text-xl">John Deo</h4>
          <p className="text-base font-medium mt-1">
            UX/UI Designer at Deventia
          </p>
        </div>
        <div>
          <Image
            src={teamMember}
            alt="team-Member"
            className="w-36 lg:w-[280px]"
          />
          <h4 className="font-bold text-xl">John Deo</h4>
          <p className="text-base font-medium mt-1">
            UX/UI Designer at Deventia
          </p>
        </div>
        <div>
          <Image
            src={teamMember}
            alt="team-Member"
            className="w-36 lg:w-[280px]"
          />
          <h4 className="font-bold text-xl">John Deo</h4>
          <p className="text-base font-medium mt-1">
            UX/UI Designer at Deventia
          </p>
        </div>
      </div>
    </section>
  );
};
export default MeetOurTeam;
