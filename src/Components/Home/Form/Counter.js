import React from 'react';

import './Info.css'

import { RiHeartPulseFill } from 'react-icons/ri';
import { LuStethoscope } from 'react-icons/lu';
import { IoIosPeople } from 'react-icons/io';
import { FaAward } from 'react-icons/fa';

const Counter = () => {

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
        <>
            <div className="counters grid grid-cols-2 lg:grid-cols-4 gap-[35px]">
                {
                    counters.map((counter)=>{
                        const {id, icon, count, cont} = counter;
                        return(
                            <div className='counter pb-[30px] pt-[100px] py-[40px] text-center bg-[#fff] h-[242px]' key={id}>
                                <span className='text-center text-[50px] text-[#333333]'>{icon}</span>
                                <h4 className='text-[32px] text-[#EF3D32] font-[600] mt-[12px]'>{count}</h4>
                                <p className='text-[24px] font-[400] leading-[36px] '>{cont}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Counter;