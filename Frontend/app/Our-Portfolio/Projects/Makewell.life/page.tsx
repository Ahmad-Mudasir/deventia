import AboutProject from '@/components/OurPortfolio/CaseStudy/AboutProject';
import DesktopVersion from '@/components/OurPortfolio/CaseStudy/DesktopVersion';
import Hero from '@/components/OurPortfolio/CaseStudy/Hero';
import ProjectDetials from '@/components/OurPortfolio/CaseStudy/ProjectDetials';
import StyleGuide from '@/components/OurPortfolio/CaseStudy/StyleGuide';
import TechnologiesUsed from '@/components/OurPortfolio/CaseStudy/TechnologiesUsed';
import WhatMyClientSay from '@/components/OurPortfolio/CaseStudy/WhatMyClientSay';
import isaLogo from '../../../../assets/images/makewell Logo.webp';
import isaDesk from '../../../../assets/images/makewell-mobile.webp';
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
        aboutProject="Efficiently streamline patient management with integrated tools for scheduling appointments and managing medical records, ensuring seamless coordination. Easily manage your schedule and conduct patient consultations in real-time, optimizing workflow and enhancing patient care with streamlined administrative processes."
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
        description="Makewell.Life provides integrated tools that streamline patient management by facilitating appointment scheduling and medical record management, ensuring efficient coordination. Their platform enables real-time scheduling and patient consultations, optimizing workflow and enhancing overall patient care through streamlined administrative processes."
        projectLogo={isaLogo}
        projectLink="https://isaconsulting.com/"
        projectName="Makewell.Life"
        deliverables="Website & App"
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
