import React from "react";
import MethodologySlider from "../../components/MethodologySlider";
const Methodology = () => {
  return (
    <div className="bg-gradient-to-br from-black to-teal-900 py-28 my-5">
      <div className="mx-5 lg:mx-10">
        <div className="grid md:grid-cols-2 gap-16 text-white">
          <div className="text-5xl">
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
        <div className="mt-36">
          <MethodologySlider />
        </div>
      </div>
    </div>
  );
};

export default Methodology;
