import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { socialIcons } from "@/data";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container mx-auto max-w-6xl text-center pt-18 pb-18 lg:pb-36">
      <Image
        src={"/images/avatar.png"}
        width={107}
        height={107}
        alt="avatar"
        className="mx-auto border-4 rounded-full"
      />
      <h1 className="text-2xl font-semibold mt-2.5 mb-1.5">Jeremy Stanton</h1>
      <p>Full-Stack Engineer and a Content Creator.</p>

      <Button
        asChild
        size={"lg"}
        className="mt-8 rounded-full hover:bg-primary/90"
      >
        <Link href={"#"}>Available For Work.</Link>
      </Button>

      <div className="flex justify-center items-center gap-5 mt-6 flex-wrap">
        {socialIcons.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className="flex items-center gap-2 hover:text-primary/90"
          >
            <span>{item.icon}</span>{" "}
            <span className="capitalize">{item.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
