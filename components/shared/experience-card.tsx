import ExperienceItemType from "@/types/ExperienceItem";
import Image from "next/image";
import React from "react";

const ExperienceCard = ({ data }: { data: ExperienceItemType }) => {
  return (
    <div className="bg-gray-100 p-4 sm:p-5 mt-5 flex flex-col sm:flex-row gap-4 sm:gap-x-6 rounded-md">
      <div className="relative w-8 min-w-8 h-8 aspect-square md:mx-auto mx-0">
        <Image
          src={data.logo}
          alt={data.companyName}
          fill
          className="object-contain"
        />
      </div>

      <div className="">
        <span className="text-sm text-gray-500">{data.duration}</span>
        <h3 className="text-lg font-semibold pt-2 sm:pt-3 pb-1">
          {data.title}
        </h3>
        <span className="block text-sm text-gray-700 pb-2">
          {data.companyName}
        </span>
        <p className="text-gray-800 text-sm sm:text-base">{data.description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
