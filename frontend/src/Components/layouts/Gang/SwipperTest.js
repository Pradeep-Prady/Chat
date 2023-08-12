import React from "react";
import img from "../../../assets/images/bg1.jpg";
import img1 from "../../../assets/images/bg3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
export default function SwipperTest() {
  const data = [
    {
      id: 1,
      image: img,
    },
    {
      id: 2,
      image: img1,
    },
    {
      id: 3,
      image: img,
    },
    {
      id: 4,
      image: img,
    },
    {
      id: 5,
      image: img,
    },
    {
      id: 6,
      image: img,
    },
    {
      id: 7,
      image: img,
    },
    {
      id: 8,
      image: img,
    },
    {
      id: 9,
      image: img,
    },
    {
      id: 10,
      image: img,
    },
    {
      id: 11,
      image: img,
    },
    {
      id: 12,
      image: img,
    },
    {
      id: 13,
      image: img,
    },
    {
      id: 14,
      image: img,
    },
    {
      id: 15,
      image: img,
    },
  ];

  return (
    <div className="bg-stone-800 w-full h-screen">
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          loop={true}
          modules={[EffectCards]}
        //   className="mySwiper"
        >
          {data.map((d) => (
            <>
              <div className="w-full h-screen bg-slate-700 flex justify-center items-center">
                <SwiperSlide className=" w-full h-screen bg-white">
                  <img src={d.image} alt="fs" />
                </SwiperSlide>
              </div>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
