import Image from "next/image";
import React from "react";
import software from "../../../public/app-development.png";
import qa from "../../../public/quality-assurance.png";
import design from "../../../public/product-design.png";
import support from "../../../public/technical-support.png";
import iot from "../../../public/iot.png";
import social from "../../../public/social-media.png";
import cloud from "../../../public/cloud-storage.png";
import studio from "../../../public/studio.png";
import ReusableBackground from "@/components/ReusableBackground";
import TitleFontStyle from "@/components/TitleFontStyle";

// import SimpleBackground from "../../components/SimpleBackground";

const Services = () => {
  // const services = [
  //   {
  //     id: 1,
  //     title: "Software Development & Digital Product",
  //     description:
  //       "We create innovative software solutions across Mobile, Web, Desktop, and Cloud with expertise in AI, UI/UX, and API integration.",
  //     image: software,
  //   },
  //   {
  //     id: 2,
  //     title: "Cloud Computing Solutions",
  //     description:
  //       "We offer end-to-end Cloud solutions, from Server Setup and AI Development to DevOps, API Integration, and Cloud Security.",
  //     image: cloud,
  //   },
  //   {
  //     id: 3,
  //     title: "Internet of Things (IoT) Solutions",
  //     description:
  //       "We deliver complete IoT solutions, from architecture and product development to PCB design, firmware, 3D modeling, and robotics.",
  //     image: iot,
  //   },
  //   {
  //     id: 4,
  //     title: "Product Design",
  //     description:
  //       "We specialize in Product Design, offering 3D Modeling, Prototyping, Industrial Design, and MVP Development to bring your ideas to life.",
  //     image: design,
  //   },
  //   {
  //     id: 5,
  //     title: "Quality Assurance",
  //     description:
  //       "We offer end-to-end Quality Assurance, from Performance Testing and QA Consulting to Compliance Reviews and System Integration.",
  //     image: qa,
  //   },
  //   {
  //     id: 6,
  //     title: "Tech Consultancy and IT Support",
  //     description:
  //       "We provide full-spectrum IT consultancy and support, from network setup and cybersecurity to system migration and data recovery.",
  //     image: support,
  //   },
  //   {
  //     id: 7,
  //     title: "Digital Marketing",
  //     description:
  //       "We offer complete Digital Marketing services, including SEO, Social Media Marketing, Content Marketing, and strategic consulting to boost your online presence.",
  //     image: social,
  //   },
  //   {
  //     id: 8,
  //     title: "AR Creative Studio",
  //     description:
  //       "Our AR Creative Studio delivers immersive branding, 3D design, VR/AR experiences, and high-quality motion graphics for compelling visual storytelling.",
  //     image: studio,
  //   },
  // ];

  return (
    <ReusableBackground>
      <div className="container mx-auto py-32">
        <div className="relative  flex justify-center items-center">
          {/* Animated Background */}
          {/* <div
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 via-gray-600 to-teal-600 
      opacity-30 blur-2xl animate-[gradientMove_6s_infinite_alternate]"
        ></div> */}
          {/* Main Text */}
          <h1 className="text-4xl flex gap-2 md:text-5xl font-extrabold pb-12">
            Our <TitleFontStyle title={"Services"} />
          </h1>
        </div>

        <div className=" lg:px-32 gap-2 lg:grid md:grid justify-center lg:grid-cols-4 md:grid-cols-3 ">
          {/* Row 1 - Single Hexagon (Centered) */}

          <div className="hex-card mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0884B5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[500ms]"></div>
            <Image
              src={software}
              alt="Software Development"
              height={50}
              width={50}
              className="relative z-10"
            />
            <h1 className="hex-title relative z-10 text-gray-800 group-hover:text-white transition-colors duration-[500ms]">
              Software Development
            </h1>
            <p className="hex-desc relative z-10 text-gray-600 group-hover:text-white transition-colors duration-[500ms]">
              We create innovative software solutions across Mobile, Web,
              Desktop, and Cloud with expertise in AI, UI/UX, and API
              integration.
            </p>
          </div>

          {/* Row 2 - Three Hexagons */}

          <div className="hex-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0884B5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[500ms]"></div>
            <Image
              src={cloud}
              alt="Cloud Computing"
              height={50}
              width={50}
              className="relative z-10"
            />
            <h1 className="hex-title relative z-10 text-gray-800 group-hover:text-white transition-colors duration-[500ms]">
              Cloud Computing
            </h1>
            <p className="hex-desc relative z-10 text-gray-600 group-hover:text-white transition-colors duration-[500ms]">
              We offer end-to-end Cloud solutions, from Server Setup and AI
              Development to DevOps, API Integration, and Cloud Security.
            </p>
          </div>

          <div className="hex-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0884B5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[500ms]"></div>
            <Image
              src={iot}
              alt="IoT Solutions"
              height={50}
              width={50}
              className="relative z-10"
            />
            <h1 className="hex-title relative z-10 text-gray-800 group-hover:text-white transition-colors duration-[500ms]">
              IoT Solutions
            </h1>
            <p className="hex-desc relative z-10 text-gray-600 group-hover:text-white transition-colors duration-[500ms]">
              We deliver complete IoT solutions, from architecture and product
              development to PCB design, firmware, 3D modeling, and robotics.
            </p>
          </div>

          <div className="hex-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0884B5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[500ms]"></div>
            <Image
              src={design}
              alt="Product Design"
              height={50}
              width={50}
              className="relative z-10"
            />
            <h1 className="hex-title relative z-10 text-gray-800 group-hover:text-white transition-colors duration-[500ms]">
              Product Design
            </h1>
            <p className="hex-desc relative z-10 text-gray-600 group-hover:text-white transition-colors duration-[500ms]">
              We specialize in Product Design, offering 3D Modeling,
              Prototyping, Industrial Design, and MVP Development to bring your
              ideas to life.
            </p>
          </div>

          {/* Row 3 - Three Hexagons */}

          <div className="hex-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0884B5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[500ms]"></div>
            <Image
              src={qa}
              alt="Quality Assurance"
              height={50}
              width={50}
              className="relative z-10"
            />
            <h1 className="hex-title relative z-10 text-gray-800 group-hover:text-white transition-colors duration-[500ms]">
              Quality Assurance
            </h1>
            <p className="hex-desc relative z-10 text-gray-600 group-hover:text-white transition-colors duration-[500ms]">
              We offer end-to-end Quality Assurance, from Performance Testing
              and QA Consulting to Compliance Reviews and System Integration.
            </p>
          </div>

          <div className="hex-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0884B5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[500ms]"></div>
            <Image
              src={support}
              alt="Tech Support"
              height={50}
              width={50}
              className="relative z-10"
            />
            <h1 className="hex-title relative z-10 text-gray-800 group-hover:text-white transition-colors duration-[500ms]">
              Tech Support
            </h1>
            <p className="hex-desc relative z-10 text-gray-600 group-hover:text-white transition-colors duration-[500ms]">
              We provide full-spectrum IT consultancy and support, from network
              setup and cybersecurity to system migration and data recovery.
            </p>
          </div>

          <div className="hex-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0884B5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[500ms]"></div>
            <Image
              src={social}
              alt="Digital Marketing"
              height={50}
              width={50}
              className="relative z-10"
            />
            <h1 className="hex-title relative z-10 text-gray-800 group-hover:text-white transition-colors duration-[500ms]">
              Digital Marketing
            </h1>
            <p className="hex-desc relative z-10 text-gray-600 group-hover:text-white transition-colors duration-[500ms]">
              We offer complete Digital Marketing services, including SEO,
              Social Media Marketing, Content Marketing, and strategic
              consulting to boost your online presence.
            </p>
          </div>

          {/* Row 4 - Single Hexagon (Centered) */}

          <div className="hex-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0884B5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[500ms]"></div>
            <Image
              src={studio}
              alt="AR Creative Studio"
              height={50}
              width={50}
              className="relative z-10"
            />
            <h1 className="hex-title relative z-10 text-gray-800 group-hover:text-white transition-colors duration-[500ms]">
              AR Creative Studio
            </h1>
            <p className="hex-desc relative z-10 text-gray-600 group-hover:text-white transition-colors duration-[500ms]">
              Our AR Creative Studio delivers immersive branding, 3D design,
              VR/AR experiences, and high-quality motion graphics for compelling
              visual storytelling.
            </p>
          </div>
        </div>
      </div>
    </ReusableBackground>
  );
};

export default Services;
