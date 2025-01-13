"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import blog1 from "../../public/blogImg/blog1.png";
import blog2 from "../../public/blogImg/blog2.png";
import blog3 from "../../public/blogImg/blog3.png";
import logo from "../../public/logo.png";
const BlogSlider = () => {
  return (
    <div>
      <div className="lg:mt-32 md:mt-20 mt-12">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href={"/"}>
              <div className="text-gray-200 rounded-xl h-[600px]">
                {/* Main Blog Image */}
                <Image
                  className="rounded-tl-xl rounded-tr-xl"
                  src={blog1} // Main Image Source
                  alt="Data Science Blog Post" // Alt Text
                  width={600} // Fixed width
                  height={300} // Fixed height
                  quality={100} // High Quality
                  style={{ width: "600px", height: "300px" }} // Fixed Size Style
                />
                <div>
                  {/* Main Title (Category) */}
                  <h1 className="text-blue-200 mt-5">Data Science Insights</h1>
                  {/* Blog Title */}
                  <h1 className="lg:text-3xl md:text-2xl text-xl my-2">
                    How to Build a Successful Data Science Team: 6 Key Steps to
                    Follow
                  </h1>
                  {/* Content Summary */}
                  <p className="text-gray-300 text-start line-clamp-4">
                    Building a data science team requires a strategic approach
                    to identify the right skills, tools, and workflows. This
                    blog explores six key steps to establish a high-performing
                    data science team, from sourcing top talent and defining
                    clear objectives to fostering a culture of innovation and
                    collaboration. Learn how data science can transform raw data
                    into actionable insights, driving business growth and
                    innovation.
                  </p>
                </div>
                {/* Author Section */}
                <div className="flex gap-5 items-center my-3">
                  {/* Author Profile Image */}
                  <Image
                    className="rounded-full border-2 border-white"
                    src={logo} // Author Logo Source
                    alt="HIT Solution Logo" // Alt Text
                    width={50} // Fixed width
                    height={50} // Fixed height
                    quality={100} // High Quality
                    style={{ width: "50px", height: "50px" }} // Fixed Size Style
                  />
                  <div>
                    {/* Author Name */}
                    <h1 className="font-semibold">
                      HIT Solution Data Science Team
                    </h1>
                    {/* Publish Date */}
                    <h1>January 11, 2025</h1>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={"/"}>
              <div className="text-gray-200 rounded-xl h-[600px]">
                {/* Main Blog Image */}
                <Image
                  className="rounded-tl-xl rounded-tr-xl"
                  src={blog2} // Main Image Source
                  alt="Software Development Blog" // Alt Text
                  width={600} // Fixed width
                  height={300} // Fixed height
                  quality={100} // High Quality
                  style={{ width: "600px", height: "300px" }} // Fixed Size Style
                />
                <div>
                  {/* Main Title (Category) */}
                  <h1 className="text-blue-200 mt-5">Software Development</h1>
                  {/* Blog Title */}
                  <h1 className="lg:text-3xl md:text-2xl text-xl my-2">
                    6 Best Practices for Building Scalable Software Applications
                  </h1>
                  {/* Content Summary */}
                  <p className="text-gray-300 text-start line-clamp-4">
                    Developing scalable software requires a deep understanding
                    of architecture, technology stack, and future growth needs.
                    In this blog, we explore six best practices, including
                    modular design, cloud integration, and automated testing, to
                    ensure your software scales seamlessly with user demands.
                  </p>
                </div>
                {/* Author Section */}
                <div className="flex gap-5 items-center my-3">
                  {/* Author Profile Image */}
                  <Image
                    className="rounded-full border-2 border-white"
                    src={logo} // Author Logo Source
                    alt="HIT Solution Logo" // Alt Text
                    width={50} // Fixed width
                    height={50} // Fixed height
                    quality={100} // High Quality
                    style={{ width: "50px", height: "50px" }} // Fixed Size Style
                  />
                  <div>
                    {/* Author Name */}
                    <h1 className="font-semibold">Hit Solution Team</h1>
                    {/* Publish Date */}
                    <h1>October 28, 2024</h1>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={"/"}>
              <div className="text-gray-200 rounded-xl h-[600px]">
                {/* Main Blog Image */}
                <Image
                  className="rounded-tl-xl rounded-tr-xl"
                  src={blog3} // Main Image Source
                  alt="IoT Blog Post" // Alt Text
                  width={600} // Fixed width
                  height={300} // Fixed height
                  quality={100} // High Quality
                  style={{ width: "600px", height: "300px" }} // Fixed Size Style
                />
                <div>
                  {/* Main Title (Category) */}
                  <h1 className="text-blue-200 mt-5">IoT Innovations</h1>
                  {/* Blog Title */}
                  <h1 className="lg:text-3xl md:text-2xl text-xl my-2">
                    6 Essential Steps to Build a Successful IoT Ecosystem
                  </h1>
                  {/* Content Summary */}
                  <p className="text-gray-300 text-start line-clamp-4">
                    Building an IoT ecosystem involves more than just connecting
                    devices. This blog explores six critical steps, including
                    device selection, network security, and data management, to
                    create an efficient and scalable IoT infrastructure for
                    businesses and consumers.
                  </p>
                </div>
                {/* Author Section */}
                <div className="flex gap-5 items-center my-3">
                  {/* Author Profile Image */}
                  <Image
                    className="rounded-full border-2 border-white"
                    src={logo} // Author Logo Source
                    alt="HIT Solution Logo" // Alt Text
                    width={50} // Fixed width
                    height={50} // Fixed height
                    quality={100} // High Quality
                    style={{ width: "50px", height: "50px" }} // Fixed Size Style
                  />
                  <div>
                    {/* Author Name */}
                    <h1 className="font-semibold">Hit Solution Team</h1>
                    {/* Publish Date */}
                    <h1>October 28, 2024</h1>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={"/"}>
              <div className="text-gray-200 rounded-xl h-[600px]">
                {/* Main Blog Image */}
                <Image
                  className="rounded-tl-xl rounded-tr-xl"
                  src={blog1} // Main Image Source
                  alt="AI in Software Development Blog" // Alt Text
                  width={600} // Fixed width
                  height={300} // Fixed height
                  quality={100} // High Quality
                  style={{ width: "600px", height: "300px" }} // Fixed Size Style
                />
                <div>
                  {/* Main Title (Category) */}
                  <h1 className="text-blue-200 mt-5">
                    AI-Driven Software Development
                  </h1>
                  {/* Blog Title */}
                  <h1 className="lg:text-3xl md:text-2xl text-xl my-2">
                    How Artificial Intelligence is Transforming Software
                    Development
                  </h1>
                  {/* Content Summary */}
                  <p className="text-gray-300 text-start line-clamp-4">
                    Artificial intelligence is no longer a futuristic concept;
                    it’s revolutionizing software development today. From
                    automating code generation to identifying vulnerabilities in
                    real-time, AI is reshaping how developers create, test, and
                    deploy applications. Discover how AI tools and technologies
                    are enhancing efficiency, reducing errors, and enabling
                    smarter software solutions.
                  </p>
                </div>
                {/* Author Section */}
                <div className="flex gap-5 items-center my-3">
                  {/* Author Profile Image */}
                  <Image
                    className="rounded-full border-2 border-white"
                    src={logo} // Author Logo Source
                    alt="HIT Solution Logo" // Alt Text
                    width={50} // Fixed width
                    height={50} // Fixed height
                    quality={100} // High Quality
                    style={{ width: "50px", height: "50px" }} // Fixed Size Style
                  />
                  <div>
                    {/* Author Name */}
                    <h1 className="font-semibold">Hit Solution Team</h1>
                    {/* Publish Date */}
                    <h1>October 28, 2024</h1>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          {/* <SwiperSlide>
            <Link href={"/"}>
              <div className="text-gray-200 rounded-xl h-[600px]">
                <Image
                  className="rounded-tl-xl rounded-tr-xl"
                  src={blog1}
                  alt=""
                  width={600}
                  height={300}
                  quality={100}
                />
                <div>
                  <h1 className="text-blue-200 mt-5">Staff-Augmentation</h1>
                  <h1 className="text-3xl my-2">
                    How to Hire Offshore Software Developers: 6 Steps to Follow
                  </h1>
                  <p className="text-gray-300 text-start">
                    However, the answer may not be as straight-cut as you’d
                    think. Technically, JavaScript is an object-oriented
                    programming language, however, it doesn’t function in the
                    same way that most OOP languages function.
                  </p>
                </div>
                <div className="flex gap-5 items-center my-3">
                  <Image
                    className="rounded-full border-2 border-white"
                    src={logo}
                    alt=""
                    width={50}
                    height={50}
                    quality={100}
                  />
                  <div>
                    <h1 className="font-semibold">Hit Solution Team</h1>
                    <h1>October 28, 2024</h1>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={"/"}>
              <div className="text-gray-200 rounded-xl h-[600px]">
                <Image
                  className="rounded-tl-xl rounded-tr-xl"
                  src={blog1}
                  alt=""
                  width={600}
                  height={300}
                  quality={100}
                />
                <div>
                  <h1 className="text-blue-200 mt-5">Staff-Augmentation</h1>
                  <h1 className="text-3xl my-2">
                    How to Hire Offshore Software Developers: 6 Steps to Follow
                  </h1>
                  <p className="text-gray-300 text-start">
                    However, the answer may not be as straight-cut as you’d
                    think. Technically, JavaScript is an object-oriented
                    programming language, however, it doesn’t function in the
                    same way that most OOP languages function.
                  </p>
                </div>
                <div className="flex gap-5 items-center my-3">
                  <Image
                    className="rounded-full border-2 border-white"
                    src={logo}
                    alt=""
                    width={50}
                    height={50}
                    quality={100}
                  />
                  <div>
                    <h1 className="font-semibold">Hit Solution Team</h1>
                    <h1>October 28, 2024</h1>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSlider;
