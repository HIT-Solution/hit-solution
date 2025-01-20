"use client";
import React from "react";
import { motion } from "framer-motion";

const TitleFontStyle = ({ title }) => {
  return (
    <div>
      <motion.div
        style={{
          background:
            "linear-gradient(90deg, #008080, #20B2AA, #5F9EA0, #B0C4DE, #D3D3D3, #008080)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 2, // Smooth gradient transition over 3 seconds
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {title}
      </motion.div>
    </div>
  );
};

export default TitleFontStyle;
