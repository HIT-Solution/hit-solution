// components/SimpleBackground.jsx
import React from 'react';

export default function SimpleBackground({ children }) {
  return (
    <section className="relative bg-[#F8FAFC] py-20 px-8 overflow-hidden my-16">
      
      {/* Smaller Background Design - Left Side */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 z-10">
        {/* Smaller Pink Gradient Circle with Soft Shadow */}
        <div className="w-48 h-48 bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 rounded-full opacity-70 shadow-lg shadow-pink-100"></div>
        
        {/* Smaller Rotated Purple Blob Shape */}
        <div className="w-36 h-48 bg-purple-200 rounded-full absolute top-16 left-20 opacity-60 rotate-[25deg] shadow-md shadow-purple-100"></div>
        
        {/* Smaller Blue Circle */}
        <div className="w-16 h-16 bg-blue-300 rounded-full absolute top-36 left-8 opacity-80 shadow-sm shadow-blue-100"></div>
        
        {/* Decorative Dots */}
        <div className="absolute top-10 left-28 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
        <div className="absolute top-24 left-36 w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
      </div>

      {/* Smaller Background Design - Right Side */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-10">
        {/* Smaller Teal Gradient Circle with Shadow */}
        <div className="w-48 h-48 bg-gradient-to-br from-teal-200 to-green-300 rounded-full opacity-60 shadow-lg shadow-teal-100"></div>
        
        {/* Smaller Yellow Oval with Rotation and Soft Shadow */}
        <div className="w-32 h-40 bg-yellow-200 rounded-full absolute bottom-12 right-14 opacity-70 rotate-[35deg] shadow-md shadow-yellow-100"></div>
        
        {/* Smaller Pink Circle */}
        <div className="w-14 h-14 bg-pink-300 rounded-full absolute bottom-16 right-6 opacity-80 shadow-sm shadow-pink-100"></div>
        
        {/* Decorative Dots */}
        <div className="absolute bottom-12 right-28 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
        <div className="absolute bottom-24 right-36 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto">
        {children}
      </div>
    </section>
  );
}
