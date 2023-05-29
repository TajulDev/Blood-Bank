import React from 'react';

const NgBtn = ({children}) => {
    return (
        <button className='ng__btn bg-[#414141] text-[18px] text-[#fff] 
            leading-[32px] py-[14px] px-[36px] font-[500]'>
            {children}
        </button>
    );
};

export default NgBtn;