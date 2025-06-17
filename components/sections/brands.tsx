import { brandsData } from "@/data";
import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <section className="text-center py-10">
      <p>Sed turpis massa, gravida a diam quis, tristique ultrices massa. </p>

      <div className="flex gap-14 justify-center items-center pt-10">
        {brandsData.map((brand, i) => (
          <div key={i}>
            <Image
              src={brand.img}
              alt={brand.name}
              width={brand.width}
              height={45}
              className="object-contain opacity-60 hover:opacity-100 cursor-pointer transition duration-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
