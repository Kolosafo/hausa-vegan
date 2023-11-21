"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import Button from "./button";
import Image from "next/image";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  };
  const three = [1, 2, 4];
  return (
    <div className="flex flex-col items-center mt-10 h-[60vh] w-full">
      <span className="text-3xl font-bold mb-5">Our customer say</span>
      <div className="w-full mb-10 h-full">
        <Swiper
          className="h-full flex fullCenter"
          slidesPerView={2}
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          onSlideChange={handleSlideChange}
          modules={[Autoplay, Pagination, Navigation]}
          // navigation={true}
        >
          {three.map((item) => {
            return (
              <SwiperSlide
                key={item}
                style={{ display: "flex" }}
                className="h-full fullCenter relative"
              >
                <div className="flex flex-col h-full w-full gap-5 items-center justify-center mb-5">
                  <motion.div
                    // transition={{
                    //   duration: 0.4,
                    //   delay: 0.1,
                    // }}
                    // initial={{ y: 40, opacity: 0 }}
                    // animate={{
                    //   y: currentSlide === 0 ? 1 : 40,
                    //   opacity: currentSlide === 0 ? 1 : 0,
                    // }}
                    className="text-xl font-semibold"
                  >
                    <span>Aisha Jones</span>
                    <Image
                      src={"/img/testimonial/testim-img1.png"}
                      width={100}
                      height={100}
                      alt="testim1"
                      className="object-fit"
                    />
                  </motion.div>
                  <motion.span
                    // transition={{
                    //   duration: 0.3,
                    //   delay: 0.2,
                    // }}
                    // initial={{ y: 40, opacity: 0 }}
                    // animate={{
                    //   y: currentSlide === 0 ? 1 : 40,
                    //   opacity: currentSlide === 0 ? 1 : 0,
                    // }}
                    className="text-inherit font-normal w-1/2 text-center"
                  >
                    Our unique and untapped approach to Love Chart Readings will
                    unlock the celestial secret that lie within the depths of
                    your birth chart.
                  </motion.span>
                  <motion.div
                    // transition={{
                    //   duration: 0.6,
                    //   delay: 1.4,
                    // }}
                    // initial={{ y: 40, opacity: 0 }}
                    // animate={{
                    //   y: currentSlide === 0 ? 1 : 40,
                    //   opacity: currentSlide === 0 ? 1 : 0,
                    // }}
                  >
                    {/* <Button text="Shop now" /> */}
                  </motion.div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
