import React from "react";
import Title from "../../../Utils/Title";

import { ImPlay3 } from "react-icons/im";

import "./WorkFlow.css";

const WorkFlow = () => {
  return (
    <section className="work__flow py-[100px]">
      <div className="container">
        <div className="flow__inner">
          <div className="grid grid-cols- md:grid-cols-2">
            <div className="work__content bg-[#F9FAFB] px-[36px] pt-[42px] pb-[32px] md:mt-[42px] md:me-[-80px] z-[99]">
              <Title>Who Are We?</Title>
              <p className="text-[16px] text-[#575755] leading-[28px] font-[400] mb-[20px]">
                Blood Buddies is for public donation center with blood donation
                members in the changing health care system.
              </p>
              <ul>
                <li>Specialist blood donors and clinical supervision.</li>
                <li>Increasing communication with our members.</li>
                <li>High quality assessment, diagnosis and treatment.</li>
                <li>Examine critically to ensure alignment.</li>
                <li>The extra care of a multi-disciplinary team.</li>
              </ul>
            </div>
            <div className="work__vid w-[100%] h-[400px] md:h-[] md:mb-[100px] z-[9] bg-center bg-cover bg-no-repeat relative flex justify-center items-center">
              <span className="text-[34px] text-[#E93B31] hover:text-[#fff] h-[100px] w-[100px] border-[6px] border-[#fff]
               hover:border-[#E93B31] flex justify-center items-center z-99 rounded-[50%] cursor-pointer
               bg-[#0000005e] hover:bg-[#555555bd] ease-in-out duration-300">
                <ImPlay3/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
