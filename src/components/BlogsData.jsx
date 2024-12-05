import React from "react";
import BlogsCard from "./BlogsCard";

const BlogsData = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mx-5">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <BlogsCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default BlogsData;
