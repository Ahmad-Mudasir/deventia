import AboutProject from '@/components/OurPortfolio/CaseStudy/AboutProject';
import DesktopVersion from '@/components/OurPortfolio/CaseStudy/DesktopVersion';
import Hero from '@/components/OurPortfolio/CaseStudy/Hero';
import ProjectDetials from '@/components/OurPortfolio/CaseStudy/ProjectDetials';
import StyleGuide from '@/components/OurPortfolio/CaseStudy/StyleGuide';
import TechnologiesUsed from '@/components/OurPortfolio/CaseStudy/TechnologiesUsed';
import WhatMyClientSay from '@/components/OurPortfolio/CaseStudy/WhatMyClientSay';
import isaLogo from '../../../../assets/images/RS-global-logo.png';
import isaDesk from '../../../../assets/images/RS-desktop.png';
import isaDesk1 from '../../../../assets/images/RS-desktop1.png';

const page = () => {
  return (
    <>
      <Hero
        projectLogo={isaLogo}
        projectName="RS Global Ties"
        projectImg={isaDesk}
      />
      <AboutProject
        aboutProject="Welcome to AlpineEdge, where the Austrian Alps meet the excitement of trading. Founded in 2024, our platform blends tradition with innovation, offering unique virtual trading evaluation programs. Harness your skills, customize your experience, and unlock your potential. Join us to explore the intersection of nature and finance and reach new heights of success."
        projectImg={isaDesk1}
      />
      <StyleGuide
        projectName="RS Global Ties"
        fontName="Inter"
        fontBg="#B3D9FF"
        projectLogo={isaLogo}
        color1="#127CC0"
        color2="#000000"
        color3="#E2E8F7"
        color4="#FFFFFF"
      />
      <TechnologiesUsed />
      <ProjectDetials
        projectLogo={isaLogo}
        projectLink="https://isaconsulting.com/"
      />
      <DesktopVersion
        projectImg={isaDesk}
        projectLogo={isaLogo}
        title="Desktop Version"
      />
      <WhatMyClientSay />
    </>
  );
};
export default page;
