import React, { useEffect } from 'react';
import {
  FaAddressCard,
  FaChrome,
  FaCircleDollarToSlot,
  FaGamepad,
  FaHospitalUser,
  FaLaptop,
  FaMagnifyingGlassChart,
  FaMicrophone,
  FaMobile,
  FaPeopleRoof,
  FaSackDollar,
  FaTablet,
} from 'react-icons/fa6';
import { GrCloudSoftware, GrCompliance, GrTechnology } from 'react-icons/gr';
import { MdAccountBalance } from 'react-icons/md';
import { HiSpeakerphone } from 'react-icons/hi';
import {
  FaAmericanSignLanguageInterpreting,
  FaFirstAid,
  FaMouse,
  FaMousePointer,
  FaSafari,
  FaTripadvisor,
} from 'react-icons/fa';
import { LiaCommentDollarSolid } from 'react-icons/lia';
import { GiSatelliteCommunication } from 'react-icons/gi';
import icon from '../../assets/images/scss.webp';
import tialwind from '../../assets/images/tialwind.png';
import material from '../../assets/images/material.png';
import bootstrap from '../../assets/images/bootstrap.png';
import figma from '../../assets/images/figma.png';
import github from '../../assets/images/github.png';
import nextjs from '../../assets/images/nextjs.png';
import reactjs from '../../assets/images/reactjs.png';
import graphql from '../../assets/images/graphql.png';
import redux from '../../assets/images/redux.png';
import styles from './AnimatedText.module.css';
import Image from 'next/image';

const AnimatedText = () => {
  const icons = [
    <FaLaptop className="text-[--home-hero-animation-text]" />,
    <Image src={figma} alt="figma" />,
    <FaAmericanSignLanguageInterpreting className="text-[--home-hero-animation-text]" />,
    <Image src={reactjs} alt="reactjs" />,
    <FaPeopleRoof className="text-[--home-hero-animation-text]" />,
    <FaMagnifyingGlassChart className="text-[--home-hero-animation-text]" />,
    <Image src={bootstrap} alt="bootstrap" />,
    <FaHospitalUser className="text-[--home-hero-animation-text]" />,
    <Image src={material} alt="material" />,
    <FaAddressCard className="text-[--home-hero-animation-text]" />,
    <FaCircleDollarToSlot className="text-[--home-hero-animation-text]" />,
    <Image src={nextjs} alt="next.js" />,
    <FaMicrophone className="text-[--home-hero-animation-text]" />,
    <Image src={redux} alt="redux" />,
    <GrCloudSoftware className="text-[--home-hero-animation-text]" />,
    <GrCompliance className="text-[--home-hero-animation-text]" />,
    <GrTechnology className="text-[--home-hero-animation-text]" />,
    <MdAccountBalance className="text-[--home-hero-animation-text]" />,
    <HiSpeakerphone className="text-[--home-hero-animation-text]" />,
    <Image src={tialwind} alt="tialwind" />,
    <FaFirstAid className="text-[--home-hero-animation-text]" />,
    <LiaCommentDollarSolid className="text-[--home-hero-animation-text]" />,
    <GiSatelliteCommunication className="text-[--home-hero-animation-text]" />,
    <FaSackDollar className="text-[--home-hero-animation-text]" />,
    <Image src={github} alt="github" />,
    <FaTablet className="text-[--home-hero-animation-text]" />,
    <FaGamepad className="text-[--home-hero-animation-text]" />,
    <Image src={icon} alt="icon" />,
    <FaMobile className="text-[--home-hero-animation-text]" />,
    <FaTripadvisor className="text-[--home-hero-animation-text]" />,
    <FaMousePointer className="text-[--home-hero-animation-text]" />,
    <FaMouse className="text-[--home-hero-animation-text]" />,
    <Image src={graphql} alt="graphql" />,
    <FaSafari className="text-[--home-hero-animation-text]" />,
    <FaChrome className="text-[--home-hero-animation-text]" />,
  ];

  useEffect(() => {
    const flipWords = () => {
      const words = document.querySelectorAll('.word');
      words.forEach((word, wordIndex) => {
        setTimeout(() => {
          word.classList.add('flipped');
        }, (wordIndex + 1) * 1000);

        setTimeout(() => {
          word.classList.remove('flipped');
        }, (wordIndex + 1) * 1000 + 4000);
      });
    };

    flipWords();
    const intervalId = setInterval(flipWords, 4000); // Repeat every 4 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Global icon index to track the icon for each letter across all words
  let globalIconIndex = 0;

  return (
    <>
      {['Deventia', 'Scripting', 'Future', 'Technologies'].map(
        (word, wordIndex) => (
          <div
            className={` ${styles.container} word gap-0.5 space-y-0.5`}
            key={wordIndex}
          >
            {word.split('').map((letter, index) => {
              // Assign icon and increment the global index
              const iconElement = icons[globalIconIndex % icons.length];
              globalIconIndex += 1; // Update the global index

              return (
                <div
                  key={index}
                  className="box size-[30px] lg:size-[50px] font-tt-hoves"
                  data-letter={letter}
                >
                  <div className="animation-icon shadow-md rounded bg-[#2d2deb] p-2 opacity-80 font-tt-hoves">
                    {iconElement}
                  </div>
                  <div className="letter shadow-md rounded bg-[#2d2deb] font-tt-hoves">
                    {letter}
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </>
  );
};

export default AnimatedText;
