"use client";

import { whyDeventiaData } from "@/data/data";
import WhyDeventiaCard from "./WhydeventiaCard";
import GlowingText from "./GlowingText";
import BlueGlowEffect from "../BlueGlowEffect";

const WhyDeventia = () => {
  return (
    <div className="min-h-[80vh]  py-4 mb-5 overflow-hidden relative">
      {/* Blue lighting */}
      <BlueGlowEffect
        className="top-12 -right-12  "
        size={400}
        blur={100}
        opacity={0.5}
        rotate={0}
      />

      <GlowingText
        glowingTitle=" WHY CHOOSE SERVICES FROM DEVENTIA?"
        title=" Why Choose Services From Deventia?"
      />
      {/* Services grid */}
      <div className="container  flex justify-center items-center mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  relative z-10">
          {whyDeventiaData.map((item, index) => (
            <WhyDeventiaCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-purple-400/50 animate-pulse" />
      <div className="absolute bottom-40 left-20 w-3 h-3 rounded-full bg-green-400/50 animate-pulse" />
    </div>
  );
};

export default WhyDeventia;
