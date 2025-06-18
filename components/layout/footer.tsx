import { socialIcons } from "@/data";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "./navigation/logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-4 text-center">
      <p>© {year} GridPixels. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
