import ReviewSlider from "../../components/ReviewSlider";
import React from "react";
// import SimpleBackground from "../../components/SimpleBackground";
import ReusableBackground from "@/components/ReusableBackground";

const Review = () => {
  return (
    // <SimpleBackground>
    <ReusableBackground>
      <div className="mx-5 lg:mx-10">
        <div className="grid lg:grid-cols-2 lg:gap-10 md:gap-8 gap-5">
          <div>
            <h1 className="lg:text-6xl md:text-4xl text-3xl lg:mt-24 md:mt-16 mt-2">
              Over 50+ Leading <br /> Brands Rely On Our Expertise
            </h1>
          </div>
          <div>
            <h1 className="text-lg lg:mt-24 md:mt-16 mt-2">
              Our expertise has consistently exceeded expectations of our
              clients. Top brands rely on us as a strategic partner to hire
              offshore software development teams.
            </h1>
          </div>
        </div>
        <div>
          <ReviewSlider />
        </div>
      </div>
      {/* // </SimpleBackground> */}
    </ReusableBackground>
  );
};

export default Review;
