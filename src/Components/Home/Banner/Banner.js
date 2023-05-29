import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import banner1 from '../../../Image/bg/banner1.jpg'
import banner2 from '../../../Image/bg/banner2.jpg'
import banner3 from '../../../Image/bg/banner3.jpg'
import OrgBtn from '../../../Utils/OrgBtn';
import NgBtn from '../../../Utils/NgBtn';

const Banner = () => {

    const sliders = [
        {
            id : 1,
            bg: banner1,
            cont1: 'Donate Blood, Save Life!',
            cont2: 'YOUR BLOOD CAN BRING SMILE IN OTHER PERSONS FACE',
            btn: { botton1: "DONATE NOW"}  
        },
        {
            id : 2,
            bg: banner2,
            cont1: "Donate Blood, Save Life!",
            cont2: "DONATE BLOOD AND INSPIRE OTHERS",
            btn:{
                botton1: "DONATE NOW",
                botton2:"CALL: 016 000000"
            }
            
        },
        {
            id : 3,
            bg: banner3,
            cont1: 'Donate Blood, Save Life!',
            cont2: 'YOUR BLOOD CAN BRING SMILE IN OTHER PERSONS FACE',
            btn: { botton1: "DONATE NOW"} 
        }
    ]  

    return (
        <div className='banner__section'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >  
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
                {
                    sliders.map((slider, index) => {
                        const {id, bg, cont1, cont2, btn} = slider
                        return (
                            <SwiperSlide key={id} style={{backgroundImage:`url(${bg})`}}> 
                                <div className="container">
                                    <div className="slider__inn">
                                        <div className="slider__content">
                                            <h4>{cont1}</h4>
                                            <h2>{cont2}</h2>
                                            <div className='banner__btn'>
                                                {btn?.botton1 && <OrgBtn>{btn?.botton1}</OrgBtn>}
                                                {btn?.botton2 && <NgBtn>{btn?.botton2}</NgBtn>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default Banner;