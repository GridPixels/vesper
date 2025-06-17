import React from "react";
import Logo from "./logo";
import Navmenu from "./navmenu";
import { Button } from "../../ui/button";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

const Navigation = () => {
  return (
    <header className="border-b border-b-gray-200">
      <div className="flex items-center justify-between container mx-auto max-w-6xl py-6 px-10 lg:px-0">
        <Logo />

        <Navmenu />

        <div className="hidden md:block">
          <Button asChild>
            <Link href={"/#contact"}>Contact Now</Link>
          </Button>
        </div>

        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
