import React from 'react';
import './Btn.css'

const OrgBtn = ({children}) => {
    return (
        <>
            <span className='orange__btn bg-[#EF3D32] text-[18px] text-[#fff] hover:bg-[gray] 
                leading-[32px] py-[14px] px-[36px] font-[600] inline-block'>
                {children}
            </span>   
        </>
    );
};

export default OrgBtn;