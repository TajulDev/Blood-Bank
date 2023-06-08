import React from 'react';
import './Donar.css'

import happyDonar from '../../../Image/bg/happyPeoples.jpg'
import donar1 from '../../../Image/section/donar1.jpg'

const Donars = () => {
    return (
        <section className='donars__section'>
        <div className='section__img relative'>
            <img className='w-[100%] h-[600px] object-cover' src={happyDonar} alt="img" />
        </div>
            <div className="container">
                <div className="doners__inner grid grid-cols-3 gap-[24px]">
                    <div className="donars">
                        <img src={donar1} alt="img" /> 
                        <div>
                            <h4>SAAD LAMZARD</h4>    
                             
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donars;