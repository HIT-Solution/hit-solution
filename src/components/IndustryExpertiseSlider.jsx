"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";

import image1 from "../../public/Service_Requirements_bcff041d73.png";
import image2 from "../../public/Software-as-a-service-saas_final-5caef210a00b48f5ac5de4964f72a016.png";
import image3 from "../../public/custom-software-development-company.jpg";
import Image from "next/image";

const IndustryExpertiseSlider = () => {
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
        <SwiperSlide>
          <Link href={"/"}>
            {" "}
            <div className="h-[550px] bg-red-200 p-5 rounded-3xl flex flex-col justify-between items-center">
              <h1 className="text-3xl pt-8 pb-5">Demo1</h1>
              <p className="text-lg">
                We offer end-to-end Quality Assurance, from Performance Testing
                and QA Consulting to Compliance Reviews and System Integration.
              </p>
              <div className="my-10">
                {" "}
                <Image
                  className="rounded-3xl border-4 border-black h-[200px]"
                  src={image1}
                  width={300}
                  height={600}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            {" "}
            <div className="h-[550px] bg-green-200 p-5 rounded-3xl flex flex-col justify-between items-center">
              <h1 className="text-3xl pt-8 pb-5">Demo1</h1>
              <p className="text-lg">
                We offer end-to-end Quality Assurance, from Performance Testing
                and QA Consulting to Compliance Reviews and System Integration.
              </p>
              <div className="my-10">
                {" "}
                <Image
                  className="rounded-3xl border-4 border-black h-[200px]"
                  src={image2}
                  width={300}
                  height={600}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            {" "}
            <div className="h-[550px] bg-blue-200 p-5 rounded-3xl flex flex-col justify-between items-center">
              <h1 className="text-3xl pt-8 pb-5">Demo1</h1>
              <p className="text-lg">
                We offer end-to-end Quality Assurance, from Performance Testing
                and QA Consulting to Compliance Reviews and System Integration.
              </p>
              <div className="my-10">
                {" "}
                <Image
                  className="rounded-3xl border-4 border-black h-[200px]"
                  src={image3}
                  width={300}
                  height={600}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            {" "}
            <div className="h-[550px] bg-orange-200 p-5 rounded-3xl flex flex-col justify-between items-center">
              <h1 className="text-3xl pt-8 pb-5">Demo1</h1>
              <p className="text-lg">
                We offer end-to-end Quality Assurance, from Performance Testing
                and QA Consulting to Compliance Reviews and System Integration.
              </p>
              <div className="my-10">
                {" "}
                <Image
                  className="rounded-3xl border-4 border-black h-[200px]"
                  src={image1}
                  width={300}
                  height={600}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default IndustryExpertiseSlider;
