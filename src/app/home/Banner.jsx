"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import BannerSlider from "../../components/BannerSlider";
import { Spinner } from "@nextui-org/react";

const Banner = () => {
  // State to track if the component has mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.04,
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
      transition: { delay: 1.5, duration: 0.8 },
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
      animate={isMounted ? "visible" : "hidden"}
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
  if (!isMounted)
    return (
      <div className="flex justify-center items-center gap-4 min-h-screen bg-gradient-to-br from-black to-teal-800">
        <Spinner color="default" />
        <Spinner color="primary" />
        <Spinner color="secondary" />
        <Spinner color="success" />
        <Spinner color="warning" />
        <Spinner color="danger" />
      </div>
    );
  return (
    <div suppressHydrationWarning={true}>
      <div className="relative w-full h-[650px] overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline // Added for better autoplay support
        >
          <source src="/videos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay */}
        <motion.div className="absolute inset-0 flex flex-col items-center mt-10 text-white text-center">
          <div className="text-5xl md:text-7xl font-bold  my-6">
            <AnimatedText text="Hit Solution" className="text-white" />
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
            className="text-gray-300 mb-8 max-w-2xl"
            variants={paragraphAnimation}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"} // Start animation only if mounted
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
              animate={isMounted ? "visible" : "hidden"} // Start animation only if mounted
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
              animate={isMounted ? "visible" : "hidden"} // Start animation only if mounted
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
