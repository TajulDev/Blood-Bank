import React, { useState, useEffect } from 'react';
import './Donar.css'

import happyDonar from '../../../Image/bg/happyPeoples.jpg'
// import donar1 from '../../../Image/section/donar1.jpg'

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

    return (
        <section className='donars__section'>
        <div className='section__img relative'>
            <img className='w-[100%] h-[600px] object-cover' src={happyDonar} alt="img" />
        </div>
            <div className="container">
                <div className="doners__inner grid grid-cols-3 gap-[24px]">
                    {
                        donars.map((donar, index)=>{
                            const {name, avatar} = donar
                            return(
                                <div className='donar' key={index}>
                                    <p>{name}</p>
                                    <img src={avatar} alt="" />
                                    {/* <button onClick={()=>handleDelete()}>asdf</button> */}
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