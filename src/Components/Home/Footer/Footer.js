import React, { useState } from "react";
import "./Footer.css";

import { FiMail } from "react-icons/fi";
import { TbLocationFilled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";

import { BiRightArrow } from "react-icons/bi";
import { useFormik } from "formik";

const Footer = () => {
  const support1 = [
    {
      id: 1,
      link1: "Thalassemia",
      link2: "Cell Elofrosis",
    },
    {
      id: 2,
      link1: "Myelodysasia",
      link2: "Blood Count",
    },
    {
      id: 3,
      link1: "Hemolytimia",
      link2: "Ychromas Eosis",
    },
    {
      id: 4,
      link1: "Hyrcoagulable",
      link2: "Thrombo Xtosis",
    },
    {
      id: 5,
      link1: "Sicklenemiaxs",
      link2: "Aplastic Anemia",
    },
  ];

  const formik = useFormik({
    initialValues: {
      email: "",
    },onSubmit:(value, {resetForm})=>{
      console.log(value)
      resetForm({values: ""})
      localStorage.setItem("submitted Email", JSON.stringify(value))
    }
  });

  const [color, setColor] = useState(false);

  return (
    <section className="footer__section bg-[#1A1A1A] text-[#fff] pt-[40px] lg:pt-[100px]">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top flex flex-col lg:flex-row justify-center lg:justify-start gap-[30px] lg:gap-[80px]">
            <div className="logo ">
              <a href="#!" className="text-[30px] font-[700]">
                <span className="text-[#EF3D32]">BLOOD</span>BANK
              </a>
            </div>
            <div>
              <p className="text-[16px] leading-[28px] ">
                We are world largest and trustful blood donation center. We have
                been working since 1973 with a prestigious vision to helping
                patient to provide blood. We are working all over the world,
                organizing blood donation campaign to grow awareness among the
                people to donate blood.
              </p>
            </div>
          </div>
          <div className="footer__mid pb-[80px] grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            <div>
              <h4 className="uppercase text-[24px] leading-[36px] mb-[20px]">
                Contact Us
              </h4>
              <ul>
                <li>
                  {" "}
                  <span>
                    <FiMail />
                  </span>{" "}
                  <div>
                    <a href="#!"> support@donation.com</a> <br />{" "}
                    <a href="#!">helpme@gmail.com</a>
                  </div>
                </li>
                <li>
                  {" "}
                  <span>
                    <TbLocationFilled />
                  </span>{" "}
                  <a href="#!">
                    {" "}
                    Road-2,3/A East Shibgonj <br /> Sylhet-3100, Bangladesh
                  </a>
                </li>
                <li>
                  {" "}
                  <span>
                    <FaPhoneAlt />
                  </span>{" "}
                  <div>
                    <a href="#!"> Office: (+880) 1234567</a> <br />{" "}
                    <a href="#!">Cell: (+880) 1234567</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="support__ft">
              <h4 className="uppercase text-[24px] leading-[36px] mb-[20px]">
                Support Links
              </h4>
              <div className="flex gap-[20px] md:gap-[40px]">
                <ul>
                  {support1.map((links) => {
                    const { id, link1 } = links;
                    return (
                      <li
                        key={id}
                        onClick={() => setColor(true)}
                        className={color ? "text-[#EF3D32]" : "text-[#fff]"}
                      >
                        {" "}
                        <span>
                          <BiRightArrow />
                        </span>{" "}
                        <a href="#!">{link1}</a>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {support1.map((links) => {
                    const { id, link2 } = links;
                    return (
                      <li
                        key={id}
                        onClick={() => setColor(true)}
                        className={color ? "text-[#EF3D32]" : "text-[#fff]"}
                      >
                        {" "}
                        <span>
                          <BiRightArrow />
                        </span>{" "}
                        <a href="#!">{link2}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="subs__ft">
              <h4 className="uppercase text-[24px] leading-[36px] mb-[20px]">
                Subscribe Us
              </h4>
              <p className="text-[16px] leading-[30px] mb-[15px]">
                Signup for regular newsletter and stay up to date with our
                latest news.
              </p>
              <form onSubmit={formik.handleSubmit}>
                <input
                  onChange={formik.handleChange}
                  className="w-[100%] h-[50px] bg-[#444444] mb-[20px]"
                  type="email"
                  id="emailss"
                  name="email"
                  value={formik.values.email}
                  placeholder="Enter Your Email"
                  required
                />
                <button
                  className="text-[16px] py-[8px] px-[20px] bg-[#EF3D32]"
                  type="submit"
                >
                  SUBSCRIBE NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bot py-[40px] border-t-[1px] border-[#2C2C2C] ">
        <div className="container text-center text-[17px] leading-[28px]">
          <p>Copyright © 2023 OPEDIA TECH. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
