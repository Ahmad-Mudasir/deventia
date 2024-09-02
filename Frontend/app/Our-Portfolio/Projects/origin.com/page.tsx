import AboutProject from '@/components/OurPortfolio/CaseStudy/AboutProject';
import DesktopVersion from '@/components/OurPortfolio/CaseStudy/DesktopVersion';
import Hero from '@/components/OurPortfolio/CaseStudy/Hero';
import ProjectDetials from '@/components/OurPortfolio/CaseStudy/ProjectDetials';
import StyleGuide from '@/components/OurPortfolio/CaseStudy/StyleGuide';
import TechnologiesUsed from '@/components/OurPortfolio/CaseStudy/TechnologiesUsed';
import WhatMyClientSay from '@/components/OurPortfolio/CaseStudy/WhatMyClientSay';
import isaLogo from '../../../../assets/images/origin Logo.webp';
import isaDesk from '../../../../assets/images/origin-desktop.webp';
import isaDesk1 from '../../../../assets/images/origin-desktop1.webp';

const page = () => {
  return (
    <>
      <Hero
        projectLogo={isaLogo}
        projectName="origin.com"
        projectImg={isaDesk}
      />
      <AboutProject
        aboutProject="Welcome to Orgin.com, where you can hire expert website designers for any job. Whether you need a sleek new website, a redesign, or specialized design features, our talented designers are ready to bring your vision to life with top-quality work and professional expertise."
        projectImg={isaDesk1}
      />
      <StyleGuide
        projectName="origin.com"
        fontName="Inter"
        fontBg="#A269F1"
        projectLogo={isaLogo}
        color1="#434CD9"
        color2="#000000"
        color3="#E7EDFF"
        color4="#FFFFFF"
      />
      <TechnologiesUsed />
      <ProjectDetials
        description="Orgin.com offers a comprehensive platform for hiring skilled website designers capable of delivering exceptional results tailored to diverse needs, including new websites, redesigns, and specialized design features. Their team of talented designers combines expertise with a commitment to bringing clients' visions to life through top-quality craftsmanship and professional service."
        projectLogo={isaLogo}
        projectLink="https://isaconsulting.com/"
        projectName="Orgin.com"
        deliverables="Website"
      />
      <DesktopVersion
        projectImg={isaDesk}
        projectLogo={isaLogo}
        title="Desktop Version"
      />
      {/* <WhatMyClientSay /> */}
    </>
  );
};
export default page;
