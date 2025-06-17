import SectionHeaderType from "@/types/SectionHeader";
import React from "react";

const SectionHeader = ({ data }: { data: SectionHeaderType }) => {
  return (
    <div className="text-center max-w-xl mx-auto">
      <span className="bg-secondary text-primary px-4 py-2 rounded-full">
        {data.subtitle}
      </span>
      <h3 className="text-5xl pt-1.5 pb-3.5">{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default SectionHeader;
