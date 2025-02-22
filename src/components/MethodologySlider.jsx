"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight, FaLocationDot } from "react-icons/fa6";
import { FaExternalLinkAlt, FaTv } from "react-icons/fa";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { LiaQuinscape } from "react-icons/lia";

import { motion } from "framer-motion";
import ReusableBackground from "./ReusableBackground";

const MethodologySlider = () => {
  const swiperRef = useRef(null);
  // Set up hover events to control autoplay
  useEffect(() => {
    const handleMouseEnter = () => {
      if (swiperRef.current?.autoplay) {
        swiperRef.current.autoplay.stop();
      }
    };

    const handleMouseLeave = () => {
      if (swiperRef.current?.autoplay) {
        swiperRef.current.autoplay.start();
      }
    };

    if (swiperRef.current?.el) {
      swiperRef.current.el.addEventListener("mouseenter", handleMouseEnter);
      swiperRef.current.el.addEventListener("mouseleave", handleMouseLeave);
    }

    // Clean up event listeners on unmount
    return () => {
      if (swiperRef.current?.el) {
        swiperRef.current.el.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        swiperRef.current.el.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
    };
  }, []);
  const data = [
    {
      name: "Internet of Things (IoT) Solutions",
      data: [
        {
          title: "Requirements Analysis",
          description: "Understand the project details from client.",
          link: "/",
          color: "bg-red-200",
          TextColor: "text-red-400",
        },
        {
          title: "Solution Design",
          description:
            "Customize IoT frameworks and choose compatible devices.",
          link: "/",
          color: "bg-green-200",
          TextColor: "text-green-400",
        },
        // {
        //   title: "MVP Development",
        //   description: "Set up secure connections and collect real-time data.",
        //   link: "/",
        //   color: "bg-orange-200",
        //   TextColor: "text-orange-400",
        // },
        {
          title: "Dashboard & Control",
          description:
            "Develop an interface for monitoring and controlling devices.",
          link: "/",
          color: "bg-blue-200",
          TextColor: "text-blue-400",
        },
        {
          title: "Maintenance & Updates",
          description:
            "Provide regular updates and maintain device functionality.",
          link: "/",
          color: "bg-violet-200",
          TextColor: "text-violet-400",
        },
      ],
    },
    {
      name: "Softwares & Digital Product",
      data: [
        {
          title: "Discovery & Planning",
          description:
            "Gather requirements, define scope, and set project timelines.",
          link: "/",
          color: "bg-red-200",
          TextColor: "text-red-400",
        },
        {
          title: "Design & Prototyping",
          description:
            "Create user-centered designs and interactive prototypes.",
          link: "/",
          color: "bg-green-200",
          TextColor: "text-green-400",
        },
        {
          title: "Development & Testing",
          description:
            "Use agile development and rigorous testing to ensure quality.",
          link: "/",
          color: "bg-orange-200",
          TextColor: "text-orange-400",
        },
        {
          title: "Launch & Support",
          description: "Deploy the product with ongoing support and updates.",
          link: "/",
          color: "bg-blue-200",
          TextColor: "text-blue-400",
        },
      ],
    },
    {
      name: "Cloud Computing Solutions",
      data: [
        {
          title: "Assessment & Strategy",
          description:
            "Evaluate needs and design a scalable cloud architecture.",
          link: "/",
          color: "bg-red-200",
          TextColor: "text-red-400",
        },
        {
          title: "Migration & Integration",
          description:
            "Securely migrate data and integrate with existing systems.",
          link: "/",
          color: "bg-green-200",
          TextColor: "text-green-400",
        },
        {
          title: "Monitoring & Optimization",
          description: "Continuously monitor performance and optimize costs.",
          link: "/",
          color: "bg-orange-200",
          TextColor: "text-orange-400",
        },
        {
          title: "Security & Maintenance",
          description: "Ensure data security and provide ongoing updates.",
          link: "/",
          color: "bg-blue-200",
          TextColor: "text-blue-400",
        },
      ],
    },

    {
      name: "Product Design",
      data: [
        {
          title: "Research & Ideation",
          description: "Conduct research and define user needs",
          link: "/",
          color: "bg-red-200",
          TextColor: "text-red-400",
        },
        {
          title: "Prototyping & User Journey",
          description: "Map user journeys and create interactive prototypes.",
          link: "/",
          color: "bg-green-200",
          TextColor: "text-green-400",
        },
        {
          title: "Design & Feedback",
          description: "Develop visual designs and refine based on feedback.",
          link: "/",
          color: "bg-orange-200",
          TextColor: "text-orange-400",
        },
        {
          title: "Finalization & Handoff",
          description: "Prepare assets and hand off to development.",
          link: "/",
          color: "bg-blue-200",
          TextColor: "text-blue-400",
        },
      ],
    },
    {
      name: "Quality Assurance",
      data: [
        {
          title: "Test Planning",
          description: " Develop a test plan aligned with requirements.",
          link: "/",
          color: "bg-red-200",
          TextColor: "text-red-400",
        },
        {
          title: "Manual & Automated Testing",
          description: "Conduct comprehensive tests for accuracy.",
          link: "/",
          color: "bg-green-200",
          TextColor: "text-green-400",
        },
        {
          title: "Bug Tracking & Reporting",
          description: "Document issues and work on resolutions.",
          link: "/",
          color: "bg-orange-200",
          TextColor: "text-orange-400",
        },
        {
          title: "Final Verification",
          description: "Ensure product readiness with final checks",
          link: "/",
          color: "bg-blue-200",
          TextColor: "text-blue-400",
        },
      ],
    },
    {
      name: "Tech Consultancy and IT Support",
      data: [
        {
          title: "Assessment & Strategy",
          description: " Analyze needs and create a tech strategy.",
          link: "/",
          color: "bg-red-200",
          TextColor: "text-red-400",
        },
        {
          title: "Implementation & Optimization",
          description: "Deploy solutions and optimize performance.",
          link: "/",
          color: "bg-green-200",
          TextColor: "text-green-400",
        },
        {
          title: " Support & Troubleshooting",
          description: "Provide ongoing IT support and issue resolution.",
          link: "/",
          color: "bg-orange-200",
          TextColor: "text-orange-400",
        },
        {
          title: "Training & Documentation",
          description: "Equip teams with knowledge and resources.",
          link: "/",
          color: "bg-blue-200",
          TextColor: "text-blue-400",
        },
      ],
    },
    {
      name: "Digital Marketing",
      data: [
        {
          title: "Research & Strategy",
          description: "Understand the market and define marketing goals.",
          link: "/",
          color: "bg-red-200",
          TextColor: "text-red-400",
        },
        {
          title: "Content Creation & Campaigns",
          description: "Develop engaging content and run targeted campaigns.",
          link: "/",
          color: "bg-green-200",
          TextColor: "text-green-400",
        },
        {
          title: " Analytics & Optimization",
          description: "Track performance and adjust strategies.",
          link: "/",
          color: "bg-orange-200",
          TextColor: "text-orange-400",
        },
        {
          title: "Reporting & Insights",
          description:
            "Provide data-driven reports for continuous improvement.",
          link: "/",
          color: "bg-blue-200",
          TextColor: "text-blue-400",
        },
      ],
    },
    {
      name: "AR Creative Studio",
      data: [
        {
          title: "Concept Development",
          description: "Define AR objectives and project scope.",
          link: "/",
          color: "bg-red-200",
          TextColor: "text-red-400",
        },
        {
          title: "3D Modeling & AR Development",
          description: "Create assets and develop AR functionality.",
          link: "/",
          color: "bg-green-200",
          TextColor: "text-green-400",
        },
        {
          title: "Testing & Refinement",
          description: "Ensure smooth performance and user experience.",
          link: "/",
          color: "bg-orange-200",
          TextColor: "text-orange-400",
        },
        {
          title: "Deployment & Support",
          description: "Launch on target platforms with ongoing support.",
          link: "/",
          color: "bg-blue-200",
          TextColor: "text-blue-400",
        },
      ],
    },
  ];

  return (
    <div className="xl:mx-10 mx-auto relative">
      {/* Custom Navigation Buttons positioned above Swiper on the right side */}
      <div className="absolute z-10 flex xl:right-52 lg:right-28 right-0 xl:space-x-[700px] lg:space-x[400px] space-x-12">
        <div className="custom-prev flex items-center justify-center w-8 h-8 bg-gray-300 text-black rounded-full cursor-pointer hover:bg-gray-200">
          <FaChevronLeft />
        </div>
        <div className="custom-next flex items-center justify-center w-8 h-8 bg-gray-300 text-black rounded-full cursor-pointer hover:bg-gray-200">
          <FaChevronRight />
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 30 },
          390: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 1, spaceBetween: 40 },
          1024: { slidesPerView: 1, spaceBetween: 60 },
        }}
        className="mySwiper"
      >
        {/* Slides */}

        {data.map((item) => (
          <SwiperSlide key={item.name}>
            <div className="relative overflow-hidden">
              <h1 className="lg:text-4xl md:text-3xl xl:pt-0 pt-12 text-2xl text-white text-center xl:pl-[500px]">
                {item.name}
              </h1>
              <div className="grid sm:grid-cols-1 gap-5 mx-auto py-2 pt-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:px-52 lg:px-32 md:px-2">
                {item.data.map((item, index) => (
                  <div
                    key={item.color}
                    className={`${item.color} rounded-2xl mx-auto w-80 h-[450px] hover:cursor-pointer overflow-hidden py-10 group relative`}
                  >
                    <div className="flex justify-between px-5">
                      <h1>
                        <motion.img
                          className="w-16 h-16"
                          src="/ioncercel.png"
                          alt=""
                          animate={{ rotate: -360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                          }}
                        />
                      </h1>
                      <h1
                        className={`font-bold font-serif lg:text-9xl md:text-8xl text-7xl ${item.TextColor} opacity-40`}
                      >
                        0{index + 1}
                      </h1>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h1 className="lg:text-3xl md:text-2xl text-2xl transform group-hover:-translate-y-12 transition-transform duration-300">
                        {item.title}
                      </h1>
                      <div className="text-lg transform translate-y-[270px] group-hover:translate-y-0 transition-transform duration-400">
                        <p>{item.description}</p>
                        <Link href={item.link}>
                          <Button className="text-black border-2 mt-2 border-black bg-transparent">
                            Explore Now <FaExternalLinkAlt />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MethodologySlider;
