// components/SimpleBackground.jsx
import React from "react";
import Image from "next/image";

export default function SimpleBackground({ children }) {
  return (
    <section className="relative bg-[#F8FAFC] py-16 overflow-hidden">
      {/* Left Side - Tech Image */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] opacity-40 transform -translate-x-1/4 -translate-y-1/4">
        <Image
          src="/pngegg.png" // Path inside the public folder
          alt="Tech Circle"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>

      {/* Right Side - Tech Image */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] opacity-40 transform translate-x-1/4 translate-y-1/4">
        <Image
          src="/pngegg.png" // Path inside the public folder
          alt="Tech Circle"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto mb-16">{children}</div>
    </section>
  );
}
