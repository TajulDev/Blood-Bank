import React from 'react';
import Title from '../../../Utils/Title';
import Subtitle from '../../../Utils/Subtitle';
import Counter from '../../Home/Form/Counter'


const Achievement = () => {
    return (
        <section className='achievement__section py-[100px] bg-[#F9FAFB]'>
            <div className="container">
                <div className="achievement__inner">
                    <div className='text-center mb-[80px]'>
                        <Title>OUR ACHIEVEMENTS</Title>
                        <Subtitle>We have been working since 1973 with a prestigious vision to helping patient to provide blood.</Subtitle>
                    </div>
                    <div>
                        <Counter></Counter>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;