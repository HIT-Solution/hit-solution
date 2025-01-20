"use client";
import React from "react";
// import SimpleBackground from "../../components/SimpleBackground";
import Image from "next/image";
import fq1 from "../../../public/fq1.png";

import { Accordion, AccordionItem } from "@nextui-org/react";
import ReusableBackground from "@/components/ReusableBackground";
const Faq = () => {
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
      <div className="pb-20 container mx-auto py-24">
        {/* <SimpleBackground> */}
        <h1 className="text-center lg:text-5xl md:text-4xl text-3xl ">
          Frequently Asked Questions
        </h1>

        <div className="grid lg:grid-cols-2 gap-16 content-center mt-16">
          <div>
            <div className="flex gap-2 justify-center items-center">
              <div className="w-[150px] lg:w-[200px] h-[200px] flex flex-col items-center justify-center bg-blue-300 rounded-tr-[120px] rounded-bl-[120px]">
                <h1 className="font-bold text-xl text-gray-600">Top Talent</h1>
                <h1 className="font-bold text-4xl">100+</h1>
              </div>
              <Image
                className="w-[150px] lg:w-[200px] h-[200px] rounded-tl-[120px] rounded-br-[120px]"
                src={fq1}
                alt="abc"
                width={250}
                height={200}
                quality={100}
              />{" "}
            </div>

            <div className="flex gap-2 mt-2 justify-center items-center">
              <Image
                className="w-[150px] lg:w-[200px] h-[200px] rounded-tl-[120px] rounded-br-[120px]"
                src={fq1}
                alt="abc"
                width={250}
                height={200}
                quality={100}
              />{" "}
              <div className="w-[150px] lg:w-[200px] h-[200px] flex flex-col items-center justify-center bg-green-300 rounded-tr-[120px] rounded-bl-[120px]">
                <h1 className="font-bold text-xl text-gray-600">Projects</h1>
                <h1 className="font-bold text-4xl">80+</h1>
              </div>
            </div>
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
                      <span className="text-xl font-bold">
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
