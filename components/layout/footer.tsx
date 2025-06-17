import { socialIcons } from "@/data";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "./navigation/logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-7 pb-7 px-10 lg:px-0 flex-wrap gap-5 bg-gray-50">
      <section className="bg-white max-w-5xl mx-auto p-10 flex justify-between relative bottom-20 items-center shadow">
        <div>
          <h3 className="text-4xl pb-2">
            Subscribe Now to Unlock <br /> Exclusive Features!
          </h3>
          <p>Randomised words which don't look even slightly believable.</p>
        </div>

        <Button size={"lg"}>Get Started</Button>
      </section>

      <div className="container mx-auto max-w-6xl px-5 xl:px-0">
        <div className="grid grid-cols-1 gap-y-5 pb-28 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-3">
            <Logo />
            <p className="pb-8 pt-5">
              Your go-to source for professionally designed <br /> Figma
              templates.
              {/* <br /> Ship faster, no design headaches, just clean, ready-to-use
              layouts. */}
            </p>

            <div className="flex items-center gap-3">
              {socialIcons.map((icon, i) => (
                <Link
                  key={i}
                  href={""}
                  className="text-accent-foreground hover:text-white bg-primary/8 group hover:bg-primary w-8 h-8 flex items-center justify-center transition duration-200 border-accent-foreground rounded-sm"
                >
                  {icon.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <h4 className="pb-4 text-base font-semibold">Products</h4>
            <ul>
              <li className="pb-2 text-gray-600 hover:cursor-pointer hover:text-primary">
                <Link href="/templates/category/figma">Figma Templates</Link>
              </li>
              <li className="pb-2 text-gray-600 hover:cursor-pointer hover:text-primary">
                <Link href="/templates/category/free">Free Templates</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="pb-4 text-base font-semibold">Resources</h4>
            <ul>
              <li className="pb-2 text-gray-600 hover:cursor-pointer hover:text-primary">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="pb-2 text-gray-600 hover:cursor-pointer hover:text-primary">
                <Link href="/support">Support</Link>
              </li>
              <li className="pb-2 text-gray-600 hover:cursor-pointer hover:text-primary">
                <Link href="/">Documentation</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="pb-4 text-base font-semibold">Legal</h4>
            <ul>
              <li className="pb-2 text-gray-600 hover:cursor-pointer hover:text-primary">
                <Link href="/terms-of-services">Terms of Service</Link>
              </li>
              <li className="pb-2 text-gray-600 hover:cursor-pointer hover:text-primary">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="pb-2 text-gray-600 hover:cursor-pointer hover:text-primary">
                <Link href="/refund-policy">Refund Policy</Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="pb-2 text-gray-600 hover:cursor-pointer hover:text-primary"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mb-10 border-t border-gray-200 pt-7 text-center w-full">
        © {year} GridPixels. All rights reserved.
      </p>

      {/* <div className="flex items-center gap-3">
        {socialIcons.map((icon, i) => (
          <div
            key={i}
            className="border w-8 h-8 flex items-center justify-center hover:shadow-2xs transition duration-200 border-accent-foreground"
          >
            <Link href={""} className="text-accent-foreground">
              {icon.icon}
            </Link>
          </div>
        ))}
      </div>

      <div>
        <p className="text-accent-foreground">
          © 2025 Copyright all right reserved.
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
