'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { PinContainer } from '../ui/PinCards3d';

export const ScrollView = ({
  users,
  titleComponent,
}: {
  users: {
    name: string;
    designation: string;
    image: string;
    href: string;
  }[];
  titleComponent: string | React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-fit md:flex items-stretch justify-center relative p-2  bg-[#191919] overflow-hidden"
      ref={containerRef}
    >
      <div
        className="absolute top-0 -left-4 w-72 h-72 bg-[#7571e6] rounded-full filter blur-3xl opacity-40 animate-blob "
        style={{ animationDelay: '4s' }}
      ></div>
      <div
        className="absolute left-20 w-72 h-72 bg-[#cccaf0] rounded-full filter blur-3xl opacity-40 animate-blob"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute top-0 -right-4 w-48 h-48 bg-[#d5f188] rounded-full filter blur-3xl opacity-40 animate-blob "
        style={{ animationDelay: '6s' }}
      ></div>
      <div
        className="absolute right-0 -bottom-4 w-48 h-48 bg-[#afe8f0] rounded-full filter blur-3xl opacity-40 animate-blob"
        style={{ animationDelay: '3s' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#a9f7b6] rounded-full filter blur-3xl opacity-40 animate-blob"
        style={{ animationDelay: '5s' }}
      ></div>
      <div
        className="py-10 w-full h-fit relative"
        style={{
          perspective: '1000px',
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          users={users}
        />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center md:mb-8"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  users,
}: {
  rotate: any;
  scale: any;
  translate: any;
  users: {
    name: string;
    designation: string;
    image: string;
    href: string;
  }[];
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-5xl mx-auto h-fit w-full border-4 border-[#7471E6] p-6 bg-[#222222] rounded-[30px] shadow-2xl items-stretch"
    >
      <div className="bg-gray-100 h-fit w-full rounded-2xl grid grid-cols-1 md:grid-cols-3  gap-4 p-4">
        {users.map((user, idx: number) => (
          // <motion.a
          //   // style={{ translateY: translate }}
          //   whileHover={{
          //     boxShadow:
          //       '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          //   }}
          //   target="_blank"
          //   href={user.href}
          //   key={`user-${idx}`}
          //   className="relative bg-white rounded-md cursor-pointer"
          // >
          //   <img
          //     src={user.image}
          //     className="rounded-tr-md rounded-tl-md text-sm mb-auto"
          //     alt="thumbnail"
          //   />
          //   <div className="p-4 mt-auto mb-0">
          //     <h1 className="font-semibold text-sm text-[#7471E6] mb-1 tracking-widest">
          //       {user.name}
          //     </h1>
          //     <h2 className=" text-gray-500 text-xs ">{user.designation}</h2>
          //   </div>
          // </motion.a>
          <PinContainer key={idx} title={user.name} href={user.href}>
            <div className="flex basis-full flex-col rounded-xl tracking-tight sm:basis-1/2 w-[300px] md:w-[13rem] lg:w-[18rem]">
              <img
                src={user.image}
                width={350}
                height={400}
                alt="website image"
              />
              <div className="mt-2 p-4">
                <h1 className="font-semibold text-sm text-[#7471E6] mb-1 tracking-widest">
                  {user.name}
                </h1>
                <h2 className=" text-gray-500 text-xs ">{user.designation}</h2>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </motion.div>
  );
};
