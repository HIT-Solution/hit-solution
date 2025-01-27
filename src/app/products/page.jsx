"use client";

import ReusableBackground from "@/components/ReusableBackground";
import TitleFontStyle from "@/components/TitleFontStyle";
import { motion } from "framer-motion";
import bannerImg from "../../../public/banner/banner2.jpeg";
import Image from "next/image";

export default function ProductPage() {
  const slidesData = [
    {
      id: 1,
      title: "UkilZone",
      projectUrl: "https://www.ukilzone.com/",
      imgUrl: "https://i.ibb.co/58NXnjg/UlikZone.png",
      desc: "We offer end-to-end UkilZone services, from Custom Website Design and Development to Integration and Maintenance.",
    },
    {
      id: 2,
      title: "SkillHub",
      projectUrl:
        "https://eloquent-stardust-e9120f.netlify.app/?fbclid=IwZXh0bgNhZW0CMTEAAR1XuNWT9L-glggdNhc8vsixDRyVH_V3MZLBOqqtjw44Yl5O4gyK1sMm898_aem_LRkWmYzGLTgd54ht_LccAQ",
      imgUrl: "https://i.ibb.co/BBBgP2P/SkillHub.png",
      desc: "We offer end-to-end SkillHub services, from Course Creation and Learning Management to Integration and Support.",
    },
    {
      id: 3,
      title: "Basha Khuji",
      projectUrl: "https://strong-yeot-422847.netlify.app/",
      imgUrl: "https://i.ibb.co/zHsJBdZ/Screenshot-2025-01-16-124601.png",
      desc: "We offer end-to-end BashaKhuji services, from Property Management and Leasing to Renovation and Support.",
    },
    {
      id: 4,
      title: "Portfolio",
      projectUrl: "https://hasansit.com/",
      imgUrl: "https://i.ibb.co/tqfDDbN/Screenshot-2025-01-16-125105.png",
      desc: "Showcasing Innovative Designs, Seamless Integrations, and End-to-End Solutions for Every Client Need.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-96 md:h-[500px] bg-teal-600 overflow-hidden"
      >
        <Image
          src={bannerImg}
          alt="img"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 pt-32 flex flex-col items-center justify-center text-center p-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            <TitleFontStyle title={" Discover Our Exclusive Products"} />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mt-4"
          >
            Up to 50% OFF on premium products. Limited time only!
          </motion.p>
        </div>
      </motion.div>

      {/* Product Section */}
      <ReusableBackground>
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Unique Product Cards with Hover Animation */}
            {slidesData.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-gradient-to-br from-gray-50 to-gray-200 p-6 rounded-xl shadow-xl border border-gray-300 backdrop-blur-lg overflow-hidden"
              >
                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg relative"
                >
                  <img
                    src={product.imgUrl}
                    alt={`Product ${product.id}`}
                    className="w-full h-48 object-cover rounded-md"
                  />

                  {/* Hover Effect (Bottom-to-Top Cool Reveal) */}
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 bg-teal-800 bg-opacity-80 flex flex-col justify-center items-center text-white p-4 opacity-0 hover:opacity-100 transition-all duration-700"
                  >
                    <p className="text-lg font-semibold">Premium Quality</p>
                    <p className="text-sm">100% Secure And Esay</p>
                  </motion.div>
                </motion.div>

                {/* Product Details */}
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 mt-2">{product.desc}</p>

                {/* Details Button */}
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={product.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
                    >
                      View Project
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ReusableBackground>
    </div>
  );
}
