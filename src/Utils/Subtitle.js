import React from 'react';
import './Title.css'

const Subtitle = ({children}) => {
    return (
        <h4 className="text-[24px] leading-[32px] text-[#484848] font-[400]">{children}</h4>
    );
};

export default Subtitle;