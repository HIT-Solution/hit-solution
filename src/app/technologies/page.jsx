"use client";
import ReusableBackground from "@/components/ReusableBackground";
import React from "react";

import TitleFontStyle from "@/components/TitleFontStyle";
import { motion } from "framer-motion";

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
import Link from "next/link";

const Technologies = () => {
  const technologies = [
    {
      docLink: "https://flutter.dev",
      name: "Flutter",
      description:
        "A UI toolkit for building natively compiled applications for mobile, web, and desktop.",
      icon: <FaMobileAlt />,
    },
    {
      docLink: "https://www.mongodb.com/mern-stack",
      name: "MERN Stack",
      description:
        "A full-stack development framework using MongoDB, Express.js, React, and Node.js.",
      icon: <FaNodeJs />,
    },
    {
      docLink: "https://www.ibm.com/topics/iot",
      name: "IoT",
      description:
        "Internet of Things to connect and control devices seamlessly.",
      icon: <FaNetworkWired />,
    },
    {
      docLink: "https://www.ibm.com/topics/machine-learning",
      name: "Machine Learning",
      description: "Algorithms to create intelligent and adaptive solutions.",
      icon: <FaBrain />,
    },
    {
      docLink: "https://react.dev",
      name: "React JS",
      description: "A JavaScript library for building user interfaces.",
      icon: <FaReact />,
    },
    {
      docLink: "https://nextjs.org",
      name: "Next.js",
      description:
        "A React framework for server-side rendering and static site generation.",
      icon: <SiNextdotjs />,
    },
    {
      docLink: "https://aws.amazon.com/what-is-cloud-computing/",
      name: "Cloud Computing",
      description:
        "Scalable cloud solutions for deploying and managing applications.",
      icon: <FaCloud />,
    },
    {
      docLink: "https://www.docker.com",
      name: "Docker",
      description:
        "Containerized solutions to streamline software development and deployment.",
      icon: <FaDocker />,
    },
    {
      docLink: "https://tailwindcss.com",
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework for building responsive designs.",
      icon: <SiTailwindcss />,
    },
    {
      docLink: "https://firebase.google.com",
      name: "Firebase",
      description:
        "A platform for developing mobile and web applications with real-time data syncing.",
      icon: <SiFirebase />,
    },
    {
      docLink: "https://graphql.org",
      name: "GraphQL",
      description:
        "A query language for APIs to fetch precise data efficiently.",
      icon: <SiGraphql />,
    },
    {
      docLink: "https://www.mongodb.com",
      name: "MongoDB",
      description:
        "A NoSQL database for scalable and high-performance data storage.",
      icon: <SiMongodb />,
    },
    {
      docLink: "https://www.typescriptlang.org",
      name: "TypeScript",
      description:
        "A strongly typed superset of JavaScript for scalable and error-free development.",
      icon: <SiTypescript />,
    },
    {
      docLink: "https://kubernetes.io",
      name: "Kubernetes",
      description:
        "An open-source system for automating deployment, scaling, and management of containerized applications.",
      icon: <SiKubernetes />,
    },
    {
      docLink: "https://www.python.org",
      name: "Python",
      description:
        "A versatile programming language for web development, data analysis, and scripting.",
      icon: <FaPython />,
    },
    {
      docLink: "https://aws.amazon.com",
      name: "AWS",
      description:
        "Amazon Web Services provides scalable cloud computing solutions.",
      icon: <FaAws />,
    },
    {
      docLink: "https://www.postgresql.org",
      name: "PostgreSQL",
      description:
        "An advanced open-source relational database for data storage and analysis.",
      icon: <SiPostgresql />,
    },
    {
      docLink: "https://redis.io",
      name: "Redis",
      description:
        "An in-memory data structure store for caching and real-time analytics.",
      icon: <SiRedis />,
    },
    {
      docLink: "https://www.tensorflow.org",
      name: "TensorFlow",
      description:
        "An open-source framework for machine learning and AI model development.",
      icon: <SiTensorflow />,
    },
    {
      docLink: "https://getbootstrap.com",
      name: "Bootstrap",
      description:
        "A front-end framework for designing responsive and mobile-first websites.",
      icon: <FaBootstrap />,
    },
  ];

  return (
    // <ReusableBackground>
    <>
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-96 md:h-[600px]  bg-teal-600 overflow-hidden"
      >
        <img
          src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?ga=GA1.1.457083067.1736578215&semt=ais_incoming"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black  bg-opacity-50 pt-32 flex flex-col items-center justify-center text-center p-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-6xl font-bold text-white"
          >
            <TitleFontStyle title={" Empowering Innovation with Technology"} />
            <p></p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-xl text-gray-200 mt-4"
          >
            Driving digital transformation with cutting-edge, scalable, and
            future-ready technology solutions.
          </motion.p>
        </div>
      </motion.div>
      <div className="min-h-screen bg-gradient-to-br from-teal-700 via-gray-700 to-teal-500 text-black">
        <ReusableBackground>
          <div className="container xl:pt-32 lg:pt-28 md:pt-24 pt-16 mx-auto px-5 lg:px-10">
            {/* Page Title */}
            {/* <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center mb-16">
              <span className="text-teal-500">Our</span> Technologies
            </h1> */}
            {/* Technology Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-20 gap-8">
              {technologies.map((tech, index) => (
                <Link target="_blank" key={index} href={tech.docLink}>
                  <div className="bg-gray-100 text-black rounded-xl shadow-lg hover:shadow-2xl p-8 transform hover:-translate-y-2 transition duration-300 hover:bg-teal-100">
                    <div className="text-teal-500 text-5xl mb-4 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-teal-600 text-center">
                      {tech.name}
                    </h2>
                    <p className="text-gray-700 line-clamp-2 text-center">
                      {tech.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ReusableBackground>
      </div>

      <TechStacks />
    </>

    // </ReusableBackground>
  );
};

export default Technologies;
