import React, { useState, useEffect } from 'react';
import './Donar.css'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import happyDonar1 from '../../../Image/section/donar3.jpg'
import happyDonar2 from '../../../Image/section/donar2.jpg'
import happyDonar3 from '../../../Image/section/donar3.jpg'

const Donars = () => {
    const [donars, setDonars] = useState([])

    useEffect(() => {
        const newDonars = localStorage.getItem('donar')
        if(newDonars){
            setDonars(JSON.parse(newDonars))
        }
    },[])  

    const handleDelete = ()=>{
        localStorage.removeItem("donar") 
        setDonars("")
    }

    const Volunteer = [
        {
            id : 1,
            name: 'John Doe',
            img: happyDonar1,
            phone: '+880 12345678',
            group: 'B+',
            location: 'Dhanmondi, Dhaka',
            fb: <FaFacebookF/>,
            twt: <FaTwitter/>,
            ins: <FaInstagram/>,
            ldn: <FaLinkedinIn />,
            fbLink: 'http://facebook.com',
            twtLink: 'http://twitter.com',
            instLink: 'http://instagram.com',
            ldnLink: 'http://linkedin.com',
        },
        {
            id : 2,
            name: 'Alex Marco',
            img: happyDonar2,
            phone: '+880 12345678',
            group: 'O-',
            location: 'AK Khan, Chittagong',
            fb: <FaFacebookF/>,
            twt: <FaTwitter/>,
            ins: <FaInstagram/>,
            ldn: <FaLinkedinIn />,
            fbLink: 'http://facebook.com',
            twtLink: 'http://twitter.com',
            instLink: 'http://instagram.com',
            ldnLink: 'http://linkedin.com',
        },
        {
            id : 1,
            name: 'Nancy',
            img: happyDonar3,
            phone: '+880 12345678',
            group: 'AB+',
            location: 'Cantonment, Cumilla',
            fb: <FaFacebookF/>,
            twt: <FaTwitter/>,
            ins: <FaInstagram/>,
            ldn: <FaLinkedinIn />,
            fbLink: 'http://facebook.com',
            twtLink: 'http://twitter.com',
            instLink: 'http://instagram.com',
            ldnLink: 'http://linkedin.com',
        }
    ]

    return (
        <section className='donars__section pb-[80px]'>
        <div className='section__img relative'>
            {/* <img className='w-[100%] h-[600px] object-cover' src={happyDonar} alt="img" /> */}
        </div>
            <div className="container">
                <div className="doners__inner grid grid-cols-3 gap-[24px]">
                    {/* {
                        donars.map((donar, index)=>{
                            const {name, avatar} = donar
                            return(
                                <div className='donar' key={index}>
                                    <p>{name}</p>
                                    <img src={avatar} alt="" />
                                </div>
                            )
                        })
                    } */}
                    {
                        Volunteer.map((volunteer, index)=>{
                            const {id, name, img, group, phone, location, fb, twt, ins, ldn, fbLink, twtLink, ldnLink, instLink} = volunteer
                            return(
                                <div className='donar' key={id}>
                                    <div>
                                        <img src={img} alt="image" />
                                        <div className='py-[10px] px-[20px] '>
                                            <h4 className='text-[20px] font-[600]'>{name} <span className='text-[12px] font-[400]'>({group})</span></h4>
                                            <p className='my-[8px]'><span>Phone:</span> {phone}</p>
                                            <p><span>Location:</span> {location}</p>
                                        </div>
                                    </div>
                                    <ul className='social flex justify-center gap-[20px] py-[20px] border-t-[1px] bg-[#F8F9FA]'>
                                        <li><a target='_blank' href={fbLink}>{fb}</a></li>
                                        <li><a target='_blank' href={twtLink}>{twt}</a></li>
                                        <li><a target='_blank' href={instLink}>{ins}</a></li>
                                        <li><a target='_blank' href={ldnLink}>{ldn}</a></li>
                                    </ul>
                                </div>  
                            )
                        })   
                    }
                </div>
            </div>
        </section>
    );
};

export default Donars;