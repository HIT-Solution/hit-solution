"use client";
import React from "react";
import SimpleBackground from "../../components/SimpleBackground";
import Image from "next/image";
import fq1 from "../../../public/fq1.png";
import { Accordion, AccordionItem } from "@nextui-org/react";
const Faq = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="">
      <SimpleBackground>
        <h1 className="text-center text-5xl my-16">
          Frequently Asked Questions
        </h1>

        <div className="lg:flex flex-row mt-32">
          <div className="w-2/5">
            <div>
              <div className="flex gap-2">
                <Image
                  className="w-[200px] h-[200px] rounded-tl-full"
                  src={fq1}
                  alt=""
                  width={200}
                  height={200}
                  quality={100}
                />{" "}
                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center bg-blue-400 rounded-tr-full">
                  <h1 className="font-bold text-xl text-gray-600">
                    Top Talent
                  </h1>
                  <h1 className="font-bold text-4xl">100+</h1>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center bg-blue-400 rounded-bl-full">
                  <h1 className="font-bold text-xl text-gray-600"> Projects</h1>
                  <h1 className="font-bold text-4xl">80+</h1>
                </div>
                <Image
                  className="w-[200px] h-[200px] rounded-br-full"
                  src={fq1}
                  alt=""
                  width={200}
                  height={200}
                  quality={100}
                />{" "}
              </div>
            </div>
          </div>
          <div className="w-3/5 border p-5 py-8">
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
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Accordion 1"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Accordion 2"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Accordion 4"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Accordion 5"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </SimpleBackground>
    </div>
  );
};

export default Faq;
