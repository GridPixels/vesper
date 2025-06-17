import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { whyUSData } from "@/data";
import WhyUS from "../shared/why-card";
import Link from "next/link";

const WhyUs = () => {
  return (
    <section className="container max-w-6xl mx-auto pt-26">
      <div className="grid md:grid-cols-2 gap-20 justify-between">
        <div>
          <span className="bg-secondary text-primary py-2 px-8 rounded-full">
            Why Choose US
          </span>
          <h2 className="text-4xl text-secondary-foreground py-4">
            More Than Just a Service <br />
            <span className="font-semibold">A Team That Cares</span>
          </h2>
          <p className="text-secondary-foreground/90 mb-6">
            Discover what sets us apart. We combine expertise, innovation, and
            dedication to deliver exceptional value. Here’s why our clients
            trust us:
          </p>

          <Button size={"lg"}>
            Explore Services <Icons.arrowRight />
          </Button>
        </div>

        <div className="ml-auto">
          <Image
            src={"/images/feature-1.png"}
            width={448}
            height={333}
            alt="why us image"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-20">
        {whyUSData.map((item, i) => (
          <WhyUS data={item} key={i} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-10 items-center pt-40">
        <Image src="/images/feature-2.png" width={444} height={300} alt="" />
        <div>
          <h3 className="text-5xl pb-3">
            Transform Your App with Robust Backend Services
          </h3>
          <p>
            Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus
            a libero vehicula iaculis. Etiam ac tortor, malesuada quam nec
          </p>

          <div className="pt-7 gap-5 flex items-center">
            <Button size={"lg"}>
              Explore Services <Icons.arrowRight />
            </Button>

            <Link href={""}>How It Works!</Link>
          </div>

          <div className="flex gap-15 mt-10">
            <div className="flex gap-4">
              <span className="text-4xl font-bold">78%</span>
              <span>Unlock the full potential of your</span>
            </div>
            <div className="flex gap-4">
              <span className="text-4xl font-bold">98%</span>
              <span>Unlock the full potential of your</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
