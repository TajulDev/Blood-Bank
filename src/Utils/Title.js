import React from 'react';
import './Title.css'

const Title = ({children}) => {
    return (
            <h2 className="Title text-[32px] md:text-[42px] leading-[42px] text-[#555] pb-[10px] mb-[10px] font-[700] relative">
                {children}
            </h2>
    );
};

export default Title;