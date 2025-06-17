import WhyUsItemType from "@/types/WhyUSItem";
import React from "react";

const WhyUS = ({ data }: { data: WhyUsItemType }) => {
  return (
    <div className="text-secondary-foreground">
      <p className="flex gap-3 pb-2.5 items-center">
        <span className="bg-secondary p-2.5 rounded-sm">{data.icon}</span>
        <span className="text-xl font-semibold">{data.title}</span>
      </p>
      <p>{data.desc}</p>
    </div>
  );
};

export default WhyUS;
