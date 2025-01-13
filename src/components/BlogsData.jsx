import React from "react";
import BlogsCard from "./BlogsCard";
import Blog from "@/app/home/Blog";

const BlogsData = () => {
  return (
    <div>
      <Blog />
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 mx-5">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <BlogsCard key={index} />
          ))}
      </div> */}
    </div>
  );
};

export default BlogsData;
