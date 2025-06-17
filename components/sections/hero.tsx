import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Icons } from "../ui/icons";

const Hero = () => {
  return (
    <section className="container mx-auto max-w-6xl grid grid-cols-2 justify-between gap-x-46 pt-18 items-center">
      <div>
        <h1 className="text-6xl pb-5 font-bold">
          Transform Your <br /> Business Today
        </h1>
        <p className="pb-5">
          Sed turpis massa, gravida a diam quis, tristique ultrices massa.
          Curabitur velit neque, interdum.
        </p>

        <div className="flex gap-4 pb-16">
          <Button className="" size={"lg"}>
            Explore Services <Icons.arrowRight />
          </Button>
          <Button className="" size={"lg"} variant={"outline"}>
            Book a Call <Icons.callOutline />
          </Button>
        </div>

        <div>
          <p>Trusted by thousands of people around the world</p>
          <div className="flex pt-4">
            <img src="/images/avatars/Ellipse-1.png" alt="" />
            <img src="/images/avatars/Ellipse-2.png" alt="" className="-ml-4" />
            <img src="/images/avatars/Ellipse-3.png" alt="" className="-ml-4" />
            <img src="/images/avatars/Ellipse-4.png" alt="" className="-ml-4" />
            <img src="/images/avatars/Ellipse-5.png" alt="" className="-ml-4" />
            <img src="/images/avatars/Ellipse-6.png" alt="" className="-ml-4" />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Image
            src={"/images/hero-img/hero-1.png"}
            width={232}
            height={255}
            alt="hero img 1"
          />
          <Image
            src={"/images/hero-img/hero-2.png"}
            width={232}
            height={255}
            alt="hero img 1"
          />
        </div>
        <div className="flex flex-col gap-4 pt-6">
          <Image
            src={"/images/hero-img/hero-4.png"}
            width={232}
            height={255}
            alt="hero img 1"
          />
          <Image
            src={"/images/hero-img/hero-5.png"}
            width={232}
            height={255}
            alt="hero img 1"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
