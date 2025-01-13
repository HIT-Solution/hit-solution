import React from "react";
import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import ReusableBackground from "../../components/ReusableBackground";
const TechStacks = () => {
  return (
    <div>
      <ReusableBackground>
        <div className="text-center">
          <h1 className="lg:text-5xl text-3xl font-bold">
            We Serve All Tech Stacks
          </h1>
          <p className="text-gray-400 mt-7 mb-24">
            We understand that today companies must develop custom software
            products <br /> to keep pace with the competitive market
          </p>
        </div>
        <div>
          <Marquee
            className="lg:my-10 md:my-8 my-5"
            direction="right"
            speed={40}
          >
            <div className="flex lg:gap-16 md:gap-12 gap-5 font-bold lg:text-4xl md:text-3xl text-xl">
              <h1 className="ms-20 flex">
                <span className="bg-red-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <RiNextjsFill className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                Next js
              </h1>
              <h1 className="flex">
                <span className="bg-green-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <FaReact className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                React
              </h1>
              <h1 className="flex">
                <span className="bg-blue-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <IoLogoJavascript className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                JavaScript
              </h1>
              <h1 className="flex">
                <span className="bg-orange-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <SiTypescript className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                TypeScript
              </h1>
              <h1 className="flex">
                <span className="bg-purple-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <FaJava className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                Java
              </h1>
              <h1 className="flex">
                <span className="bg-yellow-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <FaPython className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                Python
              </h1>
              <h1 className="flex">
                <span className="bg-cyan-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <VscAzure className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                Azure
              </h1>
            </div>
          </Marquee>
          <Marquee
            className="lg:mt-20 md:mt-16 mt-12"
            direction="left"
            speed={40}
          >
            <div className="flex lg:gap-16 md:gap-12 gap-5 font-bold lg:text-4xl md:text-3xl text-xl">
              <h1 className="ms-20 flex">
                <span className="bg-red-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <RiNextjsFill className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                Next js
              </h1>
              <h1 className="flex">
                <span className="bg-green-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <FaReact className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                React
              </h1>
              <h1 className="flex">
                <span className="bg-blue-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <IoLogoJavascript className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                JavaScript
              </h1>
              <h1 className="flex">
                <span className="bg-orange-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <SiTypescript className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                TypeScript
              </h1>
              <h1 className="flex">
                <span className="bg-purple-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <FaJava className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                Java
              </h1>
              <h1 className="flex">
                <span className="bg-yellow-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <FaPython className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
                Python
              </h1>
              <h1 className="flex">
                <span className="bg-cyan-200 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 rounded-full">
                  {" "}
                  <VscAzure className="lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8" />
                </span>
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
