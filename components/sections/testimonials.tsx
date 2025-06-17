import React from "react";
import SectionHeader from "../shared/section-header";
import { testimonilsData } from "@/data";
import TestimonialCard from "../shared/testimonial-card";

const Testimonials = () => {
  const headerData = {
    subtitle: "testimonials",
    title: "What our clients says",
    description:
      "Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus a  libero vehicula iaculis. Etiam ac tortor, malesuada quam nec",
  };

  return (
    <section className="bg-gray-50">
      <div className="contaienr mx-auto max-w-6xl py-20">
        <SectionHeader data={headerData} />

        <div className="grid grid-cols-3 gap-4 pt-10">
          {testimonilsData.map((item, i) => (
            <TestimonialCard data={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
