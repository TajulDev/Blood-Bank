import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import './Campaign.css'

import { FaRegCalendarAlt } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

import { FreeMode, Navigation } from "swiper";
import "swiper/css";

import campaign1 from "../../../Image/section/campaign1.jpg";
import campaign2 from "../../../Image/section/campaign2.jpg";
import campaign3 from "../../../Image/section/campaign3.jpg";
import Title from "../../../Utils/Title";
import Subtitle from "../../../Utils/Subtitle";
import OrgBtn from "../../../Utils/OrgBtn";
// import { SwiperSlide } from "swiper/react";

const Campaign = () => {
  const campaigns = [
    {
      id: 1,
      img: campaign1,
      icon1: <FaRegCalendarAlt />,
      date: "14 june, 2023",
      title: "Blood Group Collection",
      desc: "Lorem ipsum dolor sit amet turadipi scing elit lobort issim consecte dign pharetra mauris.",
      icon2: <BsClock />,
      time: "10:30 - 03:00",
      icon3: <MdLocationPin />,
      address: "California, USA"
    },

    {
      id: 2,
      img: campaign2,
      icon1: <FaRegCalendarAlt />,
      date: "14 june, 2023",
      title: "Blood Group Collection",
      desc: "Lorem ipsum dolor sit amet turadipi scing elit lobort issim consecte dign pharetra mauris.",
      icon2: <BsClock />,
      time: "10:30 - 03:00",
      icon3: <MdLocationPin />,
      address: "California, USA"
    },

    {
      id: 3,
      img: campaign3,
      icon1: <FaRegCalendarAlt />,
      date: "14 june, 2023",
      title: "Blood Group Collection",
      desc: "Lorem ipsum dolor sit amet turadipi scing elit lobort issim consecte dign pharetra mauris.",
      icon2: <BsClock />,
      time: "10:30 - 03:00",
      icon3: <MdLocationPin />,
      address: "California, USA"
    },
  ];

  return (
    <div className="campaign__section section__gap">
      <div className="container">
        <div className="campaign__inner">
          <div className="campaign__title mb-[48px]">
            <Title>OUR CAMPAIGNS</Title>
            <Subtitle>
              Encourage new donors to join and continue to give blood. We have
              total sixty thousands donor centers and visit thousands of other
              venues on various occasions.
            </Subtitle>
          </div>
          <div className="campaigns">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                1110: { slidesPerView: 2 }
              }}
              freeMode={true}
              loop
              navigation={{
                clickable: true,
              }}
              modules={[FreeMode, Navigation]}
              className="campaign__swiper pb-[100px]"
            >
                {
                    campaigns.map(campaign => {
                        const {id, img, icon1, date, title, desc, icon2, time, icon3, address} = campaign;
                        return(
                            <SwiperSlide className="" key={id}>
                              <div className="flex flex-col sm:flex-row campaign">
                                  <img className="max-w-[100%] sm:max-w-[225px] h-[100%]" src={img} alt="img" />
                                  <div className="campaign__content p-[20px]">
                                      <div className="flex gap-[8px] items-center">
                                          <span>{icon1}</span>
                                          <span className="text-[15px] text-[#4E4E4E] leading-[28px]">{date}</span>
                                      </div>
                                      <h4 className="text-[24px] leading-[36px] mt-[14px] mb-[10px]">{title}</h4>
                                      <p className="text-[16px] leading-[28px] text-[#333] mb-[20px]">{desc}</p>
                                      <div className="flex gap-[12px]">
                                          <div className="flex gap-[8px] items-center"> 
                                              <span>{icon2}</span>
                                              <span className="text-[15px] text-[#4E4E4E] leading-[28px]">{time}</span>
                                          </div>
                                          <div className="flex gap-[8px] items-center">
                                              <span>{icon3}</span>
                                              <span className="text-[15px] text-[#4E4E4E] leading-[28px]">{address}</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper> 
            
            <div className="text-center">
              <button><OrgBtn>LOAD ALL CAMPAIGNS</OrgBtn></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;