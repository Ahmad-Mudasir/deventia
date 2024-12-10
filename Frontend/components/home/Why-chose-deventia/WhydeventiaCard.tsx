import React from "react";

interface CardProps {
  icon: React.ElementType; // Type for the icon component
  title: string;
  description: string;
  borderGradient: string;
  iconBg: string;
}

const WhyDeventiaCard: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  borderGradient,
  iconBg,
}) => {
  return (
    <div
      className={`p-6 rounded-lg border ${borderGradient} bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-sm 
        hover:translate-y-[-5px] transition-all duration-300 lg:w-[300px] lg:h-[300px]`}
      style={{
        border: "1px solid transparent",
        background: `linear-gradient(#0a0b1e, #0a0b1e) padding-box, ${borderGradient} border-box`,
      }}
    >
      <div className={`w-12  h-12 ${iconBg} rounded-lg p-3 mb-4`}>
        <Icon className="w-full h-full text-white" />
      </div>
      <h3 className="text-xl md:text-sm lg:text-xl  font-bold text-white mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-xs lg:text-[0.9rem] text-gray-300 md:min-h-[70px] mb-4">
        {description}
      </p>
      <button className="text-white flex items-center gap-2 hover:gap-3 transition-all duration-300">
        Read More
        <span className="text-lg text-blue-600">→</span>
      </button>
    </div>
  );
};

export default WhyDeventiaCard;
