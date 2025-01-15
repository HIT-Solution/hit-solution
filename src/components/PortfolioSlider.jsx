"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../../public/contactlogo.jpeg";
import image2 from "../../public/img.png";
import image3 from "../../public/Software-as-a-service-saas_final-5caef210a00b48f5ac5de4964f72a016.png";
import image5 from "../../public/work-clothes-for-men.jpg";
import image4 from "../../public/custom-software-development-company.jpg";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";

const PortfolioSlider = () => {
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
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className="mx-10 my-10 relative">
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
          390: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 60 },
        }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Link href="/">
              <div>
                <Image
                  className="rounded-md"
                  alt="abc"
                  src={img}
                  width={500}
                  height={500}
                  quality={100}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-gray-300 text-black rounded-full cursor-pointer hover:bg-gray-200">
          <FaChevronLeft />
        </div>
        <div className="custom-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 bg-gray-300 text-black rounded-full cursor-pointer hover:bg-gray-200">
          <FaChevronRight />
        </div>
      </Swiper>
    </div>
  );
};

export default PortfolioSlider;
