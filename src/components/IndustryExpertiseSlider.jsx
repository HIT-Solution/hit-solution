"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";

// import image1 from "../../public/Service_Requirements_bcff041d73.png";
// import image2 from "../../public/Software-as-a-service-saas_final-5caef210a00b48f5ac5de4964f72a016.png";
// import image3 from "../../public/custom-software-development-company.jpg";
import Image from "next/image";

const IndustryExpertiseSlider = () => {
  const [demoProjectData, setDemoProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  // const slidesData = [
  //   {
  //     id: 1,
  //     projectUrl: "https://www.youtube.com",
  //     imgUrl: image1,
  //     desc: "We offer end-to-end Quality Assurance, from Performance Testing and QA Consulting to Compliance Reviews and System Integration.",
  //   },
  //   {
  //     id: 2,
  //     projectUrl: "https://www.youtube.com/",
  //     imgUrl: image2,
  //     desc: "Accelerate your development lifecycle with our expert DevOps practices and infrastructure automation services.",
  //   },
  //   {
  //     id: 3,
  //     projectUrl: "https://www.youtube.com/",
  //     imgUrl: image3,
  //     desc: "Unlock the power of data analytics to make informed decisions and drive business growth.",
  //   },
  //   {
  //     id: 4,
  //     projectUrl: "https://www.youtube.com/",
  //     imgUrl: image2,
  //     desc: "Enhance your digital presence with our cutting-edge web and mobile application development solutions.",
  //   },
  //   {
  //     id: 5,
  //     projectUrl: "https://www.youtube.com/",
  //     imgUrl: image1,
  //     desc: "Secure your applications with our comprehensive cybersecurity services and compliance assurance.",
  //   },
  // ];

  //  Get Demo Project data
  useEffect(() => {
    const fetchDemoData = async () => {
      try {
        const response = await fetch("/api/demoProjects");
        const data = await response.json();
        setDemoProjectData(data.result);
        setLoading(false);
        console.log(data.result);
      } catch (error) {
        console.error("Error fetching Demo data :", error);
      }
    };

    fetchDemoData();
  }, []);

  // Predefined array of background colors
  const bgColors = [
    "bg-red-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-purple-200",
  ];

  return (
    <div className="mt-32 mx-5 lg:mx-10">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <Swiper>
          {demoProjectData?.map((slide, index) => (
            <SwiperSlide key={slide._id}>
              <Link target="_blank" href={slide.projectUrl}>
                <div
                  className={`h-[550px] ${
                    bgColors[index % bgColors.length]
                  } p-5 rounded-3xl flex flex-col justify-between items-center`}
                >
                  <h1 className="text-3xl pt-8 pb-5">Demo {index + 1}</h1>
                  <p className="text-lg">{slide.desc}</p>
                  <div className="my-10">
                    <img
                      className="rounded-3xl border-4 border-black h-[300px]"
                      src={slide.imgUrl}
                      width={350}
                      height={600}
                      alt={`Project ${slide.id}`}
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Swiper>
    </div>
  );
};

export default IndustryExpertiseSlider;
