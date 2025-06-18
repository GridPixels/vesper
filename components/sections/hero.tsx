import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { socialIcons } from "@/data";

const Hero = () => {
  return (
    <section className="container mx-auto max-w-6xl text-center pt-18 pb-10">
      <Image
        src={"/images/avatar.png"}
        width={107}
        height={107}
        alt="avatar"
        className="mx-auto"
      />
      <h1 className="text-2xl font-semibold mt-2.5 mb-1.5">Jeremy Stanton</h1>
      <p>Full-Stack Engineer and a Content Creator.</p>

      <Button size={"lg"} className="mt-8">
        Available For Work.
      </Button>

      <div className="flex justify-center items-center gap-5 mt-6">
        {socialIcons.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span>{item.icon}</span>{" "}
            <span className="capitalize">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
