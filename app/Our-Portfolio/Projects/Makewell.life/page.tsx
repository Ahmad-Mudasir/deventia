import AboutProject from '@/components/OurPortfolio/CaseStudy/AboutProject';
import DesktopVersion from '@/components/OurPortfolio/CaseStudy/DesktopVersion';
import Hero from '@/components/OurPortfolio/CaseStudy/Hero';
import ProjectDetials from '@/components/OurPortfolio/CaseStudy/ProjectDetials';
import StyleGuide from '@/components/OurPortfolio/CaseStudy/StyleGuide';
import TechnologiesUsed from '@/components/OurPortfolio/CaseStudy/TechnologiesUsed';
import WhatMyClientSay from '@/components/OurPortfolio/CaseStudy/WhatMyClientSay';
import isaLogo from '../../../../assets/images/makewell Logo.webp';
import isaDesk from '../../../../assets/images/makewell-mobile.png';
import isaDesk1 from '../../../../assets/images/makewell-desktop1.webp';
import isaDesk2 from '../../../../assets/images/makewell-desktop.webp';

const page = () => {
  return (
    <>
      <Hero
        projectLogo={isaLogo}
        projectName="Makewell.Life"
        projectImg={isaDesk}
      />
      <AboutProject
        aboutProject="Welcome to AlpineEdge, where the Austrian Alps meet the excitement of trading. Founded in 2024, our platform blends tradition with innovation, offering unique virtual trading evaluation programs. Harness your skills, customize your experience, and unlock your potential. Join us to explore the intersection of nature and finance and reach new heights of success."
        projectImg={isaDesk1}
      />
      <StyleGuide
        projectName="Makewell.Life"
        fontName="Inter"
        fontBg="#84CFCD"
        projectLogo={isaLogo}
        color1="linear-gradient(to bottom, #3D3066 0%, #5941B6 100%)"
        color2="#01010C"
        color3="#503AA7"
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
        title="Mobile Version"
      />
      <DesktopVersion
        projectImg={isaDesk2}
        projectLogo={isaLogo}
        title="Desktop Version"
      />
      <WhatMyClientSay />
    </>
  );
};
export default page;
