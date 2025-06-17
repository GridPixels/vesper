import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Dropdown from "./dropdown";
import { menuData } from "@/data";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shadow-none">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>

        <div className="mt-8 space-y-4">
          <div className="flex flex-col px-2">
            {menuData.map((item, i) =>
              item?.submenu ? (
                <Dropdown title={item.name} key={i} subMenu={item.submenu} />
              ) : (
                <Link
                  href={item?.href}
                  key={i}
                  className="text-base hover:bg-accent pl-2 py-1"
                >
                  {item.name}
                </Link>
              )
            )}

            {/* <div></div> */}
          </div>

          {/* <Button variant="outline" className="w-full sm:hidden">
            Sign In
          </Button>
          <Button className="w-full sm:hidden">Get Started</Button> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};
