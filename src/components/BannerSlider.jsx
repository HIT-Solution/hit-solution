"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { FaChevronLeft, FaChevronRight, FaLocationDot } from "react-icons/fa6";
import { FaTv } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { ImLab } from "react-icons/im";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Link from "next/link";

const BannerSlider = () => {
  const swiperRef = useRef(null);

  // Animation properties
  const glowAnimation = {
    animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  };

  const waveAnimation = {
    initial: {
      d: "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    },
    animate: {
      d: [
        "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        "M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,165.3C672,160,768,192,864,197.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
      ],
    },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  };

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

  return (
    <div className="lg:mx-10 mx-5 -translate-y-24 relative">
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
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="mySwiper"
      >
        {/* Slides */}
        {[
          { Icon: FaTv, label: "Portfolio", link: "/" },
          {
            Icon: FaLocationDot,
            label: "Ukilzone.com",
            link: "https://www.ukilzone.com",
          },
          {
            Icon: GiSkills,
            label: "SkillHub",
            link: "https://eloquent-stardust-e9120f.netlify.app/?fbclid=IwZXh0bgNhZW0CMTEAAR1XuNWT9L-glggdNhc8vsixDRyVH_V3MZLBOqqtjw44Yl5O4gyK1sMm898_aem_LRkWmYzGLTgd54ht_LccAQ",
          },
          {
            Icon: FaHome,
            label: "Bashakhuji.com",
            link: "https://strong-yeot-422847.netlify.app/",
          },
          { Icon: DiVisualstudio, label: "AR Creative studio", link: "/" },
          { Icon: ImLab, label: "HIT Labs", link: "/" },
        ].map(({ Icon, label, link }, index) => (
          <SwiperSlide key={index}>
            <Link target="_blank" href={link}>
              <div className="relative h-[230px] overflow-hidden bg-gradient-to-br from-gray-900 to-teal-500 rounded-md">
                <motion.div
                  className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20"
                  animate={glowAnimation.animate}
                  transition={glowAnimation.transition}
                />
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 1440 320"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    fill="rgba(0, 128, 128, 0.1)"
                    initial={waveAnimation.initial}
                    animate={waveAnimation.animate}
                    transition={waveAnimation.transition}
                  />
                </svg>
                <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4">
                  <div className="flex flex-col gap-5 justify-center items-center text-2xl text-white">
                    <Icon size={60} />
                    <h1 className="flex items-center">
                      {label} <IoIosArrowForward />
                    </h1>
                  </div>
                </div>
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

export default BannerSlider;
