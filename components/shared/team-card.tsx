import TeamItemType from "@/types/TeamItem";
import { ArrowRight } from "lucide-react";
import React from "react";

const TeamCard = ({ data }: { data: TeamItemType }) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-md">
      <img
        src={data.img}
        alt={data.name}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-3 left-3 right-3 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between">
        <div>
          <p className="font-medium text-sm text-gray-800">{data.name}</p>
          <p className="text-xs text-gray-600">{data.role}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-600" />
      </div>
    </div>
  );
};

export default TeamCard;
