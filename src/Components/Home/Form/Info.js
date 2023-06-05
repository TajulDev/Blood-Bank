import React from 'react';
import './Info.css'
import Title from '../../../Utils/Title';
import Subtitle from '../../../Utils/Subtitle';
import Form from './Form';

import { RiHeartPulseFill } from 'react-icons/ri';
import { LuStethoscope } from 'react-icons/lu';
import { IoIosPeople } from 'react-icons/io';
import { FaAward } from 'react-icons/fa';

// import infoBg from "../../../Image/bg/holdingHeart.jpg"

const Info = () => {

    const counters = [
        {
            id : 1,
            icon: <RiHeartPulseFill />,
            count: 2527,
            cont: "Success Smile"
        },
        {
            id : 2,
            icon: <LuStethoscope />,
            count: 3235,
            cont: "Happy Donors"
        },
        {
            id : 3,
            icon: <IoIosPeople />,
            count: 3568,
            cont: "Happy Recipient"
        },
        {
            id : 4,
            icon: <FaAward />,
            count: 1364,
            cont: "Total Award"
        }
    ]

    return (
        <div className='info__section section__gap'>
            <div className="info__bg h-[560px]"></div>
            <div className="container">
                <div className="info__inner pt-[100px]">
                    <div className='grid lg:grid-cols-2 gap-[40px] mb-[50px]'>
                        <div className="info__content">
                            <div>
                                <Subtitle> Good To Know</Subtitle>
                                <Title>Helpful Information</Title>
                            </div>
                            <div>
                                <ul>
                                    <li>Maintain a healthy iron level by eating iron rich foods.</li>
                                    <li>Drink an extra 16 oz. of water prior to your donation.</li>
                                    <li>Avoid alcohol consumption before your blood donation.</li>
                                    <li>Remember to bring the donor card or national ID/Passport.</li>
                                    <li>Finally, Try to get a good night sound sleep after donation.</li>
                                </ul>
                            </div>
                        </div>
                        <Form></Form>
                    </div>
                    <div className="counters grid grid-cols-2 lg:grid-cols-4 gap-[35px]">
                        {
                            counters.map((counter)=>{
                                const {id, icon, count, cont} = counter;
                                return(
                                    <div className='counter pb-[30px] pt-[100px] py-[40px] text-center bg-[#fff] h-[242px]' key={id}>
                                        <span className='text-center text-[50px] text-[#333333]'>{icon}</span>
                                        <h4 className='text-[32px] text-[#EF3D32] font-[500] mt-[12px]'>{count}</h4>
                                        <p className='text-[24px] font-[400] leading-[36px] '>{cont}</p>
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

export default Info;