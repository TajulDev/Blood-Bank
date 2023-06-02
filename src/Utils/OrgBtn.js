import React from 'react';
import './Btn.css'

const OrgBtn = ({children}) => {
    return (
        <>
            <button className='orange__btn bg-[#EF3D32] text-[18px] text-[#fff] hover:bg-[gray] 
                leading-[32px] py-[14px] px-[36px] font-[600]'>
                {children}
            </button>   
        </>
    );
};

export default OrgBtn;