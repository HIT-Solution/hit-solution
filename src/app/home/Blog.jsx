import ReusableBackground from "@/components/ReusableBackground";
import BlogSlider from "../../components/BlogSlider";

import React from "react";
import TitleFontStyle from "@/components/TitleFontStyle";

const Blog = () => {
  return (
    <div className=" bg-gradient-to-br from-black to-teal-800  ">
      <ReusableBackground>
        <div className="mx-5 lg:mx-10 relative lg:py-16 md:py-8 py-5">
          <h1 className="lg:text-6xl container mx-auto md:text-5xl text-3xl text-white">
            <TitleFontStyle title={"Newsletter"} />
          </h1>

          <div className="lg:my-6 md:my-5 my-4">
            <BlogSlider />
          </div>
        </div>
      </ReusableBackground>
    </div>
  );
};

export default Blog;
