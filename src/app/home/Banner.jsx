"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import BannerSlider from "../../components/BannerSlider";
import { Spinner } from "@nextui-org/react";

const Banner = () => {
  const titleAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 10,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.04,
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  const paragraphAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 1 },
    },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 2, duration: 0.6 },
    },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  const AnimatedText = ({ text, className = "" }) => (
    <motion.span
      className={`inline-block ${className}`}
      variants={titleAnimation}
      initial="hidden"
      animate={"visible"}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          variants={letterAnimation}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <div>
      <div className="relative w-full h-[650px] overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay */}
        <motion.div className="absolute inset-0 flex flex-col mt-32 items-center text-white text-center mx-5">
          <div className="text-4xl md:text-7xl font-bold">
            <AnimatedText text="HIT SOLUTION" className="text-white" />
            <br />
            <AnimatedText
              text="Empowering your tech"
              className="text-teal-400"
            />
            <br />
            <AnimatedText
              text="with innovative IT solutions."
              className="text-teal-400"
            />
          </div>
          <motion.div
            className="text-gray-300 my-8 max-w-2xl"
            variants={paragraphAnimation}
            initial="hidden"
            animate={"visible"}
          >
            At <span className="text-teal-400">Hit Solution</span>, we power
            your vision with next-level tech, IoT, cloud, and immersive AR
            solutions—driving innovation, precision, and growth for your brand.
          </motion.div>

          <div className="flex gap-10">
            <motion.button
              className="bg-teal-600 flex items-center justify-center gap-1 hover:bg-teal-600 text-white py-2 px-4 rounded transition duration-300"
              variants={buttonAnimation}
              initial="hidden"
              animate={"visible"}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              View Our Products
              <IoIosArrowForward size={20} />
            </motion.button>
            <motion.button
              className="bg-teal-600 hover:bg-teal-600 text-white py-2 px-4 flex items-center justify-center gap-1 rounded transition duration-300"
              variants={buttonAnimation}
              initial="hidden"
              animate={"visible"}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              Hire The Best Team <IoIosArrowForward size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
