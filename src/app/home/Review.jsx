
import ReviewSlider from "../../components/ReviewSlider";
import React from "react";
import SimpleBackground from "../../components/SimpleBackground";

const Review = () => {
  return (
    <SimpleBackground>
      <div className="my-24 mx-5 lg:mx-10">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-7xl">
            Over 50+ Leading <br /> Brands Rely On Our Expertise
          </h1>
        </div>
        <div>
          <h1 className="text-lg">
            Our expertise has consistently exceeded expectations of our clients.
            Top brands rely on us as a strategic partner to hire offshore
            software development teams.
          </h1>
        </div>
      </div>
      <div >
        <ReviewSlider />
      </div>
    </div>
    </SimpleBackground>
  );
};

export default Review;
