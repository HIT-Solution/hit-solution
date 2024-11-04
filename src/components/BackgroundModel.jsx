// components/SimpleBackground.jsx
import React from 'react';

export default function BackgroundModel({ children }) {
  return (
    <section className="relative bg-[#F8FAFC] py-20 px-8 overflow-hidden my-16">
      
      {/* Enhanced Background Design - Left Side */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-10">
        {/* Large Gradient Blob */}
        <div className="w-72 h-72 bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 rounded-full opacity-80 blur-2xl"></div>

        {/* Soft Pink Glow */}
        <div className="w-48 h-48 bg-pink-300 opacity-50 rounded-full absolute top-20 left-12 blur-xl"></div>

        {/* Rotated Irregular Purple Blob */}
        <div className="w-40 h-56 bg-purple-300 rounded-full absolute top-40 left-24 opacity-70 rotate-[45deg] blur-md transform scale-110 shadow-lg shadow-purple-300"></div>
        
        {/* Small Floating Circles */}
        <div className="absolute top-12 left-36 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-32 left-48 w-2 h-2 bg-pink-400 rounded-full opacity-80"></div>
        <div className="absolute top-20 left-60 w-4 h-4 bg-purple-400 rounded-full opacity-90"></div>
      </div>

      {/* Enhanced Background Design - Right Side */}
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-10">
        {/* Large Gradient Blob */}
        <div className="w-72 h-72 bg-gradient-to-br from-teal-400 to-green-400 rounded-full opacity-60 blur-2xl"></div>

        {/* Soft Yellow Glow */}
        <div className="w-48 h-48 bg-yellow-300 opacity-50 rounded-full absolute bottom-20 right-10 blur-xl"></div>

        {/* Rotated Green Blob */}
        <div className="w-40 h-56 bg-green-300 rounded-full absolute bottom-32 right-20 opacity-80 rotate-[60deg] blur-md transform scale-110 shadow-lg shadow-green-300"></div>
        
        {/* Small Floating Circles */}
        <div className="absolute bottom-20 right-36 w-3 h-3 bg-teal-400 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute bottom-32 right-48 w-2 h-2 bg-yellow-400 rounded-full opacity-90"></div>
        <div className="absolute bottom-16 right-56 w-4 h-4 bg-pink-400 rounded-full opacity-70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto">
        {children}
      </div>
    </section>
  );
}
