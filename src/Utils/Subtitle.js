import React from 'react';
import './Title.css'

const Subtitle = ({children}) => {
    return (
        <h4 className="Subtitle text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] text-[#484848] font-[400]">{children}</h4>
    );
};

export default Subtitle;