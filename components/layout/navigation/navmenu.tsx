"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { menuData } from "@/data";

export default function Navmenu() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="items-center">
        {menuData.map((item, i) =>
          item?.submenu ? (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger className="!text-base hover:bg-white">
                {item?.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!border-white">
                <ul className="grid w-[250px]">
                  {item.submenu.map((component, i) => (
                    <NavigationMenuLink asChild key={i}>
                      <Link
                        className="hover:text-primary p-2 "
                        href={component.href}
                        key={component.name}
                      >
                        {component.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem
              className="hover:text-primary hover:bg-white px-4"
              asChild
              key={i}
            >
              <NavigationMenuLink asChild>
                <Link href={item.href} className="!text-base">
                  {item.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
