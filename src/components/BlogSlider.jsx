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
import blog1 from '../../public/blog.png'
import logo from '../../public/logo.png'
const BlogSlider = () => {
  return (
    <div>
      <div className="mt-32">
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
                <Image className="rounded-tl-xl rounded-tr-xl" src={blog1} alt="" width={450} height={300} quality={100}/>
               <div>
               <h1 className="text-blue-200 mt-5">Staff-Augmentation</h1>
                <h1 className="text-3xl my-2">How to Hire Offshore Software Developers: 6 Steps to Follow</h1>
                <p className="text-gray-300 text-justify">However, the answer may not be as straight-cut as you’d think. Technically, JavaScript is an object-oriented programming language, however, it doesn’t function in the same way that most OOP languages function.</p>
               </div>
               <div className="flex gap-5 items-center my-3">
                <Image className="rounded-full border-2 border-white" src={logo} alt="" width={50} height={50} quality={100}/>
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
                <Image className="rounded-tl-xl rounded-tr-xl" src={blog1} alt="" width={450} height={300} quality={100}/>
               <div>
               <h1 className="text-blue-200 mt-5">Staff-Augmentation</h1>
                <h1 className="text-3xl my-2">How to Hire Offshore Software Developers: 6 Steps to Follow</h1>
                <p className="text-gray-300 text-justify">However, the answer may not be as straight-cut as you’d think. Technically, JavaScript is an object-oriented programming language, however, it doesn’t function in the same way that most OOP languages function.</p>
               </div>
               <div className="flex gap-5 items-center my-3">
                <Image className="rounded-full border-2 border-white" src={logo} alt="" width={50} height={50} quality={100}/>
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
                <Image className="rounded-tl-xl rounded-tr-xl" src={blog1} alt="" width={450} height={300} quality={100}/>
               <div>
               <h1 className="text-blue-200 mt-5">Staff-Augmentation</h1>
                <h1 className="text-3xl my-2">How to Hire Offshore Software Developers: 6 Steps to Follow</h1>
                <p className="text-gray-300 text-justify">However, the answer may not be as straight-cut as you’d think. Technically, JavaScript is an object-oriented programming language, however, it doesn’t function in the same way that most OOP languages function.</p>
               </div>
               <div className="flex gap-5 items-center my-3">
                <Image className="rounded-full border-2 border-white" src={logo} alt="" width={50} height={50} quality={100}/>
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
                <Image className="rounded-tl-xl rounded-tr-xl" src={blog1} alt="" width={450} height={300} quality={100}/>
               <div>
               <h1 className="text-blue-200 mt-5">Staff-Augmentation</h1>
                <h1 className="text-3xl my-2">How to Hire Offshore Software Developers: 6 Steps to Follow</h1>
                <p className="text-gray-300 text-justify">However, the answer may not be as straight-cut as you’d think. Technically, JavaScript is an object-oriented programming language, however, it doesn’t function in the same way that most OOP languages function.</p>
               </div>
               <div className="flex gap-5 items-center my-3">
                <Image className="rounded-full border-2 border-white" src={logo} alt="" width={50} height={50} quality={100}/>
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
                <Image className="rounded-tl-xl rounded-tr-xl" src={blog1} alt="" width={450} height={300} quality={100}/>
               <div>
               <h1 className="text-blue-200 mt-5">Staff-Augmentation</h1>
                <h1 className="text-3xl my-2">How to Hire Offshore Software Developers: 6 Steps to Follow</h1>
                <p className="text-gray-300 text-justify">However, the answer may not be as straight-cut as you’d think. Technically, JavaScript is an object-oriented programming language, however, it doesn’t function in the same way that most OOP languages function.</p>
               </div>
               <div className="flex gap-5 items-center my-3">
                <Image className="rounded-full border-2 border-white" src={logo} alt="" width={50} height={50} quality={100}/>
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
                <Image className="rounded-tl-xl rounded-tr-xl" src={blog1} alt="" width={450} height={300} quality={100}/>
               <div>
               <h1 className="text-blue-200 mt-5">Staff-Augmentation</h1>
                <h1 className="text-3xl my-2">How to Hire Offshore Software Developers: 6 Steps to Follow</h1>
                <p className="text-gray-300 text-justify">However, the answer may not be as straight-cut as you’d think. Technically, JavaScript is an object-oriented programming language, however, it doesn’t function in the same way that most OOP languages function.</p>
               </div>
               <div className="flex gap-5 items-center my-3">
                <Image className="rounded-full border-2 border-white" src={logo} alt="" width={50} height={50} quality={100}/>
                <div>
                    <h1 className="font-semibold">Hit Solution Team</h1>
                    <h1>October 28, 2024</h1>
                </div>
               </div>
             </div>
            </Link>
          </SwiperSlide>
         
         
         
          
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSlider;
