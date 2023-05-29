import React from "react";
import "./Process.css";

import process1 from "../../../Image/section/process1.jpg";
import process2 from "../../../Image/section/process2.jpg";
import process3 from "../../../Image/section/process3.jpg";
import Title from "../../../Utils/Title";
import Subtitle from "../../../Utils/Subtitle";

const Process = () => {
  const processes = [
    {
      id: 1,
      step: 1,
      img: process1,
      title: "REGISTRATION",
      desc: "You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.",
    },
    {
      id: 2,
      step: 2,
      img: process2,
      title: "SCREENING",
      desc: "A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.",
    },
    {
      id: 1,
      step: 3,
      img: process1,
      title: "DONATION",
      desc: "After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.",
    },
  ];

  return (
    <div className="process__section py-[100px]">
      <div className="container">
        <div className="process__inner">
          <div className="Title text-center mb-[25px]">
            <Title>DONATION PROCESS</Title>
            <Subtitle>The donation process from the time you arrive center until the time you leave</Subtitle>
          </div>
          <div className="processes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {
                processes.map((process, index)=>{
                    const {step, img, title, desc} = process;
                    return(
                        <div key={index} className="process bg-[#F8F9FA]">
                            <div className="relative">
                                <img src={img} alt="img" />
                                <h4 className="absolute w-[100px] h-[100px] leading-[100px] text-[60px] text-[#fff] text-center font-[600] bg-[#ef3d32cc]">{step}</h4>
                            </div>
                            <div className="py-[32px] px-[16px]">
                              <h3 className="text-[28px] leading-[36px] text-[#1A1A1A] font-[600] mb-[16px]">{title}</h3>
                              <p className="text-[17px] leading-[28px] text-[#333333]">{desc}</p>
                            </div>
                        </div>
                    )
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
