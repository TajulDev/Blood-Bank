import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "./Banner.css";

import "swiper/css";
import "swiper/css/navigation";

import banner1 from "../../../Image/bg/banner1.jpg";
import banner2 from "../../../Image/bg/banner2.jpg";
import banner3 from "../../../Image/bg/banner3.jpg";
import OrgBtn from "../../../Utils/OrgBtn";
import NgBtn from "../../../Utils/NgBtn";

const Banner = () => {
  const sliders = [
    {
      id: 1,
      bg: banner1,
      cont1: "Donate Blood, Save Life!",
      cont2: "YOUR BLOOD CAN BRING SMILE IN OTHER PERSONS FACE",
      btn: { botton1: "DONATE NOW" },
    },
    {
      id: 2,
      bg: banner2,
      cont1: "Donate Blood, Save Life!",
      cont2: "DONATE BLOOD AND INSPIRE OTHERS",
      btn: {
        botton1: "DONATE NOW",
        botton2: "CALL: 016 000000",
      },
    },
    {
      id: 3,
      bg: banner3,
      cont1: "Donate Blood, Save Life!",
      cont2: "YOUR BLOOD CAN BRING SMILE IN OTHER PERSONS FACE",
      btn: { botton1: "DONATE NOW" },
    },
  ];

  return (
    <div className="banner__section">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation = {{clickable: true}}
        className="banner__swiper"
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay
      >
        {sliders.map((slider, index) => {
          const { bg, cont1, cont2, btn } = slider;
          return (
            <SwiperSlide
              className=""
              key={index}
              style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                // opacity: 100,
              }}
            >
              <div className="container">
                <div className="slider__inn min-h-[600px] lg:min-h-[800px] flex justify-start items-center">
                  <div className="slider__content max-w-[720px]">
                    <h4 className="text-[24px] lg:text-[32px] text-[#fff] leading-[48px] font-[500]">
                      {cont1}
                    </h4>
                    <h2 className="text-[38px] md:text-[48px] lg:text-[60px] text-[#fff] leading-[48px] md:leading-[66px] font-bold mt-[10px] mb-[20px]">
                      {cont2}
                    </h2>
                    <div className="banner__btn flex flex-col md:flex-row  gap-[20px] items-start">
                      {btn?.botton1 && <OrgBtn>{btn?.botton1}</OrgBtn>}
                      {btn?.botton2 && <NgBtn>{btn?.botton2}</NgBtn>}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;