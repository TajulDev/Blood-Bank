import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import './Gallery.css'

import Title from '../../../Utils/Title';
import Subtitle from '../../../Utils/Subtitle';

import gallery1 from "../../../Image/section/gallery1.jpg"
import gallery2 from "../../../Image/section/campaign1.jpg"
import gallery3 from "../../../Image/section/campaign2.jpg"
import gallery4 from "../../../Image/section/campaign3.jpg"

const Gallery = () => {
    const gSlides = [
        {
            id: 1,
            img: gallery1,
        },
        {
            id: 2,
            img: gallery2,
        },
        {
            id: 3,
            img: gallery3,
        },
        {
            id: 4,
            img: gallery4,
        }
    ]

    return (
        <div className='gallery__section py-[100px] bg-[#F9FAFB]'>
            <div className="container">
                <div className="gallery__inner">
                    <div className='text-center mb-[40px]'>
                        <Title>CAMPAIGN GALLERY</Title>
                        <Subtitle>our prestigious voluntary work on campaigns by the team</Subtitle>
                    </div>
                    <div>
                        <Swiper
                            spaceBetween={20}
                            // slidesPerView={3}
                            breakpoints={{
                                540: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 }
                              }}
                                pagination={{ clickable: true}}
                            loop={true}
                            // autoplay={{ delay: 500, disableOnInteraction: false  }}
                             modules={[Pagination]}
                             className='gallery__swiper'>
                            
                            <div className=''>
                                {
                                    gSlides.map((gSlide => {
                                        return(
                                            <SwiperSlide>
                                                <div className="swiper__body">
                                                    <img src={gSlide.img} alt="" />
                                                </div>
                                            </SwiperSlide>

                                        )
                                    }))
                                }
                            </div>
                            
                        </Swiper>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Gallery;