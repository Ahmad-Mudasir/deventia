import React from "react";

const Heading = ({ text }: { text: String }) => {
  return <h1 className="font-semibold text-white text-3xl">{text}</h1>;
};

export default Heading;
