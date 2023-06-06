import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer__section bg-[#1A1A1A] text-[#fff]">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top flex gap-[80px]">
            <div className="logo">
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
          <div className="footer__mid">
            <div>
                <h4 className="uppercase text-[24px] leading-[36px] mb-[20px]">Contact Us</h4>
                <ul>
                    <li><a href="!#">support@donation.com</a> <br /> <a href="#!">helpme@gmail.com</a></li>
                    <li><a href="!#">Road-2,3/A East Shibgonj Sylhet-3100, Bangladesh</a></li>
                    <li><a href="!#">Office: (+880) 1234567</a> <br /> <a href="#!">Cell: (+880) 1234567</a></li> 
                </ul>
            </div>
          </div>
          <div className="footer__bot"></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
