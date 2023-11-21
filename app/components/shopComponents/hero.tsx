"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Button from "./button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  };
  const router = useRouter();
  return (
    <div className="w-full h-[90vh]">
      <Swiper
        className="h-full flex fullCenter"
        slidesPerView={1}
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
        navigation={true}
      >
        <SwiperSlide
          style={{ display: "flex" }}
          className="h-full heroBg-1 fullCenter relative"
        >
          <div className="flex flex-col gap-5 items-center justify-center text-white">
            <motion.span
              transition={{
                duration: 0.4,
                delay: 1,
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: currentSlide === 0 ? 1 : 40,
                opacity: currentSlide === 0 ? 1 : 0,
              }}
              className="text-xl font-semibold"
            >
              Top Selling!
            </motion.span>
            <motion.h1
              transition={{
                duration: 0.3,
                delay: 1.2,
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: currentSlide === 0 ? 1 : 40,
                opacity: currentSlide === 0 ? 1 : 0,
              }}
              className="text-5xl text-inherit font-semibold"
            >
              Fresh for your health
            </motion.h1>
            <motion.div
              transition={{
                duration: 0.6,
                delay: 1.4,
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: currentSlide === 0 ? 1 : 40,
                opacity: currentSlide === 0 ? 1 : 0,
              }}
            >
              <div onClick={() => router.push("/shop/products")}>
                <Button text="Shop now" />
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex" }}
          className="h-full heroBg-2 relative"
        >
          <div className="flex flex-col gap-5 pl-40 items-start justify-center text-white">
            <motion.span
              transition={{
                duration: 0.4,
                delay: 1,
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: currentSlide === 1 ? 1 : 40,
                opacity: currentSlide === 1 ? 1 : 0,
              }}
              className="text-xl font-semibold"
            >
              Top Selling!
            </motion.span>
            <motion.h1
              transition={{
                duration: 0.3,
                delay: 1.2,
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: currentSlide === 1 ? 1 : 40,
                opacity: currentSlide === 1 ? 1 : 0,
              }}
              className="text-5xl text-inherit font-semibold"
            >
              Fresh for your health
            </motion.h1>
            <motion.div
              transition={{
                duration: 0.6,
                delay: 1.4,
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: currentSlide === 1 ? 1 : 40,
                opacity: currentSlide === 1 ? 1 : 0,
              }}
            >
              <div onClick={() => router.push("/shop/products")}>
                <Button text="Shop now" />
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex" }}
          className="h-full heroBg-3 justify-end relative"
        >
          <div className="flex flex-col gap-5 pr-40 items-start justify-center text-white">
            <motion.span
              transition={{
                duration: 0.4,
                delay: 1,
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: currentSlide === 2 ? 1 : 40,
                opacity: currentSlide === 2 ? 1 : 0,
              }}
              className="text-xl font-semibold"
            >
              Top Selling!
            </motion.span>
            <motion.h1
              transition={{
                duration: 0.3,
                delay: 1.2,
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: currentSlide === 2 ? 1 : 40,
                opacity: currentSlide === 2 ? 1 : 0,
              }}
              className="text-5xl text-inherit font-semibold"
            >
              Fresh for your health
            </motion.h1>
            <motion.div
              transition={{
                duration: 0.6,
                delay: 1.4,
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: currentSlide === 2 ? 1 : 40,
                opacity: currentSlide === 2 ? 1 : 0,
              }}
            >
              <div onClick={() => router.push("/shop/products")}>
                <Button text="Shop now" />
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
