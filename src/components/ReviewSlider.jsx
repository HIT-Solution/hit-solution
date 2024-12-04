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
import image1 from "../../public/img.png";
const ReviewSlider = () => {
  return (
    <div>
      <div className="mt-10">
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
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href={"/"}>
              <div className="border p-5 rounded-xl h-[490px] hover:shadow-lg hover:shadow-teal-500/60  hover:transition-all">
                <div className="flex justify-center items-center gap-5">
                  <div>
                    <Image
                      className="rounded-xl"
                      src={image1}
                      alt=""
                      width={150}
                      height={150}
                      quality={100}
                    />
                  </div>

                  <div>
                    <h1 className="font-semibold text-lg">Henry Cavils</h1>
                    <p>CEO & FOUNDER</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae blanditiis harum dolor sed doloribus ratione,
                    molestias omnis beatae provident natus. Molestias earum vel
                    saepe, dicta labore laudantium dolorum harum beatae non
                    excepturi eaque debitis hic animi fuga maiores cumque? Porro
                    veniam cumque magnam, nobis in reprehenderit vel id
                    doloribus architecto.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <div className="border p-5 rounded-xl h-[490px] hover:shadow-lg hover:shadow-teal-500/60 hover:transition-shadow duration-75">
                <div className="flex justify-center items-center gap-5">
                  <div>
                    <Image
                      className="rounded-xl"
                      src={image1}
                      alt=""
                      width={150}
                      height={150}
                    />
                  </div>

                  <div>
                    <h1 className="font-semibold text-lg">Henry Cavils</h1>
                    <p>CEO & FOUNDER</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae blanditiis harum dolor sed doloribus ratione,
                    molestias omnis beatae provident natus. Molestias earum vel
                    saepe, dicta labore laudantium dolorum harum beatae non
                    excepturi eaque debitis hic animi fuga maiores cumque? Porro
                    veniam cumque magnam, nobis in reprehenderit vel id
                    doloribus architecto.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <div className="border p-5 rounded-xl h-[490px] hover:shadow-lg hover:shadow-teal-500/60 hover:transition-shadow duration-75">
                <div className="flex justify-center items-center gap-5">
                  <div>
                    <Image
                      className="rounded-xl"
                      src={image1}
                      alt=""
                      width={150}
                      height={150}
                    />
                  </div>

                  <div>
                    <h1 className="font-semibold text-lg">Henry Cavils</h1>
                    <p>CEO & FOUNDER</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae blanditiis harum dolor sed doloribus ratione,
                    molestias omnis beatae provident natus. Molestias earum vel
                    saepe, dicta labore laudantium dolorum harum beatae non
                    excepturi eaque debitis hic animi fuga maiores cumque? Porro
                    veniam cumque magnam, nobis in reprehenderit vel id
                    doloribus architecto.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <div className="border p-5 rounded-xl h-[490px] hover:shadow-lg hover:shadow-teal-500/60 hover:transition-shadow duration-75">
                <div className="flex justify-center items-center gap-5">
                  <div>
                    <Image
                      className="rounded-xl"
                      src={image1}
                      alt=""
                      width={150}
                      height={150}
                    />
                  </div>

                  <div>
                    <h1 className="font-semibold text-lg">Henry Cavils</h1>
                    <p>CEO & FOUNDER</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae blanditiis harum dolor sed doloribus ratione,
                    molestias omnis beatae provident natus. Molestias earum vel
                    saepe, dicta labore laudantium dolorum harum beatae non
                    excepturi eaque debitis hic animi fuga maiores cumque? Porro
                    veniam cumque magnam, nobis in reprehenderit vel id
                    doloribus architecto.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <div className="border p-5 rounded-xl h-[490px] hover:shadow-lg hover:shadow-teal-500/60 hover:transition-shadow duration-75">
                <div className="flex justify-center items-center gap-5">
                  <div>
                    <Image
                      className="rounded-xl"
                      src={image1}
                      alt=""
                      width={150}
                      height={150}
                    />
                  </div>

                  <div>
                    <h1 className="font-semibold text-lg">Henry Cavils</h1>
                    <p>CEO & FOUNDER</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae blanditiis harum dolor sed doloribus ratione,
                    molestias omnis beatae provident natus. Molestias earum vel
                    saepe, dicta labore laudantium dolorum harum beatae non
                    excepturi eaque debitis hic animi fuga maiores cumque? Porro
                    veniam cumque magnam, nobis in reprehenderit vel id
                    doloribus architecto.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"}>
              <div className="border p-5 rounded-xl h-[490px] hover:shadow-lg hover:shadow-teal-500/60 hover:transition-shadow duration-75">
                <div className="flex justify-center items-center gap-5">
                  <div>
                    <Image
                      className="rounded-xl"
                      src={image1}
                      alt=""
                      width={150}
                      height={150}
                    />
                  </div>

                  <div>
                    <h1 className="font-semibold text-lg">Henry Cavils</h1>
                    <p>CEO & FOUNDER</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae blanditiis harum dolor sed doloribus ratione,
                    molestias omnis beatae provident natus. Molestias earum vel
                    saepe, dicta labore laudantium dolorum harum beatae non
                    excepturi eaque debitis hic animi fuga maiores cumque? Porro
                    veniam cumque magnam, nobis in reprehenderit vel id
                    doloribus architecto.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
