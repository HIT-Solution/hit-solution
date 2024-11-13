// components/ReusableBackground.jsx
import Image from "next/image";
import React from "react";

export default function ReusableBackground({ children }) {
  return (
    <section className="relative bg-[#F8FAFC] py-20 px-8 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[length:120px_100%] before:bg-[linear-gradient(to_right,_rgba(0,0,0,0.02)_1px,_transparent_19px,_rgba(0,0,0,0.02)_1px,_transparent_99px)] before:z-0">
      {/* Left Side - Tech Image */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] opacity-30 transform -translate-x-1/4 -translate-y-1/4">
        <Image
          src="/pngegg.png" // Path inside the public folder
          alt="Tech Circle"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>

      {/* Right Side - Tech Image */}
      {/* <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-40 transform translate-x-1/4 translate-y-1/4">
        <Image
          src="/pngegg.png" // Path inside the public folder
          alt="Tech Circle"
          layout="fill"
          objectFit="contain"
        />
      </div> */}

      {/* Main Content */}
      <div className="relative z-20 container mx-auto">{children}</div>
    </section>
  );
}
