import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import WorkFlow from './WorkFlow/WorkFlow';
import Donars from './Donars/Donars';
import Achievement from './Achievement/Achievement';
import Member from './Member/Member';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <WorkFlow></WorkFlow>
            <Donars></Donars>
            <Achievement></Achievement>
            <Member></Member>
        </div>
    );
};

export default About;