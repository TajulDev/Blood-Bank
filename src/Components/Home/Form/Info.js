import React from 'react';
import './Info.css'
import Title from '../../../Utils/Title';
import Subtitle from '../../../Utils/Subtitle';
import Form from './Form';
import Counter from './Counter';


// import infoBg from "../../../Image/bg/holdingHeart.jpg"

const Info = () => {


    return (
        <div className='info__section section__gap'>
            <div className="info__bg h-[560px]"></div>
            <div className="container">
                <div className="info__inner pt-[100px]">
                    <div className='grid lg:grid-cols-2 gap-[40px] mb-[50px]'>
                        <div className="info__content">
                            <div>
                                <Subtitle> Good To Know</Subtitle>
                                <Title>Helpful Information</Title>
                            </div>
                            <div>
                                <ul>
                                    <li>Maintain a healthy iron level by eating iron rich foods.</li>
                                    <li>Drink an extra 16 oz. of water prior to your donation.</li>
                                    <li>Avoid alcohol consumption before your blood donation.</li>
                                    <li>Remember to bring the donor card or national ID/Passport.</li>
                                    <li>Finally, Try to get a good night sound sleep after donation.</li>
                                </ul>
                            </div>
                        </div>
                        <Form></Form>
                    </div>
                    <Counter></Counter>
                </div>
            </div>
        </div>
    );
};

export default Info;