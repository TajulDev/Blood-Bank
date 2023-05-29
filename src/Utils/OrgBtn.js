import React from 'react';
import './Btn.css'

const OrgBtn = ({children}) => {
    return (
        <>
            <button className='orange__btn bg-[#EF3D32] text-[18px] text-[#fff] 
                leading-[32px] py-[14px] px-[36px] font-[500]'>
                {children}
            </button>   
        </>
    );
};

export default OrgBtn;