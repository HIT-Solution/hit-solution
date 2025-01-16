"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
const ReviewSlider = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        setReviews(data.result);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <div className="lg:mt-24 md:mt-20 mt-12 pb-12">
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
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review?._id}>
              {/* <Link href={"/"}> */}
              <div className="border h-[420px] p-8 rounded-xl hover:shadow-lg hover:shadow-teal-500/60  hover:transition-all">
                <div className="flex  gap-5">
                  <div>
                    <img
                      className="rounded-xl"
                      src={review?.imgUrl}
                      alt="abc"
                      width={100}
                      height={100}
                      quality={100}
                    />
                  </div>

                  <div>
                    <h1 className="font-semibold  text-lg">
                      {review?.username}
                    </h1>
                    <p className="text-gray-600">{review?.country}</p>
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`text-lg ${
                          index < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 text-gray-700">
                  <FaQuoteLeft className="text-teal-700 text-sm " />
                  <p className="lg:text-lg text-sm leading-relaxed text-center">
                    {review?.comments}
                  </p>
                  <FaQuoteRight className="text-teal-700 text-sm  float-right" />
                </div>
              </div>
              {/* </Link> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
