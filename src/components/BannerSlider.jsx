"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaTv } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { ImLab } from "react-icons/im";
// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Link from "next/link";

const BannerSlider = () => {
  const glowAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.4, 0.3],
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
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
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
  return (
    <div className="mx-10 mb-10 -translate-y-28">
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        modules={[Autoplay, FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href={"/"}>
            {" "}
            <div
              className={`relative h-[230px] overflow-hidden bg-gradient-to-br from-black to-teal-900 rounded-md`}
            >
              {/* Circular glow */}
              <motion.div
                className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20"
                animate={glowAnimation.animate}
                transition={glowAnimation.transition}
              />

              {/* Wavy lines */}
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

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4">
                <div className="flex flex-col gap-5 justify-center items-center text-2xl text-white ">
                  {" "}
                  <FaTv size={60} />
                  <h1 className="flex items-center">
                    Portfolio <IoIosArrowForward />
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            {" "}
            <div
              className={`relative h-[230px] overflow-hidden bg-gradient-to-br from-black to-teal-900 rounded-md`}
            >
              {/* Circular glow */}
              <motion.div
                className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20"
                animate={glowAnimation.animate}
                transition={glowAnimation.transition}
              />

              {/* Wavy lines */}
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

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4">
                <div className="flex flex-col gap-5 justify-center items-center text-2xl text-white ">
                  {" "}
                  <FaLocationDot size={60} />
                  <h1 className="flex items-center">
                    Ukilzone.com <IoIosArrowForward />
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            {" "}
            <div
              className={`relative h-[230px] overflow-hidden bg-gradient-to-br from-black to-teal-900 rounded-md`}
            >
              {/* Circular glow */}
              <motion.div
                className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20"
                animate={glowAnimation.animate}
                transition={glowAnimation.transition}
              />

              {/* Wavy lines */}
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

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4">
                <div className="flex flex-col gap-5 justify-center items-center text-2xl text-white ">
                  {" "}
                  <GiSkills size={60} />
                  <h1 className="flex items-center">
                    SkillHub <IoIosArrowForward />
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            {" "}
            <div
              className={`relative h-[230px] overflow-hidden bg-gradient-to-br from-black to-teal-900 rounded-md`}
            >
              {/* Circular glow */}
              <motion.div
                className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20"
                animate={glowAnimation.animate}
                transition={glowAnimation.transition}
              />

              {/* Wavy lines */}
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

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4">
                <div className="flex flex-col gap-5 justify-center items-center text-2xl text-white ">
                  {" "}
                  <FaHome size={60} />
                  <h1 className="flex items-center">
                    Bashakhuji.com <IoIosArrowForward />
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            {" "}
            <div
              className={`relative h-[230px] overflow-hidden bg-gradient-to-br from-black to-teal-900 rounded-md`}
            >
              {/* Circular glow */}
              <motion.div
                className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20"
                animate={glowAnimation.animate}
                transition={glowAnimation.transition}
              />

              {/* Wavy lines */}
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

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4">
                <div className="flex flex-col gap-5 justify-center items-center text-2xl text-white ">
                  {" "}
                  <DiVisualstudio size={60} />
                  <h1 className="flex items-center">
                    AR Creative studio <IoIosArrowForward />
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/"}>
            {" "}
            <div
              className={`relative h-[230px] overflow-hidden bg-gradient-to-br from-black to-teal-900 rounded-md`}
            >
              {/* Circular glow */}
              <motion.div
                className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20"
                animate={glowAnimation.animate}
                transition={glowAnimation.transition}
              />

              {/* Wavy lines */}
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

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4">
                <div className="flex flex-col gap-5 justify-center items-center text-2xl text-white ">
                  {" "}
                  <ImLab size={60} />
                  <h1 className="flex items-center">
                    HIT Labs <IoIosArrowForward />
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
