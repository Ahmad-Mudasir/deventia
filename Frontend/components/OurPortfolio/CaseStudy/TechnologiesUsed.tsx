import Image from 'next/image';
import TechUsedImgandName from './TechUsedImgandName';
import img from '../../../assets/images/man-and-laptop-avatar.webp';
import icon from '../../../assets/images/scss.webp';
import tialwind from '../../../assets/images/tialwind.png';
import material from '../../../assets/images/material.png';
import bootstrap from '../../../assets/images/bootstrap.png';
import figma from '../../../assets/images/figma.png';
import github from '../../../assets/images/github.png';
import nextjs from '../../../assets/images/nextjs.png';
import reactjs from '../../../assets/images/reactjs.png';
import graphql from '../../../assets/images/graphql.png';
import redux from '../../../assets/images/redux.png';
import amp from '../../../assets/images/amp.png';

const TechnologiesUsed = () => {
  return (
    <section className="our-solution-bg p-[5%] my-8">
      <h1 className="font-semibold text-2xl lg:text-5xl">
        <span className="gradient-border">Technol</span>
        ogies Used
      </h1>
      <div className="flex relative md:h-[400px] w-full md:items-end justify-center flex-wrap gap-8">
        <Image src={img} alt={img.src} className="w-[200px] h-auto" />
        <TechUsedImgandName
          techImg={icon}
          techName="SCSS"
          top=""
          left="25%"
          bottom="0"
          right=""
        />
        <TechUsedImgandName
          techImg={tialwind}
          techName="Tialwind"
          top=""
          left="10%"
          bottom="20%"
          right=""
        />
        <TechUsedImgandName
          techImg={material}
          techName="Material UI"
          top=""
          left=""
          bottom="0"
          right="10%"
        />
        <TechUsedImgandName
          techImg={redux}
          techName="Redux"
          top="17%"
          left="20%"
          bottom=""
          right=""
        />
        <TechUsedImgandName
          techImg={graphql}
          techName="GraphQl"
          top="30%"
          left="41%"
          bottom=""
          right=""
        />
        <TechUsedImgandName
          techImg={reactjs}
          techName="React.js"
          top="15%"
          left=""
          bottom=""
          right="32%"
        />
        <TechUsedImgandName
          techImg={nextjs}
          techName="Next.js"
          top=""
          left=""
          bottom="20%"
          right="20%"
        />
        <TechUsedImgandName
          techImg={bootstrap}
          techName="Bootstrap"
          top="43%"
          left="25%"
          bottom=""
          right=""
        />
        <TechUsedImgandName
          techImg={figma}
          techName="Figma"
          top=""
          left="30%"
          bottom="20%"
          right=""
        />
        <TechUsedImgandName
          techImg={github}
          techName="Git"
          top="45%"
          left=""
          bottom=""
          right="30%"
        />
        <TechUsedImgandName
          techImg={amp}
          techName="AMP"
          top="27%"
          left=""
          bottom=""
          right="18%"
        />
      </div>
    </section>
  );
};
export default TechnologiesUsed;
