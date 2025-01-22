"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import blog1 from "../../public/blogImg/blog1.png";
import blog2 from "../../public/blogImg/blog2.png";
import blog3 from "../../public/blogImg/blog3.png";
import logo from "../../public/logo.png";

const blogData = [
  {
    id: 1,
    title: "How to Build a Successful Data Science Team: 6 Key Steps to Follow",
    category: "Data Science Insights",
    imgUrl: blog1,
    desc: "Building a data science team requires a strategic approach to identify the right skills, tools, and workflows. Organizations must define clear objectives, align them with business goals, and ensure team members have expertise in data analytics, machine learning, and software engineering. A well-structured data science team fosters a culture of continuous learning, collaboration, and innovation. Companies should focus on hiring a diverse team with strong problem-solving abilities, analytical thinking, and domain-specific knowledge. Furthermore, investing in cloud-based data tools, big data platforms, and automated machine learning models enhances productivity. Effective data governance and security frameworks must be established to protect sensitive data while ensuring compliance with regulations. Lastly, continuous performance monitoring, mentorship programs, and skill enhancement training play a crucial role in maintaining an agile and high-performing data science team.",
    author: "HIT Solution Data Science Team",
    authorImg: logo,
    publishDate: "January 11, 2025",
  },
  {
    id: 2,
    title: "6 Best Practices for Building Scalable Software Applications",
    category: "Software Development",
    imgUrl: blog2,
    desc: "Developing scalable software requires a deep understanding of architecture, technology stack, and future growth needs. Scalability ensures that applications handle increasing user demands, evolving functionalities, and performance expectations. Best practices include adopting microservices architecture, utilizing cloud infrastructure, implementing caching strategies, and prioritizing database optimization. Companies must also embrace CI/CD pipelines for continuous testing and deployment, ensuring smooth application updates without downtime. Implementing robust API design and documentation allows seamless integrations with third-party services. Automated load testing helps simulate real-world scenarios, identifying potential bottlenecks before launch. Security must remain a top priority, incorporating authentication mechanisms, role-based access control, and encryption techniques. Lastly, user feedback should drive software improvements, ensuring applications remain adaptable and user-centric.",
    author: "Hit Solution Team",
    authorImg: logo,
    publishDate: "October 28, 2024",
  },
  {
    id: 3,
    title: "6 Essential Steps to Build a Successful IoT Ecosystem",
    category: "IoT Innovations",
    imgUrl: blog3,
    desc: "Building an IoT ecosystem involves more than just connecting devices; it requires careful planning, security measures, and seamless integration. The first step is selecting the right IoT hardware, including sensors, microcontrollers, and connectivity modules. Data security is critical, requiring encryption, secure authentication, and compliance with industry regulations. Cloud platforms play a pivotal role in storing and processing massive amounts of real-time data generated by IoT devices. Organizations must implement robust analytics solutions to extract meaningful insights and drive automation. Developing a scalable communication protocol such as MQTT or CoAP ensures reliable data transfer between devices. Lastly, organizations should focus on continuous monitoring, firmware updates, and predictive maintenance strategies to enhance efficiency and extend device lifespans.",
    author: "Hit Solution Team",
    authorImg: logo,
    publishDate: "October 28, 2024",
  },
  {
    id: 4,
    title: "Top Web Development Trends to Watch in 2025",
    category: "Web Development Trends",
    imgUrl: blog1, // Replace with the actual web development blog image
    desc: "Web development is evolving rapidly, with new trends emerging each year that redefine how websites and applications are built. In 2025, serverless computing is expected to gain momentum, enabling developers to focus on writing code while cloud providers handle infrastructure management. AI-driven web applications will enhance user experiences with personalized recommendations and automated interactions. WebAssembly (WASM) will enable near-native performance in web applications, making browsers more powerful than ever. Progressive Web Apps (PWAs) will continue to rise, offering offline capabilities and mobile-friendly experiences. The adoption of low-code/no-code platforms will accelerate, allowing businesses to develop applications without extensive coding knowledge. Finally, cybersecurity will remain a top priority, with advancements in blockchain-based authentication and secure API communication protocols ensuring enhanced web security.",
    author: "Web Dev Insights Team",
    authorImg: logo,
    publishDate: "January 14, 2025",
  },
  {
    id: 5,
    title: "How Artificial Intelligence is Transforming Software Development",
    category: "AI-Driven Software Development",
    imgUrl: blog2,
    desc: "Artificial intelligence is no longer a futuristic concept; it’s revolutionizing software development today. AI-powered tools are enhancing productivity by automating repetitive tasks such as code generation, debugging, and software testing. AI-driven analytics enable developers to identify performance bottlenecks, security vulnerabilities, and optimization strategies in real time. The rise of generative AI models is changing how developers write and structure code, allowing for more efficient development workflows. Natural language processing (NLP) is enhancing human-computer interactions, enabling AI-assisted coding solutions like GitHub Copilot. AI also plays a crucial role in predictive software maintenance, analyzing historical data to prevent system failures before they occur. In the future, AI will further integrate with DevOps practices, accelerating continuous integration and deployment while ensuring enhanced software reliability.",
    author: "Hit Solution Team",
    authorImg: logo,
    publishDate: "October 28, 2024",
  },
];

const BlogSlider = () => {
  return (
    <div className="container mx-auto mt-12 lg:mt-20">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper  "
      >
        {blogData.map((blog) => (
          <SwiperSlide key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <div className="text-gray-200 hover:shadow-xl hover:shadow-slate-600 px-2 m-1 rounded-xl h-[600px]">
                {/* Blog Image */}
                <Image
                  className="rounded-tl-xl rounded-tr-xl"
                  src={blog.imgUrl}
                  alt={blog.title}
                  width={600}
                  height={300}
                  quality={100}
                  style={{ width: "600px", height: "300px" }}
                />
                <div>
                  {/* Blog Category */}
                  <h1 className="text-blue-200 line-clamp-1 mt-5">
                    {blog.category}
                  </h1>
                  {/* Blog Title */}
                  <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg my-2 line-clamp-2">
                    {blog.title}
                  </h1>
                  {/* Blog Summary */}
                  <p className="text-gray-300 text-start line-clamp-3">
                    {blog.desc}
                  </p>
                </div>
                {/* Author Section */}
                <div className="flex gap-5 items-center my-3">
                  {/* Author Image */}
                  <Image
                    className="rounded-full border-2 border-white"
                    src={blog.authorImg}
                    alt={blog.author}
                    width={50}
                    height={50}
                    quality={100}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div>
                    {/* Author Name */}
                    <h1 className="font-semibold line-clamp-1">
                      {blog.author}
                    </h1>
                    {/* Publish Date */}
                    <h1>{blog.publishDate}</h1>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSlider;
