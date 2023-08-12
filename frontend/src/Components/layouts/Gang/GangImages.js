import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import MetaData from "../MetaData";
import Loader from "../Loader";
import ImageCard from "./ImageCard";
import 'swiper/css/effect-fade';

import { Pagination, Navigation, History,EffectCoverflow } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';


export default function GangImages() {

  const [firstSwiper, setFirstSwiper] = useState(0);

  const { gangImages, loading } = useSelector(
    (state) => state.gangImagesState
  );
 

  return (
    <>
      <MetaData title={"Gang Images"} />

      <div className="w-full h-screen">
        <div className="flex-row items-center justify-center  z-10">
          {loading ? (
            <Loader />
          ) : (
            <>
              <Swiper
                loop={true}
                initialSlide={firstSwiper}
                direction={"horizontal"}
               
                pagination={{
                  type: "progressbar",
                }}
                history={{
                  key: "images",
                }}
                zoom={true}
                navigation={true}
                modules={[Pagination, Navigation, History,EffectCoverflow]}
                className="mySwiper "
              >
                {gangImages?.map((gangImage, index) => (
                  <SwiperSlide
                    data-history={index}
                    key={gangImage?._id}
                    className="w-full h-screen z-10 "
                  >
                    <ImageCard gangImage={gangImage} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
      </div>
    </>
  );
}
