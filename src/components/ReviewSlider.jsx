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
import profile1 from "../../public/clinet-profile/profile1.webp";
import profile2 from "../../public/clinet-profile/profile2.webp";
import profile3 from "../../public/clinet-profile/profile3.jpg";
import profile4 from "../../public/clinet-profile/profile4.jpg";
import profile5 from "../../public/clinet-profile/profile5.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
const ReviewSlider = () => {
  // const reviewData = [
  //   {
  //     id: 1,
  //     name: "othman00101",
  //     role: "United States",
  //     testimonial:
  //       "TrueFact is completely patient and so passionate about IoT solutions that he immediately took an interest in my project and gave it undivided attention. Whenever there was an issue, he kept trying different efficient solutions to deliver exactly what / asked for. I would recommend him to anyone who needs a custom embedded system design solution for their business or IoT projects and I will use him again. Thank you, TrueFact",
  //     image: profile1,
  //   },
  //   {
  //     id: 2,
  //     name: "grantoswald",
  //     role: "Australia",
  //     testimonial:
  //       "The team communicated well and was able to quickly comprehend the requirements. They listened well and asked appropriate questions Look forward to future projects with them.",
  //     image: profile2,
  //   },
  //   {
  //     id: 3,
  //     name: "Olivia Brown",
  //     role: "CEO of TechNova",
  //     testimonial:
  //       "Great service. The seller was very easygoing and easy to get along with. He threw in complimentary Arduino code to interface with the IOT device",
  //     image: profile3,
  //   },
  //   {
  //     id: 4,
  //     name: "James Davis",
  //     role: "Freelance Developer",
  //     testimonial:
  //       "Hit Solution’s problem-solving skills and technical expertise made a huge impact on my project. They provided guidance and support that went beyond what I expected. Their commitment to ensuring everything ran smoothly made the experience stress-free. I couldn’t be more satisfied with their work.",
  //     image: profile4,
  //   },
  //   {
  //     id: 5,
  //     name: "Amelia Wilson",
  //     role: "Startup Founder",
  //     testimonial:
  //       "Thanks to Hit Solution, our startup scaled effortlessly. Their team delivered solutions that were both effective and efficient. From brainstorming to execution, they handled everything with utmost professionalism. I highly recommend them for any project requiring technical expertise and innovation.",
  //     image: profile5,
  //   },
  // ];
  const reviewData2 = [
    {
      id: 1,
      username: "rspebble",
      country: "United States",
      flag: "🇺🇸",
      image: profile1,
      rating: 5,
      testimonial:
        "I was very satisfied with this work. Aryan was great to work with. Quick communication and delivery. Rapid responses and being willing to stay up late to help a client. I will come back again.",
    },
    {
      id: 2,
      username: "miroslavbor",
      country: "United States",
      flag: "🇺🇸",
      image: profile2,
      rating: 5,
      testimonial:
        "He delivered what we needed. We went back and forth in our communication, and he was willing to meet all of our requirements each time. I would recommend him, and we will definitely consider working with him again in the future.",
    },
    {
      id: 3,
      username: "design_goat",
      country: "United States",
      flag: "🇺🇸",
      image: profile3,
      rating: 5,
      testimonial:
        "Aryan was great at working with my revisions and also sent me extra code for a Flutter app. Would recommend it!",
    },
    {
      id: 4,
      username: "timnijland687",
      country: "Unknown",
      flag: "❓",
      image: profile4,
      rating: 5,
      testimonial: "Good communication, nice experience working with TrueFact.",
    },
    {
      id: 5,
      username: "tippytovi2",
      country: "United States",
      flag: "🇺🇸",
      image: profile5,
      rating: 5,
      testimonial:
        "Very helpful. Strong knowledge of the topic to fix issues quickly. Highly recommend it.",
    },
    {
      id: 6,
      username: "tippytovi2",
      country: "United States",
      flag: "🇺🇸",
      image: profile1,
      rating: 5,
      testimonial:
        "Very helpful. Adheres to tight deadlines. Was able to fix all the problems.",
    },
    {
      id: 7,
      username: "othman00101",
      country: "United States",
      flag: "🇺🇸",
      image: profile2,
      rating: 5,
      testimonial:
        "Aryan offers amazing care and service. I would use him again.",
    },
    {
      id: 8,
      username: "timnijland687",
      country: "Unknown",
      flag: "❓",
      image: profile3,
      rating: 5,
      testimonial:
        "Rovin has good knowledge about what he does. Definitely can recommend!",
    },
    {
      id: 9,
      username: "mcarranco",
      country: "United States",
      flag: "🇺🇸",
      image: profile4,
      rating: 5,
      testimonial:
        "Very easy to talk to and understands your needs. 100% will use again!",
    },
    {
      id: 10,
      username: "mcarranco",
      country: "United States",
      flag: "🇺🇸",
      image: profile5,
      rating: 5,
      testimonial: "Above and beyond my expectations. 100% will use again.",
    },
    {
      id: 11,
      username: "astrfera",
      country: "Saudi Arabia",
      flag: "🇸🇦",
      image: profile1,
      rating: 5,
      testimonial: "Good to work with, I will hire him again.",
    },
    {
      id: 12,
      username: "astrfera",
      country: "Saudi Arabia",
      flag: "🇸🇦",
      image: profile2,
      rating: 5,
      testimonial: "It is my second time working with him.",
    },
    {
      id: 13,
      username: "nickbogaerts450",
      country: "Belgium",
      flag: "🇧🇪",
      image: profile3,
      rating: 5,
      testimonial:
        "Aryan was very helpful in coding my programme. Every question I asked was answered and solved perfectly.",
    },
    {
      id: 14,
      username: "mcarranco",
      country: "United States",
      flag: "🇺🇸",
      image: profile4,
      rating: 5,
      testimonial:
        "He listened to my inexperienced needs and made me feel welcomed. Very easy to talk to. I will definitely use it for future projects.",
    },
    {
      id: 15,
      username: "andy_min",
      country: "South Korea",
      flag: "🇰🇷",
      image: profile5,
      rating: 5,
      testimonial:
        "I had a great experience working with this app development contractor. He demonstrated a high level of responsibility and completed the work quickly. His promptness and attention to detail in delivering the project were impressive. I highly recommend his services for anyone looking for reliable and efficient app development work.",
    },
  ];

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
          {reviewData2?.map((review) => (
            <SwiperSlide key={review?.id}>
              {/* <Link href={"/"}> */}
              <div className="border h-[420px] p-8 rounded-xl hover:shadow-lg hover:shadow-teal-500/60  hover:transition-all">
                <div className="flex  gap-5">
                  <div>
                    <Image
                      className="rounded-xl"
                      src={review?.image}
                      alt=""
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
                    {review?.testimonial}
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
