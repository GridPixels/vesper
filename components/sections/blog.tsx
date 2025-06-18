import React from "react";
import { blogsData } from "@/data";
import BlogCard from "../shared/blog-card";

const Blog = () => {
  return (
    <section className="mt-20">
      <h3 className="text-lg font-semibold">Articles</h3>

      {blogsData.map((blog, i) => (
        <BlogCard blog={blog} key={i} />
      ))}
    </section>
  );
};

export default Blog;
