"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import NavMenu from "@/types/NavMenu";
import Link from "next/link";

export default function Dropdown({
  title,
  subMenu,
}: {
  title: string;
  subMenu: NavMenu[];
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center justify-between w-full pr-2">
        <CollapsibleTrigger
          asChild
          className="hover:bg-accent pl-2 py-1 w-full"
        >
          <button className="flex items-center text-base gap-1">
            <span className="">{title}</span>
            <ChevronDown
              className={`${
                isOpen ? "rotate-180 " : ""
              } h-4 w-4 transition-transform duration-200`}
            />
          </button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-1 mt-2">
        <div className="flex flex-col px-2">
          {subMenu.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className="py-1 hover:bg-accent pl-2 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
