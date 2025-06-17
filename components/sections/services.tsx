import React from "react";
import SectionHeader from "../shared/section-header";
import SectionHeaderType from "@/types/SectionHeader";
import { servicesData } from "@/data";
import ServiceCard from "../shared/service-card";

const Services = () => {
  const headerData: SectionHeaderType = {
    subtitle: "Services",
    title: "Services We Offer",
    description:
      "Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus a  libero vehicula iaculis. Etiam ac tortor, malesuada quam nec",
  };

  return (
    <section className="py-20 mt-20 bg-gray-50">
      <SectionHeader data={headerData} />

      <div className="grid grid-cols-3 gap-5  mx-auto container max-w-6xl mt-10">
        {servicesData.map((data, i) => (
          <ServiceCard data={data} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Services;
