import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        width={122}
        height={40}
        src={"/images/logo.svg"}
        alt="lamda folio logo"
      />
    </Link>
  );
};

export default Logo;
