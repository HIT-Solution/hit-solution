import ReusableBackground from "@/components/ReusableBackground";
import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaNetworkWired,
  FaBrain,
  FaCloud,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiGraphql,
  SiTypescript,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiTensorflow,
} from "react-icons/si";
import TechStacks from "../home/TechStacks";
import { FaAws, FaBootstrap, FaPython } from "react-icons/fa6";

const Technologies = () => {
  const technologies = [
    {
      name: "Flutter",
      description:
        "A UI toolkit for building natively compiled applications for mobile, web, and desktop.",
      icon: <FaMobileAlt />,
    },
    {
      name: "MERN Stack",
      description:
        "A full-stack development framework using MongoDB, Express.js, React, and Node.js.",
      icon: <FaNodeJs />,
    },
    {
      name: "IoT",
      description:
        "Internet of Things to connect and control devices seamlessly.",
      icon: <FaNetworkWired />,
    },
    {
      name: "Machine Learning",
      description: "Algorithms to create intelligent and adaptive solutions.",
      icon: <FaBrain />,
    },
    {
      name: "React JS",
      description: "A JavaScript library for building user interfaces.",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      description:
        "A React framework for server-side rendering and static site generation.",
      icon: <SiNextdotjs />,
    },
    {
      name: "Cloud Computing",
      description:
        "Scalable cloud solutions for deploying and managing applications.",
      icon: <FaCloud />,
    },
    {
      name: "Docker",
      description:
        "Containerized solutions to streamline software development and deployment.",
      icon: <FaDocker />,
    },
    {
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework for building responsive designs.",
      icon: <SiTailwindcss />,
    },
    {
      name: "Firebase",
      description:
        "A platform for developing mobile and web applications with real-time data syncing.",
      icon: <SiFirebase />,
    },
    {
      name: "GraphQL",
      description:
        "A query language for APIs to fetch precise data efficiently.",
      icon: <SiGraphql />,
    },
    {
      name: "MongoDB",
      description:
        "A NoSQL database for scalable and high-performance data storage.",
      icon: <SiMongodb />,
    },
    {
      name: "TypeScript",
      description:
        "A strongly typed superset of JavaScript for scalable and error-free development.",
      icon: <SiTypescript />,
    },
    {
      name: "Kubernetes",
      description:
        "An open-source system for automating deployment, scaling, and management of containerized applications.",
      icon: <SiKubernetes />,
    },
    {
      name: "Python",
      description:
        "A versatile programming language for web development, data analysis, and scripting.",
      icon: <FaPython />,
    },
    {
      name: "AWS",
      description:
        "Amazon Web Services provides scalable cloud computing solutions.",
      icon: <FaAws />,
    },
    {
      name: "PostgreSQL",
      description:
        "An advanced open-source relational database for data storage and analysis.",
      icon: <SiPostgresql />,
    },
    {
      name: "Redis",
      description:
        "An in-memory data structure store for caching and real-time analytics.",
      icon: <SiRedis />,
    },
    {
      name: "TensorFlow",
      description:
        "An open-source framework for machine learning and AI model development.",
      icon: <SiTensorflow />,
    },
    {
      name: "Bootstrap",
      description:
        "A front-end framework for designing responsive and mobile-first websites.",
      icon: <FaBootstrap />,
    },
  ];

  return (
    // <ReusableBackground>
    <>
      <div className="min-h-screen bg-gradient-to-br from-teal-700 via-gray-700 to-teal-500 text-black py-16">
        <div className="container mx-auto px-5 lg:px-10">
          {/* Page Title */}
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center mb-16">
            <span className="text-teal-500">Our</span> Technologies
          </h1>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-100 text-black rounded-xl shadow-lg hover:shadow-2xl p-8 transform hover:-translate-y-2 transition duration-300"
              >
                <div className="text-teal-500 text-5xl mb-4 flex items-center justify-center">
                  {tech.icon}
                </div>
                <h2 className="text-2xl font-bold mb-3 text-teal-600 text-center">
                  {tech.name}
                </h2>
                <p className="text-gray-700 text-center">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TechStacks />
    </>

    // </ReusableBackground>
  );
};

export default Technologies;
