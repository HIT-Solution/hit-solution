import React from "react";
// import video from "../../../public/videos.mp4";
const Banner = () => {
  return (
    <div>
        
      <div className="relative w-full h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        {/* Serve the video from the public folder */}
        <source src="/videos.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="text-lg mt-2">Experience the best products and services</p>
      </div>
    </div>
    </div>
  );
};

export default Banner;
