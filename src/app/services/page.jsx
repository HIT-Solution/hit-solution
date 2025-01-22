// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// // Services Data
// const services = [
//   {
//     id: 1,
//     title: "Software Development",
//     imgUrl: "https://i.ibb.co.com/V2rY7Gm/istockphoto-1803992649-612x612.jpg",
//     desc: "We create high-performance, scalable, and secure software solutions tailored to your business needs.",
//   },
//   {
//     id: 2,
//     title: "IoT Solutions",
//     imgUrl: "https://i.ibb.co.com/vXjmdj3/IOT.jpg",
//     desc: "Empowering businesses with smart IoT solutions, connecting devices, and automating workflows.",
//   },
//   {
//     id: 3,
//     title: "AR Creative Studio",
//     imgUrl: "/images/ar-creative-studio.jpg",
//     desc: "Innovative Augmented Reality experiences for interactive storytelling, branding, and visualization.",
//   },
//   {
//     id: 4,
//     title: "AI & Machine Learning",
//     imgUrl: "/images/ai-ml.jpg",
//     desc: "Harnessing artificial intelligence to build predictive, intelligent, and automated solutions.",
//   },
//   {
//     id: 5,
//     title: "Cloud & DevOps",
//     imgUrl: "/images/cloud-devops.jpg",
//     desc: "Scalable cloud infrastructure, continuous integration, and deployment solutions for modern businesses.",
//   },
//   {
//     id: 6,
//     title: "UI/UX Design",
//     imgUrl: "/images/ui-ux-design.jpg",
//     desc: "User-centric design solutions for seamless, engaging, and visually stunning digital experiences.",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Top Banner */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="relative w-full h-72 md:h-[500px] bg-gradient-to-r from-teal-500 to-gray-800 overflow-hidden"
//       >
//         <img
//           src="/images/services-banner.jpg"
//           alt="Our Services"
//           className="w-full h-full object-cover opacity-30"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
//           >
//             Our Expertise in Innovation
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="text-lg md:text-2xl text-gray-200 mt-4"
//           >
//             Advanced Solutions Tailored for Your Business Growth.
//           </motion.p>
//         </div>
//       </motion.div>

//       {/* Services Section */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               whileHover={{
//                 scale: 1.03,
//                 background: "linear-gradient(to top right, #008080, #004d4d)",
//                 color: "#ffffff",
//                 boxShadow: "0px 10px 30px rgba(0, 128, 128, 0.3)",
//               }}
//               transition={{ duration: 0.5 }}
//               className="relative p-6 rounded-2xl shadow-xl border border-gray-300 backdrop-blur-md transition-all duration-500 overflow-hidden bg-gray-50"
//             >
//               {/* Image */}
//               <motion.div
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden rounded-lg relative"
//               >
//                 <img
//                   src={service.imgUrl}
//                   alt={service.title}
//                   width={400}
//                   height={250}
//                   className="w-full h-52 object-cover rounded-lg transition-all duration-500"
//                 />
//               </motion.div>

//               {/* Service Title */}
//               <h3 className="text-2xl font-semibold mt-4 transition-all duration-500">
//                 {service.title}
//               </h3>
//               <p className="text-gray-700 mt-3 transition-all duration-500">
//                 {service.desc}
//               </p>

//               {/* Learn More Button */}
//               <div className="flex justify-center mt-6">
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.3 }}
//                   className="bg-white text-teal-800 px-5 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition"
//                 >
//                   Learn More
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import ReusableBackground from "@/components/ReusableBackground";
import TitleFontStyle from "@/components/TitleFontStyle";
import { motion } from "framer-motion";
import Image from "next/image";

// Services Data
// const services = [
//   {
//     id: 1,
//     title: "Software Development",
//     imgUrl: "https://i.ibb.co.com/V2rY7Gm/istockphoto-1803992649-612x612.jpg",
//     desc: "We create high-performance, scalable, and secure software solutions tailored to your business needs. Our development process is guided by industry best practices, ensuring seamless integration, efficient workflows, and cutting-edge technology implementation. From startups to enterprises, we build custom applications that accelerate growth and efficiency.",
//   },
//   {
//     id: 2,
//     title: "IoT Solutions",
//     imgUrl: "https://i.ibb.co.com/vXjmdj3/IOT.jpg",
//     desc: "Empowering businesses with smart IoT solutions that connect devices, automate workflows, and optimize operations for seamless efficiency and real-time monitoring. Our expertise covers industrial automation, smart homes, connected healthcare, and predictive maintenance, enabling businesses to harness data for smarter decision-making and improved user experiences.",
//   },
//   {
//     id: 3,
//     title: "AR Creative Studio",
//     imgUrl: "/images/ar-creative-studio.jpg",
//     desc: "Innovative Augmented Reality experiences for interactive storytelling, branding, and visualization. Our AR solutions enhance user engagement through immersive environments, realistic simulations, and gamified interactions. Whether for marketing, e-commerce, or education, we bring ideas to life with cutting-edge AR technology.",
//   },
//   {
//     id: 4,
//     title: "AI & Machine Learning",
//     imgUrl: "/images/ai-ml.jpg",
//     desc: "Harnessing artificial intelligence and machine learning to develop predictive analytics, intelligent automation, and data-driven insights. Our AI solutions help businesses enhance customer experiences, streamline processes, and drive efficiency through natural language processing, computer vision, and deep learning models.",
//   },
//   {
//     id: 5,
//     title: "Cloud & DevOps",
//     imgUrl: "/images/cloud-devops.jpg",
//     desc: "We offer robust cloud computing and DevOps solutions to improve scalability, security, and performance. From cloud migration to containerized deployments, our solutions enable businesses to optimize resources, improve application reliability, and accelerate product delivery while maintaining cost-efficiency.",
//   },
//   {
//     id: 6,
//     title: "UI/UX Design",
//     imgUrl: "/images/ui-ux-design.jpg",
//     desc: "User-centric design solutions for seamless, engaging, and visually stunning digital experiences. Our UI/UX services focus on usability, accessibility, and brand consistency, ensuring intuitive interfaces that enhance customer satisfaction and business impact.",
//   },

//   {
//     id: 8,
//     title: "Cybersecurity Solutions",
//     imgUrl: "/images/cybersecurity.jpg",
//     desc: "Protecting businesses against cyber threats with advanced security solutions. Our services include network security, penetration testing, encryption, and risk assessment to safeguard sensitive data and ensure compliance with global security standards.",
//   },
//   {
//     id: 9,
//     title: "E-commerce Solutions",
//     imgUrl: "/images/ecommerce.jpg",
//     desc: "Creating scalable, high-performance e-commerce platforms with seamless payment integrations and AI-driven recommendations. Our solutions enhance user engagement and streamline inventory management, ensuring a frictionless shopping experience.",
//   },
//   {
//     id: 10,
//     title: "Big Data & Analytics",
//     imgUrl: "/images/bigdata.jpg",
//     desc: "Helping businesses leverage big data for actionable insights. Our data analytics solutions include real-time dashboards, business intelligence, and predictive modeling to optimize decision-making and drive efficiency.",
//   },
// ];

const services = [
  {
    id: 1,
    title: "Software Development & Digital Product",
    imgUrl: "https://i.ibb.co.com/V2rY7Gm/istockphoto-1803992649-612x612.jpg",
    desc: "We specialize in custom software development and digital product solutions tailored to your business needs. From mobile applications to enterprise-grade systems, we ensure seamless functionality, user-friendly interfaces, and secure architecture. Our development team follows agile methodologies to accelerate product delivery while maintaining high-quality standards. Whether it's SaaS applications, AI-driven software, or automation tools, we build scalable and innovative solutions that enhance business operations. With expertise in backend, frontend, and full-stack technologies, we create robust and reliable software that meets market demands.",
  },
  {
    id: 2,
    title: "Internet of Things (IoT) Solutions",
    imgUrl: "https://i.ibb.co.com/vXjmdj3/IOT.jpg",
    desc: "Our IoT solutions enable businesses to connect devices, collect real-time data, and optimize workflows. We develop intelligent IoT ecosystems that integrate with smart devices, sensors, and cloud platforms to provide automation, remote monitoring, and predictive analytics. From smart home automation to industrial IoT (IIoT), we offer end-to-end solutions that enhance efficiency, security, and operational insights. Our expertise in MQTT, edge computing, and AI-powered analytics ensures that businesses leverage IoT technology for sustainable growth and innovation.",
  },
  {
    id: 3,
    title: "Cloud Computing Solutions",
    imgUrl: "https://i.ibb.co.com/92wDbZL/images-1-enhanced.png",
    desc: "We offer cloud computing solutions that empower businesses with scalable, secure, and cost-effective infrastructure. Our services include cloud migration, DevOps automation, multi-cloud deployment, and containerized applications using Kubernetes and Docker. Whether you're adopting AWS, Azure, or Google Cloud, we ensure seamless integration, high availability, and optimized performance. Our cloud experts provide managed services, disaster recovery, and security enhancements to keep your infrastructure resilient and future-ready.",
  },
  {
    id: 4,
    title: "Product Design",
    imgUrl: "https://i.ibb.co.com/Sv77hNx/1-P2-QPMIFJj-Yx-Vt0-Ru-Abfrk-A.png",
    desc: "Our product design team crafts intuitive, engaging, and user-centric digital experiences. We focus on UI/UX design, wireframing, prototyping, and usability testing to create seamless interactions and visually stunning applications. Our design process is data-driven, ensuring that every product we build aligns with business goals and user expectations. Whether it's a mobile app, SaaS platform, or e-commerce site, our design team ensures an elegant and functional digital experience.",
  },
  {
    id: 5,
    title: "Quality Assurance",
    imgUrl:
      "https://i.ibb.co.com/QpFNfXt/standard-quality-control-concept-m-23-2150041862.jpg",
    desc: "We provide comprehensive quality assurance (QA) and testing services to ensure software reliability, security, and performance. Our testing strategies include automated testing, manual testing, performance testing, and security assessments to identify vulnerabilities before deployment. With a rigorous QA process, we help businesses minimize risks, improve user experience, and ensure compliance with industry standards. Our expertise in CI/CD pipelines, test automation frameworks, and regression testing enhances software quality and reduces time-to-market.",
  },
  {
    id: 6,
    title: "Web Development",
    imgUrl: "https://i.ibb.co.com/sqbpFyn/download-enhanced.png",
    desc: "Our web development services focus on building high-performance, SEO-friendly, and responsive websites. We develop scalable web applications, e-commerce platforms, and custom portals using the latest technologies like React, Next.js, Node.js, and Laravel. With a strong emphasis on accessibility, security, and performance, we create websites that deliver seamless user experiences. Whether it's a corporate website, marketplace, or SaaS platform, we build solutions that drive engagement and conversions.",
  },
  {
    id: 7,
    title: "Tech Consultancy and IT Support",
    imgUrl: "https://i.ibb.co.com/wSQ67zB/istockphoto-943067460-612x612.jpg",
    desc: "Our tech consultancy and IT support services help businesses navigate the ever-evolving digital landscape. We provide strategic IT solutions, infrastructure optimization, cybersecurity consultation, and managed IT services. From network security to software architecture planning, our experts offer insights that enhance efficiency and scalability. Our 24/7 IT support ensures that businesses can resolve technical issues quickly and maintain uninterrupted operations.",
  },
  {
    id: 8,
    title: "Digital Marketing",
    imgUrl: "https://i.ibb.co.com/NxRk6W5/download-1-enhanced.png",
    desc: "We offer data-driven digital marketing services that enhance brand visibility and customer engagement. Our expertise includes SEO, PPC advertising, social media marketing, content marketing, and email campaigns. We create targeted marketing strategies that increase organic traffic, generate leads, and improve ROI. With a performance-based approach, we optimize marketing efforts to align with business goals and drive sustainable growth.",
  },
  {
    id: 9,
    title: "AR Creative Studio",
    imgUrl:
      "https://i.ibb.co.com/9csZpQb/15023f83-37f5-4848-a30a-0c4d70d3eced.webp",
    desc: "Our AR Creative Studio specializes in developing immersive augmented reality (AR) experiences for brands, education, and entertainment. We create interactive AR applications, virtual try-ons, AR filters, and 3D content that enhance user engagement. Our expertise in ARCore, ARKit, and WebAR enables us to build cross-platform AR solutions that provide innovative storytelling and digital interactions. Whether for marketing campaigns or product visualization, we bring AR experiences to life.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ReusableBackground>
        {/* Top Banner */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-72 md:h-[500px] bg-gradient-to-r from-teal-900 to-gray-800 overflow-hidden"
        >
          <img
            src="https://files.oaiusercontent.com/file-RgYCrA2ezjkVVNBrh9ZZzV?se=2025-01-21T07%3A46%3A02Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd19c00b8-786d-429a-ab6a-d92db01897e4.webp&sig=xeNRMr7z94uhQlZxSHfe8Ywsp2VW8M4/dVZxfS36To0%3D"
            alt="Our Services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-20 p-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:text-4xl text-2xl xl:text-6xl font-extrabold text-white drop-shadow-lg"
            >
              <TitleFontStyle title={"Our Expertise in Innovation"} />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base lg:text-2xl md:text-xl xl:text-2xl text-gray-200 mt-4"
            >
              Advanced Solutions Tailored for Your Business Growth.
            </motion.p>
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="container mx-auto px-6 py-12 space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } gap-10`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={service.imgUrl}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h2 className="xl:text-3xl lg:text-2xl text-xl font-bold text-teal-700 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 md:text-lg text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </ReusableBackground>
    </div>
  );
}
