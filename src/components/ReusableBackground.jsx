// components/ReusableBackground.jsx
import Image from "next/image";
import React from "react";

export default function ReusableBackground({ children }) {
  return (
    <section
      className="relative 
    before:content-['']  before:absolute before:inset-0 before:bg-[length:1600px_1200px] 
    before:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpNu19Sfpg87eW9Zm2WZEyaScXVB-l6jcxg&s')] 
    before:bg-repeat before:opacity-[0.03] before:z-0"
    >
      <div className="relative z-20">{children}</div>
    </section>
  );
}
