import ServiceItemType from "@/types/ServiceItem";
import Link from "next/link";
import React from "react";
import { Icons } from "../ui/icons";

const ServiceCard = ({ data }: { data: ServiceItemType }) => {
  return (
    <div className="p-2 bg-white flex flex-col rounded-md">
      <div className="border border-gray-200 rounded-md p-8">
        <span>{data.icon}</span>
        <h4 className="text-2xl pb-3.5 pt-1.5">{data.title}</h4>
        <p className="pb-9">{data.description}</p>

        <div className="mt-auto">
          <Link
            href={data.link}
            className=" border rounded-full inline-block p-4"
          >
            <Icons.plusOutline />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
