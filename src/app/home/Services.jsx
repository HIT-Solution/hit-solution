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
import SimpleBackground from "../../components/SimpleBackground";

const Services = () => {
  return (
   <SimpleBackground>
     <div>
      <h1 className="text-5xl text-center my-20">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mx-5 lg:mx-10 ">
        <div className="p-5 rounded-xl shadow-lg shadow-teal-500/60">
          <Image src={software} alt="" height={80} width={80} />
          <div>
            <h1 className="text-2xl my-1">
              Software Development & Digital Product{" "}
            </h1>
            <p>
              We create innovative software solutions across Mobile, Web,
              Desktop, and Cloud with expertise in AI, UI/UX, and API
              integration.
            </p>
          </div>
        </div>
        <div className="p-5 rounded-xl shadow-lg shadow-teal-500/60">
          <Image src={cloud} alt="" height={80} width={80} />
          <div>
            <h1 className="text-2xl my-1">Cloud Computing Solutions</h1>
            <p>
              We offer end-to-end Cloud solutions, from Server Setup and AI
              Development to DevOps, API Integration, and Cloud Security.
            </p>
          </div>
        </div>
        <div className="p-5 rounded-xl shadow-lg shadow-teal-500/60">
          <Image src={iot} alt="" height={80} width={80} />
          <div>
            <h1 className="text-2xl my-1">
              Internet of Things (IoT) Solutions
            </h1>
            <p>
              We deliver complete IoT solutions, from architecture and product
              development to PCB design, firmware, 3D modeling, and robotics.
            </p>
          </div>
        </div>
        <div className="p-5 rounded-xl shadow-lg shadow-teal-500/60">
          <Image src={design} alt="" height={80} width={80} />
          <div>
            <h1 className="text-2xl my-1">Product Design</h1>
            <p>
              We specialize in Product Design, offering 3D Modeling,
              Prototyping, Industrial Design, and MVP Development to bring your
              ideas to life.
            </p>
          </div>
        </div>
        <div className="p-5 rounded-xl shadow-lg shadow-teal-500/60">
          <Image src={qa} alt="" height={80} width={80} />
          <div>
            <h1 className="text-2xl my-1">Quality Assurance</h1>
            <p>
              We offer end-to-end Quality Assurance, from Performance Testing
              and QA Consulting to Compliance Reviews and System Integration.
            </p>
          </div>
        </div>
        <div className="p-5 rounded-xl shadow-lg shadow-teal-500/60">
          <Image src={support} alt="" height={80} width={80} />
          <div>
            <h1 className="text-2xl my-1">Tech Consultancy and IT Support</h1>
            <p>
              We provide full-spectrum IT consultancy and support, from network
              setup and cybersecurity to system migration and data recovery.
            </p>
          </div>
        </div>
        <div className="p-5 rounded-xl shadow-lg shadow-teal-500/60">
          <Image src={social} alt="" height={80} width={80} />
          <div>
            <h1 className="text-2xl my-1">Digital Marketing</h1>
            <p>
              We offer complete Digital Marketing services, including SEO,
              Social Media Marketing, Content Marketing, and strategic
              consulting to boost your online presence.
            </p>
          </div>
        </div>
        <div className=" p-5 rounded-xl shadow-lg shadow-teal-500/60">
          <Image src={studio} alt="" height={80} width={80} />
          <div>
            <h1 className="text-2xl my-1">AR Creative Studio</h1>
            <p>
              Our AR Creative Studio delivers immersive branding, 3D design,
              VR/AR experiences, and high-quality motion graphics for compelling
              visual storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
   </SimpleBackground>
  );
};

export default Services;
