import React from "react";
import "./News.css";
import Title from "../../../Utils/Title";
import Subtitle from "../../../Utils/Subtitle";

import { BiTimeFive } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

import newsImg1 from "../../../Image/section/campaign1.jpg";
import newsImg2 from "../../../Image/section/campaign2.jpg";
import newsImg3 from "../../../Image/section/campaign3.jpg";
import OrgBtn from "../../../Utils/OrgBtn";

const News = () => {
  const newses = [
    {
      id: 1,
      img: newsImg1,
      plusI: <BsPlusLg />,
      title: "BLOOD CONNECTS US ALL IN A SOUL",
      timeI: <BiTimeFive />,
      time: "April 14, 2022",
      comI: <FaRegComment />,
      com: "10 Comments",
      cont: "In many countries, demand exceeds supply, and blood services face the challenge of making blood available for patient.",
    },
    {
      id: 2,
      img: newsImg2,
      plusI: <BsPlusLg />,
      title: "GIVE BLOOD AND SAVE THREE LIVES",
      timeI: <BiTimeFive />,
      time: "April 14, 2022",
      comI: <FaRegComment />,
      com: "10 Comments",
      cont: "To save a life, you don't need to use muscle. By donating just one unit of blood, you can save three lives or even several lives.",
    },
    {
      id: 3,
      img: newsImg3,
      plusI: <BsPlusLg />,
      title: "WHY SHOULD I DONATE BLOOD ?",
      timeI: <BiTimeFive />,
      time: "April 14, 2022",
      comI: <FaRegComment />,
      com: "10 Comments",
      cont: "Blood is the most precious gift that anyone can give to another person.Donating blood not only saves the life also donors.",
    },
  ];

  return (
    <div className="news__section py-[100px]">
      <div className="container">
        <div className="news__inner">
          <div className="text-center mb-[30px]">
            <Title> Latest News </Title>
            <Subtitle>
              Latest news and statements regarding giving blood processing
            </Subtitle>
          </div>
          <div className="news__boxes grid sm:grid-cols-2 lg:grid-cols-3 mb-[40px] gap-[25px]">
            {newses.map((news) => {
              const { id, img, plusI, title, timeI, time, comI, com, cont } =
                news;
              return (
                <div className="news__box" key={id}>
                  <div className="news__img">
                    <img className="h-[220px] w-[100%]" src={img} alt="img" />
                    <span className="h-[40px] w-[40px] leading-[40px] text-center absolute left-[50%] top-[50%] bg-[red]">{plusI}</span>
                  </div>
                  <div className="news__content bg-[#F9F9F9] py-[15px] pt-[27px] pb-[35px]">
                    <h4 className="text-[22px] leading-[36px] font-[600] text-[#4E4E4E]">
                      {title}
                    </h4>
                    <div className="flex gap-[10px] items-center text-[14px] leading-[28px] text-[#333] items-center mt-[15px] mb-[20px]">
                      <span className="flex gap-[5px] items-center">
                        <span>{timeI}</span>
                        <span>{time}</span>
                      </span>
                      <span className="flex gap-[5px] items-center">
                        <span>{comI}</span>
                        <span>{com}</span>
                      </span>
                    </div>
                    <p className="text-[16px] text-[#333] leading-[28px]">{cont}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <button>
                <OrgBtn>-Load More Blog-</OrgBtn>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
