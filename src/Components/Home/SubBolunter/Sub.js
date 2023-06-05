import React from 'react';
import NgBtn from '../../../Utils/NgBtn';

import './Sub.css';

const Sub = () => {
    return (
        <div className='sub__boln py-[65px] bg-[transparent]'>
            <div className="container">
                <div className="sub__inner text-center text-[#fff]">
                    <h3 className='text-[24px] leading-[32px] md:text-[42px] md:leading-[42px] font-bold'>WE HAVE BEEN HELPING PEOPLE SINCE 40 YEARS</h3>
                    <p className='text-[16px] leading-[26px] md:text-[18px] md:leading-[30px] mt-[20px] mb-[30px] font-[500]'>You can give blood at any of our blood donation venues all over the world. We have total sixty thousands donor centers and visit thousands of other venues on various occasions.</p>
                    <a href="#!"><NgBtn>BECOME VOLUNTEER</NgBtn></a> 
                </div>
            </div>
        </div>
    );
};

export default Sub;