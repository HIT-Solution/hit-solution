"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight, FaLocationDot } from "react-icons/fa6";
import { FaExternalLinkAlt, FaTv } from "react-icons/fa";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Link from "next/link";
import { Button } from "@nextui-org/button";

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
        {
          title: "MVP Development",
          description: "Set up secure connections and collect real-time data.",
          link: "/",
          color: "bg-orange-200",
          TextColor: "text-orange-400",
        },
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
    <div className="mx-10 relative">
      {/* Custom Navigation Buttons positioned above Swiper on the right side */}
      <div className="absolute -top-8 right-4 z-10 flex space-x-2">
        <div className="custom-prev flex items-center justify-center w-8 h-8 bg-gray-300 text-black rounded-full cursor-pointer hover:bg-gray-200">
          <FaChevronLeft />
        </div>
        <div className="custom-next flex items-center justify-center w-8 h-8 bg-gray-300 text-black rounded-full cursor-pointer hover:bg-gray-200">
          <FaChevronRight />
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        freeMode={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, FreeMode, Navigation]}
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
              <h1 className="text-4xl text-white text-center my-3">
                {item.name}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {item.data.map((item, index) => (
                  <div
                    key={item.color}
                    className={`${item.color} rounded-2xl h-[450px] hover:cursor-pointer overflow-hidden py-10 group relative`}
                  >
                    <div className="flex justify-between px-5">
                      <h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M8.66602 19.8887C8.66602 15.6747 10.2639 11.6333 13.1082 8.65353C15.9525 5.67379 19.8102 3.99978 23.8327 3.99978C27.8551 3.99978 31.7128 5.67379 34.5571 8.65353C37.4014 11.6333 38.9993 15.6747 38.9993 19.8887L23.8327 19.8887L8.66602 19.8887Z"
                            fill="#0C0A25"
                          ></path>
                          <path
                            d="M0 19.8887C-3.52568e-07 23.9216 1.60206 27.7893 4.45376 30.641C7.30545 33.4927 11.1732 35.0948 15.2061 35.0948C19.239 35.0948 23.1067 33.4927 25.9584 30.641C28.8101 27.7893 30.4122 23.9216 30.4122 19.8887L15.2061 19.8887L0 19.8887Z"
                            fill="#0C0A25"
                          ></path>
                        </svg>
                      </h1>
                      <h1
                        className={`font-bold text-9xl ${item.TextColor} opacity-40`}
                      >
                        {index + 1}
                      </h1>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h1 className="text-3xl transform group-hover:-translate-y-20 transition-transform duration-300">
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
