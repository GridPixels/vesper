import BlogType from "@/types/BlogItem";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="text-accent-foreground max-w-[345px]">
      <Link href={`/blog/${blog.link}`}>
        <Image
          src={blog.img}
          width={345}
          height={192}
          alt=""
          className="rounded-[5px]"
        />
      </Link>

      <div className="flex justify-between py-3.5">
        <Link href={"#"} className="hover:text-primary">
          {blog.tag}
        </Link>
        <span>
          <Link href={"#"} className="hover:text-primary">
            {blog.author}
          </Link>{" "}
          . {blog.publishDate}
        </span>
      </div>
      <h3 className="pb-3 text-xl font-medium hover:text-primary transition duration-200">
        <Link href={`/blog/${blog.link}`}>{blog.title}</Link>
      </h3>
      <Link
        href={`/blog/${blog.link}`}
        className="hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
      >
        <span>Read More</span>

        <svg
          width="20"
          height="10"
          viewBox="0 0 20 10"
          className="transition-all duration-100 ease-out group-hover:ml-0.5"
        >
          <path
            d="M15.25 1.25L19 5M19 5L15.25 8.75M19 5H1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default BlogCard;
