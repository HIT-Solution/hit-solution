import BlogSlider from "../../components/BlogSlider";

import React from "react";

const Blog = () => {
  return (
    <div className=" bg-gradient-to-br from-black to-teal-900 my-20 py-28">
      <div className="mx-5 lg:mx-10 relative">
        <h1 className="text-6xl text-white">
         Newsletter
        </h1>
       
        <div className="my-16">
          <BlogSlider />
        </div>
      </div>
    </div>
  );
};

export default Blog;
