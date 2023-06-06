import React from 'react';
import './News.css'
import Title from '../../../Utils/Title';
import Subtitle from '../../../Utils/Subtitle'; 

import { BiTimeFive } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';

import newsImg1 from "../../../Image/section/campaign1.jpg"
import newsImg2 from "../../../Image/section/campaign2.jpg"
import newsImg3 from "../../../Image/section/campaign3.jpg"

const News = () => {

    const newses = [
        {
            id: 1,
            img: newsImg1,
            plusI: <BsPlusLg />,
            title: "BLOOD CONNECTS US ALL IN A SOUL",
            timeI: <BiTimeFive />,
            time: "April 14, 2022",
            comI: <FaRegComment />,
            com: "10 Comments",        
            cont: "In many countries, demand exceeds supply, and blood services face the challenge of making blood available for patient.",
        },
        {
            id: 2,
            img: newsImg2,
            plusI: <BsPlusLg />,
            title: "GIVE BLOOD AND SAVE THREE LIVES",
            timeI: <BiTimeFive />,
            time: "April 14, 2022",
            comI: <FaRegComment />,
            com: "10 Comments",        
            cont: "To save a life, you don't need to use muscle. By donating just one unit of blood, you can save three lives or even several lives.",
        },
        {
            id: 3,
            img: newsImg3,
            plusI: <BsPlusLg />,
            title: "WHY SHOULD I DONATE BLOOD ?",
            timeI: <BiTimeFive />,
            time: "April 14, 2022",
            comI: <FaRegComment />,
            com: "10 Comments",        
            cont: "Blood is the most precious gift that anyone can give to another person.Donating blood not only saves the life also donors.",
        },
    ]

    return (
        <div className='news__section'>
            <div className="container">
                <div className="news__inner">
                    <div className='text-center'>
                        <Title> Latest News </Title>
                        <Subtitle>Latest news and statements regarding giving blood processing</Subtitle>
                    </div>
                    <div className="news__boxes">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;