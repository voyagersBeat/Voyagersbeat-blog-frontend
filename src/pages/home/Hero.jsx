import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image1 from "../../assets/hero-images/blog-image-1.webp";
import Image2 from "../../assets/hero-images/blog-image-2.webp";
import Image3 from "../../assets/hero-images/blog-image-3.webp";
import Image4 from "../../assets/hero-images/blog-image-4.webp";
import Image5 from "../../assets/hero-images/blog-image-5.webp";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8">
        <div className="md:w-1/2 w-full text-center">
          <h1 className="md:text-4xl text-3xl font-bold md:leading-tight">
            Your Journey, Our Passion – Let's Explore!
          </h1>
          <p className=" py-4 ">
            Discover the world with Voyagers Beat—your ultimate travel
            companion. From offbeat adventures to curated group trips, we bring
            your dream destinations to life. Explore enchanting landscapes,
            immerse in local cultures, and create unforgettable memories. Travel
            beyond ordinary, live the beat!
          </p>
        </div>
        <div className="md:w-1/2 w-full mx-auto ">
          {" "}
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={Image1}
                alt=""
                className="w-full lg:h-[420px] sm:h-96 h-80"
              />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <img
                src={Image2}
                alt=""
                className="w-full lg:h-[420px] sm:h-96 h-80"
              />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <img
                src={Image3}
                alt=""
                className="w-full lg:h-[420px] sm:h-96 h-80"
              />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <img
                src={Image4}
                alt=""
                className="w-full lg:h-[420px] sm:h-96 h-80"
              />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <img
                src={Image5}
                alt=""
                className="w-full lg:h-[420px] sm:h-96 h-80"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
