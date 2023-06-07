import React, { useState } from "react";
import OrgBtn from "../../../Utils/OrgBtn";

import "./Menu.css";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
  FaAddressCard,
  FaPhoneAlt,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const Menu = () => {
  const [display, setDisplay] = useState(false);

  const socials = [
    {
      id: 1,
      icon: <FaFacebookF />,
      lnk: "https://www.facebook.com/login/",
    },
    {
      id: 2,
      icon: <FaYoutube />,
      lnk: "https://www.facebook.com/login/",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      lnk: "https://www.facebook.com/login/",
    },
    {
      id: 4,
      icon: <FaLinkedinIn />,
      lnk: "https://www.facebook.com/login/",
    },
  ];

  return (
    <nav className="nav__bar">
      <div className="top__bar py-[10px] bg-[#EF3D32] text-[#fff]">
        <div className="container">
          <div className="flex flex-col gap-[20px] lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row gap-[5px] lg:gap-[20px] items-center">
              <span className="flex items-center text-[17px] leading-[28px]">
                {" "}
                <FaAddressCard />{" "}
                <strong className="ms-[10px] me-[8px]">Contact:</strong>{" "}
                California, USA
              </span>
              <span>
                <a className="flex items-center gap-[8px]" href="">
                  <FaPhoneAlt />
                  <strong>Call: </strong> +122-0000000
                </a>
              </span>
            </div>
            <ul className="flex gap-[10px] ">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    className="h-[25px] w-[25px] bg-[#fff] text-[#555] flex justify-center items-center rounded-[50%] text-[16px] hover:text-[#EF3D32]"
                    target="_blank"
                    href={social.lnk}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="menu py-[20px] bg-[lightGray]">
        <div className="container">
          <div className="menu__inner flex  gap-[10px] justify-between items-center ">
            <div className="logo">
              <a href="#!" className="text-[30px] font-[700]">
                <span className="text-[#EF3D32]">BLOOD</span>BANK
              </a>
            </div>
            <ul className="hidden lg:flex gap-[30px] font-[500] text-[17px]">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/about">ABOUT US</a>
              </li>
              <li>
                <a href="/campaign">CAMPAIGN</a>
              </li>
              <li>
                <a href="#!">PAGES</a>
              </li>
              <li>
                <a href="#!">BLOG</a>
              </li>
              <li>
                <a href="#!">CONTACT</a>
              </li>
            </ul>
            <span
              onClick={() => setDisplay(true)}
              className="cursor-pointer font-[600] text-[25px] block lg:hidden"
            >
              <AiOutlineMenu />
            </span>
          </div>
        </div>
      </div>

      <div
        className={
          display
            ? "menu__open p-[40px] absolute left-0 top-0 w-[100%] sm:w-[50%] h-[100vh] bg-[#000] text-[#fff] z-[999]"
            : " mobile__menu  p-[40px] absolute left-0 top-0 w-[100%] sm:w-[50%] h-[100vh] bg-[#000] text-[#fff] z-[999]"
        }
      >
        <div className="mobile__top flex items-center justify-between mb-[30px]">
          <a href="#!" className="text-[30px] font-[700]">
            <span className="text-[#EF3D32]">BLOOD</span>BANK
          </a>
          <span
            onClick={() => setDisplay(false)}
            className="cursor-pointer font-[700] text-[30px]"
          >
            <RxCross2 />
          </span>
        </div>
        <ul className="text-[22px] font-600 leading-[36px]">
          <li>
            <a href="#!">HOME</a>
          </li>
          <li>
            <a href="#!">ABOUT US</a>
          </li>
          <li>
            <a href="#!">CAMPAIGN</a>
          </li>
          <li>
            <a href="#!">PAGES</a>
          </li>
          <li>
            <a href="#!">BLOG</a>
          </li>
          <li>
            <a href="#!">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;