import React from 'react';
import Title from '../../../Utils/Title';

import './AboutBanner.css'

const AboutBanner = () => {
    return (
        <div className='about__banner py-[100px] relative bg-no-repeat'>
            <div className="container">
                <div className="aboutBanner__inner flex justify-center">
                    <div>
                        <Title>About Us</Title>
                        <p className='text-center text-[18px] text-[#333] font-[500]'><a href="/">Home</a> / About Us</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;