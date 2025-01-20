import React from "react";
import MethodologySlider from "../../components/MethodologySlider";
import ReusableBackground from "@/components/ReusableBackground";
const Methodology = () => {
  return (
    <div className="bg-gradient-to-br from-black -mt-60  z-30 to-teal-900 lg:py-20 md:py-20 py-12 ">
      <ReusableBackground>
        <div className="mx-5 lg:mx-10">
          <div className="grid md:grid-cols-1 lg:gap-16 md:gap-12 gap-10 text-white">
            <div className="lg:text-5xl md:text-4xl pt-52  text-3xl">
              <h1>Our Methodology to Collaboration</h1>
            </div>
            <div className="text-gray-300">
              <h1>
                We follow an agile development methodology and guarantee the
                timely delivery of high-quality software products.
              </h1>
            </div>
          </div>
          {/* slider */}
          <div className="lg:mt-36 md:mt-28 mt-20">
            <MethodologySlider />
          </div>
        </div>
      </ReusableBackground>
    </div>
  );
};

export default Methodology;
