import TestimonialItemType from "@/types/TestimonialItem";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({ data }: { data: TestimonialItemType }) => {
  return (
    <div className="bg-white p-6">
      <div className="flex gap-4 mb-4">
        <div>
          <Image src={data.img} width={40} height={40} alt={data.name} />
        </div>
        <div>
          <p className="text-lg font-medium">{data.name}</p>
          <p>{data.role}</p>
        </div>
      </div>

      <p>{data.review}</p>
    </div>
  );
};

export default TestimonialCard;
