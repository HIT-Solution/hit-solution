"use client";
import React from "react";
import { motion } from "framer-motion";
// import SimpleBackground from "../../components/SimpleBackground";
import Image from "next/image";
import fq1 from "../../../public/clinet-profile/client1.png";
import fq2 from "../../../public/clinet-profile/profile3.jpg";

import { Accordion, AccordionItem } from "@nextui-org/react";
import ReusableBackground from "@/components/ReusableBackground";
const Faq = () => {
  const shapeAnimation = {
    scale: [1, 1.03, 0.97, 1],
    rotate: [0, 1, -5, 0],
    clipPath: [
      // "polygon(30% 10%, 70% 0%, 100% 30%, 90% 80%, 60% 100%, 10% 90%, 0% 50%, 10% 20%)",
      // "polygon(25% 15%, 75% 0%, 100% 35%, 85% 75%, 55% 100%, 5% 85%, 0% 45%, 15% 15%)",
      // "polygon(30% 10%, 70% 0%, 100% 30%, 90% 80%, 60% 100%, 10% 90%, 0% 50%, 10% 20%)",
    ],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  const bubbleAnimation = {
    y: [0, -10, 0],
    x: [0, 5, -5, 0],
    opacity: [0.3, 0.5, 0.2, 0.3],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  const faqDatas = [
    {
      id: 1,
      question: "What types of IoT projects does your company specialize in?",
      answer:
        "We specialize in a wide range of IoT projects including smart home automation, industrial IoT solutions, wearable devices, and IoT platforms integration.",
    },
    {
      id: 2,
      question:
        "Can you handle both frontend and backend development for websites?",
      answer:
        "Yes, we provide full-stack website development services, covering everything from user interface design to server-side logic and database integration.",
    },
    {
      id: 3,
      question: "Do you develop apps for both Android and iOS platforms?",
      answer:
        "Absolutely, our mobile app development team is proficient in creating native apps for both Android and iOS, ensuring seamless performance and user experience across different devices.",
    },
    {
      id: 4,
      question: "What areas of Machine Learning and AI do you focus on?",
      answer:
        "We focus on various applications of Machine Learning and AI, including natural language processing, predictive analytics, recommendation systems, and automated decision-making algorithms.",
    },
    {
      id: 5,
      question:
        "How do you approach 3D modeling and architectural design projects?",
      answer:
        "We leverage advanced software tools to create detailed 3D models and architectural designs, catering to diverse needs such as real estate visualization, product prototyping, and virtual simulations.",
    },
  ];

  return (
    <ReusableBackground>
      <div className=" container mx-auto xl:py-32 lg:py-28 md:py-24 py-20">
        {/* <SimpleBackground> */}
        <h1 className="text-center lg:text-5xl md:text-4xl text-3xl ">
          Frequently Asked Questions
        </h1>

        <div className="grid lg:grid-cols-2 gap-16 content-center mt-16">
          {/* <div>
            <div className="flex gap-2 justify-center items-center">
              <div className="w-[150px] font-serif lg:w-[200px] h-[200px] flex flex-col items-center justify-center bg-blue-300 rounded-tr-[120px] rounded-bl-[120px]">
                <h1 className="font-bold text-xl text-gray-600">Top Talent</h1>
                <h1 className="font-bold  text-4xl">99+</h1>
              </div>
              <Image
                className="w-[150px] lg:w-[200px] h-[200px] rounded-tl-[120px] rounded-br-[120px]"
                src={fq2}
                alt="abc"
                width={250}
                height={200}
                quality={100}
              />{" "}
            </div>

            <div className="flex gap-2 mt-2 justify-center items-center">
              <Image
                className="w-[150px] lg:w-[200px] font-serif h-[200px] rounded-tl-[120px] rounded-br-[120px]"
                src={fq1}
                alt="abc"
                width={250}
                height={200}
                quality={100}
              />{" "}
              <div className="w-[150px] lg:w-[200px] h-[200px] flex flex-col items-center justify-center bg-green-300 rounded-tr-[120px] rounded-bl-[120px]">
                <h1 className="font-bold text-xl text-gray-600">Projects</h1>
                <h1 className="font-bold text-4xl">50+</h1>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col items-center   gap-0 rounded">
            {/* Top Section */}
            <motion.div className="relative flex gap-6 justify-center items-center">
              {/* Left Blob (Water Ripple Effect) */}
              <motion.div
                className="relative w-[180px] lg:w-[240px] shadow-2xl shadow-black h-[220px] flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white"
                animate={shapeAnimation}
              >
                <h1 className="font-bold text-xl">Top Talent</h1>
                <h1 className="font-bold text-5xl">99+</h1>

                {/* Floating Bubbles */}
                <motion.div
                  className="absolute top-[-10px] left-[-10px] w-8 h-8 bg-white rounded-full opacity-30"
                  animate={bubbleAnimation}
                />
                <motion.div
                  className="absolute bottom-[10px] right-[10px] w-6 h-6 bg-white rounded-full opacity-30"
                  animate={bubbleAnimation}
                />
              </motion.div>

              {/* Right Image with Blob Shape */}
              <motion.div
                animate={shapeAnimation}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="w-[180px] lg:w-[240px] h-[220px] object-cover shadow-lg"
                  style={{
                    clipPath:
                      "polygon(25% 15%, 75% 0%, 100% 35%, 85% 75%, 55% 100%, 5% 85%, 0% 45%, 15% 15%)",
                  }}
                  src={fq2}
                  alt="Talent"
                  width={250}
                  height={200}
                  quality={100}
                />
              </motion.div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div className="relative flex gap-6 justify-center items-center">
              {/* Left Image with Blob Shape */}
              <motion.div
                animate={shapeAnimation}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="w-[180px] lg:w-[240px] h-[220px] object-cover shadow-lg"
                  style={{
                    clipPath:
                      "polygon(30% 10%, 70% 0%, 100% 30%, 90% 80%, 60% 100%, 10% 90%, 0% 50%, 10% 20%)",
                  }}
                  src={fq1}
                  alt="Projects"
                  width={250}
                  height={200}
                  quality={100}
                />
              </motion.div>

              {/* Right Blob (Water Ripple Effect) */}
              <motion.div
                className="relative w-[180px] lg:w-[240px] h-[220px] shadow-2xl shadow-black flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-green-700 text-white "
                animate={shapeAnimation}
              >
                <h1 className="font-bold text-xl">Projects</h1>
                <h1 className="font-bold text-5xl">50+</h1>

                {/* Floating Bubbles */}
                <motion.div
                  className="absolute top-[-10px] right-[-10px] w-8 h-8 bg-white rounded-full opacity-30"
                  animate={bubbleAnimation}
                />
                <motion.div
                  className="absolute top-[55px] right-[40px] w-5 h-5 bg-white rounded-full opacity-30"
                  animate={bubbleAnimation}
                />
                <motion.div
                  className="absolute bottom-[10px] left-[10px] w-6 h-6 bg-white rounded-full opacity-30"
                  animate={bubbleAnimation}
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="border rounded-lg p-5 py-8 lg:mt-0 mt-5">
            {" "}
            <Accordion
              motionProps={{
                variants: {
                  enter: {
                    y: 0,
                    opacity: 1,
                    height: "auto",
                    transition: {
                      height: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 1,
                      },
                      opacity: {
                        easings: "ease",
                        duration: 1,
                      },
                    },
                  },
                  exit: {
                    y: -10,
                    opacity: 0,
                    height: 0,
                    transition: {
                      height: {
                        easings: "ease",
                        duration: 0.25,
                      },
                      opacity: {
                        easings: "ease",
                        duration: 0.3,
                      },
                    },
                  },
                },
              }}
            >
              {faqDatas?.map((faqData) => (
                <AccordionItem
                  key={faqData?.id}
                  aria-label={faqData?.question}
                  title={
                    <div className="flex justify-between ">
                      <span className="lg:text-xl text-base  font-bold">
                        {faqData?.question}
                      </span>
                    </div>
                  }
                >
                  {faqData?.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        {/* </SimpleBackground> */}
      </div>
    </ReusableBackground>
  );
};

export default Faq;
