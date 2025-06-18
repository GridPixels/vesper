import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <div className="text-accent-foreground bg-gray-100 mt-5 p-5">
      <div className="flex justify-between">
        <Image src={data.img} width={20} height={20} alt={""} />
        <Link href={"#"}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 16.5L16.5 1.5M16.5 1.5H5.25M16.5 1.5V12.75"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
      <h3 className="pb-3 text-xl font-medium hover:text-primary transition duration-200">
        <Link href={`/blog/${data.link}`}>{data.title}</Link>
      </h3>
      <p>{data.excerpt}</p>
    </div>
  );
};

export default ProjectCard;
