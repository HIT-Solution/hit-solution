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

const IndustryExpertiseSlider = () => {
  const slidesData = [
    {
      id: 1,
      projectUrl: "https://www.ukilzone.com/",
      imgUrl: "https://i.ibb.co.com/58NXnjg/UlikZone.png",
      desc: "We offer end-to-end Ukilzone services, from Custom Website Design and Development to Integration and Maintenance",
    },
    {
      id: 2,
      projectUrl:
        "https://eloquent-stardust-e9120f.netlify.app/?fbclid=IwZXh0bgNhZW0CMTEAAR1XuNWT9L-glggdNhc8vsixDRyVH_V3MZLBOqqtjw44Yl5O4gyK1sMm898_aem_LRkWmYzGLTgd54ht_LccAQ",
      imgUrl: "https://i.ibb.co.com/BBBgP2P/SkillHub.png",
      desc: "We offer end-to-end SkillHub services, from Course Creation and Learning Management to Integration and Support",
    },
    {
      id: 3,
      projectUrl: "https://strong-yeot-422847.netlify.app/",
      imgUrl: "https://i.ibb.co.com/zHsJBdZ/Screenshot-2025-01-16-124601.png",
      desc: "We offer end-to-end BashaKhuzi services, from Property Management and Leasing to Renovation and Support.",
    },
    {
      id: 4,
      projectUrl: "https://hasansit.com/",
      imgUrl: "https://i.ibb.co.com/tqfDDbN/Screenshot-2025-01-16-125105.png",
      desc: "Showcasing Innovative Designs, Seamless Integrations, and End-to-End Solutions for Every Client Need.",
    },
  ];

  // //  Get Demo Project data
  // useEffect(() => {
  //   const fetchDemoData = async () => {
  //     try {
  //       const response = await fetch("/api/demoProjects");
  //       const data = await response.json();
  //       setDemoProjectData(data.result);
  //       setLoading(false);
  //       console.log(data.result);
  //     } catch (error) {
  //       console.error("Error fetching Demo data :", error);
  //     }
  //   };

  //   fetchDemoData();
  // }, []);

  // Predefined array of background colors
  const bgColors = [
    "bg-gray-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-purple-100",
    "bg-orange-100",
  ];

  return (
    <div className="xl:pt-32 lg:pt-28 md:pt-24 pt-12  mx-5 ">
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
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <Swiper>
          {slidesData?.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <Link target="_blank" href={slide.projectUrl}>
                <div
                  className={`h-[550px] ${
                    bgColors[index % bgColors.length]
                  } p-5 rounded-3xl flex flex-col justify-between hover:zoom-in-100 items-center`}
                >
                  <h1 className="xl:text-3xl lg:text-2xl  text-2xl font-bold py-2">
                    Our Client Project- {index + 1}
                  </h1>
                  <p className="text-lg">{slide.desc}</p>
                  <div className="my-10">
                    <img
                      className="rounded-3xl border-4 border-black xl:h-[300px] lg:h-[280px] md:h-[200px] h-[220px] "
                      src={slide.imgUrl}
                      width={350}
                      height={600}
                      alt={`Project ${slide.id}`}
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Swiper>
    </div>
  );
};

export default IndustryExpertiseSlider;
