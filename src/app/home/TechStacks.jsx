import React from "react";
import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import ReusableBackground from "../../components/ReusableBackground";
const TechStacks = () => {
  return (
  
      <div className="my-32">
          <ReusableBackground>
      <div className="text-center">
        <h1 className="text-5xl font-bold">We Serve All Tech Stacks</h1>
        <p className="text-gray-400 mt-7 mb-24">
          We understand that today companies must develop custom software
          products <br /> to keep pace with the competitive market
        </p>
      </div>
      <div>
        <Marquee className="my-10" direction="right" speed={40}>
          <div className="flex gap-16 font-bold text-4xl">
            <h1 className="ms-20 flex">
              <RiNextjsFill />
              Next js
            </h1>
            <h1 className="flex">
              <FaReact />
              React
            </h1>
            <h1 className="flex">
              <IoLogoJavascript />
              JavaScript
            </h1>
            <h1 className="flex">
            <SiTypescript />
              TypeScript
            </h1>
            <h1 className="flex">
            <FaJava />
              Java
            </h1>
            <h1 className="flex">
            <FaPython />
              Python
            </h1>
            <h1 className="flex">
            <SiMicrosoftazure />
              Azure
            </h1>
          </div>
        </Marquee>
        <Marquee className="mt-20" direction="left" speed={40}>
          <div className="flex gap-16 font-bold text-4xl">
            <h1 className="ms-20 flex">
              <RiNextjsFill />
              Next js
            </h1>
            <h1 className="flex">
              <FaReact />
              React
            </h1>
            <h1 className="flex">
              <IoLogoJavascript />
              JavaScript
            </h1>
            <h1 className="flex">
            <SiTypescript />
              TypeScript
            </h1>
            <h1 className="flex">
            <FaJava />
              Java
            </h1>
            <h1 className="flex">
            <FaPython />
              Python
            </h1>
            <h1 className="flex">
            <SiMicrosoftazure />
              Azure
            </h1>
          </div>
        </Marquee>
        
      </div>
      </ReusableBackground>
    </div>
   
  );
};

export default TechStacks;
