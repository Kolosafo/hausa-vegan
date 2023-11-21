"use client"
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import Button from "./button";
import { useRouter } from "next/navigation";

const AboutProducts = () => {
  const router = useRouter()
  const three = [
    {
      title: "Kuli Kuli",
      image: "/logo.png",
      description:
        "Our kuli kuli is made of peanuts that are grounded and pressed to seperate pulp from oil. The residue is seasoned to perfection and used as a dry rub or shapes into kuli kuli crackers",
    },
    {
      title: "Yaji",
      image: "/logo.png",
      description:
        "Yaji is northern Nigerian culinary currency. It is a blend of peppers and spices that is popular in Kano Nigeria. It is great for cooking, marinading and sprinkling on food.",
    },
    {
      title: "Suya spice",
      image: "/logo.png",
      description:
        "Suya spice aka yajin tsire is a  kuli kuli based spice rub made of peppers and aromatic spices which is traditionally used to marinade meat skewers.",
    },
    {
      title: "Daddawa",
      image: "/logo.png",
      description:
        "Daddawa is a popular West African traditional seasoning. The bean itself is derived from “dorawa”  aka parkia biglobosa seeds, and manually processed into the amazing culinary funky magic that it is. It is a natural flavor enhancer",
    },
    {
      title: "Atta-mang aioli",
      image: "/logo.png",
      description:
        "Sweet-Heat! Atta-mang aioli is made with attarugu (habanero) and mango. The duo makes the perfect sweet and spicy combination. Our mango is caramalized and pulsed into a paste that compliments the floral sweetness of our roasted peppers.",
    },
  ];
  return (
    <div className="py-20 w-full bg-slate-100 flex fullCenter flex-col gap-8 px-20">
      <span className="text-3xl font-bold mb-10">Our Products</span>
      <div className="w-full h-full">
        <Swiper
          className="h-full w-full flex fullCenter"
          slidesPerView={1}
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          //   onSlideChange={}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={true}
        >
          {three.map((item) => {
            return (
              <SwiperSlide
                key={item.title}
                style={{ display: "flex" }}
                className="h-full fullCenter relative"
              >
                <div className="flex flex-col h-full w-1/2 gap-10 items-center justify-center mb-5">
                  <motion.div className="text-xl text-center gap-8 flex flex-col fullCenter font-semibold">
                    <span>{item.title}</span>
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      alt="testim1"
                      className="w-full"
                    />
                  </motion.div>
                  <motion.span className="text-inherit font-normal text-center">
                    {item.description}
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
      <div onClick={() => router.push("/shop/products")}>

        <Button text="Shop Now"/>
      </div>
    </div>
  );
};

export default AboutProducts;
