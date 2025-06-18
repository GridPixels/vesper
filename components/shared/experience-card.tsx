import ExperienceItemType from "@/types/ExperienceItem";
import Image from "next/image";
import React from "react";

const ExperienceCard = ({ data }: { data: ExperienceItemType }) => {
  return (
    <div className="bg-gray-100 p-5 mt-5 flex items-start space-x-4 rounded-md">
      <div className="relative w-12 h-12">
        <Image
          src={data.logo}
          alt={data.companyName}
          fill
          className="object-contain"
        />
      </div>

      <div>
        <span className="text-sm text-gray-500">{data.duration}</span>
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <span className="block text-sm text-gray-700">{data.companyName}</span>
        <p className="text-gray-800">{data.description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
