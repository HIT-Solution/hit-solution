"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode} from "swiper/modules";

const BannerSlider = () => {
  return (
    <div className="mx-10 my-10">
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
         <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center text-white font-bold text-2xl bg-gradient-to-br from-black to-teal-800 rounded-md">
            <h1>Portfolio</h1>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center text-white font-bold text-2xl bg-gradient-to-br from-black to-teal-800 rounded-md">
            <h1>Portfolio</h1>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center text-white font-bold text-2xl bg-gradient-to-br from-black to-teal-800 rounded-md">
            <h1>Portfolio</h1>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center text-white font-bold text-2xl bg-gradient-to-br from-black to-teal-800 rounded-md">
            <h1>Portfolio</h1>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center text-white font-bold text-2xl bg-gradient-to-br from-black to-teal-800 rounded-md">
            <h1>Portfolio</h1>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center text-white font-bold text-2xl bg-gradient-to-br from-black to-teal-800 rounded-md">
            <h1>Portfolio</h1>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center text-white font-bold text-2xl bg-gradient-to-br from-black to-teal-800 rounded-md">
            <h1>Portfolio</h1>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center text-white font-bold text-2xl bg-gradient-to-br from-black to-teal-800 rounded-md">
            <h1>Portfolio</h1>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center text-white font-bold text-2xl bg-gradient-to-br from-black to-teal-800 rounded-md">
            <h1>Portfolio</h1>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center text-white font-bold text-2xl bg-gradient-to-br from-black to-teal-800 rounded-md">
            <h1>Portfolio</h1>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default BannerSlider;
