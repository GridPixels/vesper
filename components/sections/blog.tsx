import React from "react";
import { blogsData } from "@/data";
import BlogCard from "../shared/blog-card";

const Blog = () => {
  return (
    <section className="pb-16">
      <h3 className="text-lg font-semibold">Articles</h3>

      <div>
        {blogsData.map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
