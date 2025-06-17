import React from "react";
import SectionHeader from "../shared/section-header";
import { blogsData } from "@/data";
import BlogCard from "../shared/blog-card";

const Blog = () => {
  const headerData = {
    subtitle: "blog",
    title: "Learn From Our Blog",
    description:
      "Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus a  libero vehicula iaculis. Etiam ac tortor, malesuada quam nec",
  };

  return (
    <section className="mt-20">
      <SectionHeader data={headerData} />

      <div className="flex flex-wrap justify-center sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-14 container max-w-6xl mx-auto pb-28 px-10 lg:px-0 mt-10">
        {blogsData.map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
