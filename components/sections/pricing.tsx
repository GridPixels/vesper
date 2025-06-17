import React from "react";
import SectionHeader from "../shared/section-header";
import { pricingData } from "@/data";
import PricingCard from "../shared/pricing-card";

const Pricing = () => {
  const headerData = {
    subtitle: "Pricing",
    title: "Affordable Pricing",
    description:
      "Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus a  libero vehicula iaculis. Etiam ac tortor, malesuada quam nec",
  };

  return (
    <section className="py-20 container max-w-6xl mx-auto">
      <SectionHeader data={headerData} />

      <div className="grid grid-cols-3 gap-6 mt-10">
        {pricingData.map((item, i) => (
          <PricingCard data={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
