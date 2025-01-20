import ReusableBackground from "@/components/ReusableBackground";
import BlogSlider from "../../components/BlogSlider";

import React from "react";

const Blog = () => {
  return (
    <div className=" bg-gradient-to-br from-black to-teal-800  ">
      <ReusableBackground>
        <div className="mx-5  lg:mx-10 relative lg:py-16 md:py-8 py-5">
          <h1 className="lg:text-6xl md:text-5xl text-3xl text-white">
            Newsletter
          </h1>

          <div className="lg:my-12 md:my-8 my-4">
            <BlogSlider />
          </div>
        </div>
      </ReusableBackground>
    </div>
  );
};

export default Blog;
