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
        <h1 className="text-center text-5xl my-28">
          Frequently Asked Questions
        </h1>

        <div className="grid lg:grid-cols-2 gap-16 content-center mt-32">
          <div>
            <div className="flex gap-2 justify-center items-center">
              <div className="w-[150px] lg:w-[200px] h-[200px] flex flex-col items-center justify-center bg-blue-300 rounded-tr-[120px] rounded-bl-[120px]">
                <h1 className="font-bold text-xl text-gray-600">Top Talent</h1>
                <h1 className="font-bold text-4xl">100+</h1>
              </div>
              <Image
                className="w-[150px] lg:w-[200px] h-[200px] rounded-tl-[120px] rounded-br-[120px]"
                src={fq1}
                alt=""
                width={250}
                height={200}
                quality={100}
              />{" "}
            </div>

            <div className="flex gap-2 mt-2 justify-center items-center">
              <Image
                className="w-[150px] lg:w-[200px] h-[200px] rounded-tl-[120px] rounded-br-[120px]"
                src={fq1}
                alt=""
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
