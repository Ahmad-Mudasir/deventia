import Hero from '@/components/OurPortfolio/Hero';
import OurProjects from '@/components/OurPortfolio/OurProjects';
import alpinedgeImg from '../../assets/images/alpineedge.webp';
import privateCPA from '../../assets/images/privateCPA.webp';
import ISA from '../../assets/images/ISA.webp';
import patientDoctor from '../../assets/images/patientDoctor.webp';
import origin from '../../assets/images/origin.webp';
import DadiRentBoat from '../../assets/images/DadiRentBoat.webp';

const page = () => {
  return (
    <>
      <Hero />
      <h1 className="font-bold text-center px-[5%] text-3xl md:text-4xl mt-12">
        Our Portfolio
      </h1>
      <OurProjects
        flexReverse={false}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.'
        }
        projectURL={'https://www.google.com'}
        img={alpinedgeImg}
        projectName={'AlpineEdge'}
      />
      <OurProjects
        flexReverse={true}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.'
        }
        projectURL={'https://www.google.com'}
        img={privateCPA}
        projectName={'Private CPA'}
      />
      <OurProjects
        flexReverse={false}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.'
        }
        projectURL={'https://isaconsulting.com/'}
        img={ISA}
        projectName={'ISA Consulting'}
      />
      <OurProjects
        flexReverse={true}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.'
        }
        projectURL={'https://www.google.com'}
        img={patientDoctor}
        projectName={'Patient / Doctor'}
      />
      <OurProjects
        flexReverse={false}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.'
        }
        projectURL={'https://www.google.com'}
        img={origin}
        projectName={'origin.com'}
      />
      <OurProjects
        flexReverse={true}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.'
        }
        projectURL={'https://www.google.com'}
        img={DadiRentBoat}
        projectName={'Dadi Rent Boat'}
      />
      <br />
      <br />
    </>
  );
};
export default page;
