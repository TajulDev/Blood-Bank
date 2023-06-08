import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import WorkFlow from './WorkFlow/WorkFlow';
import Donars from './Donars/Donars';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <WorkFlow></WorkFlow>
            <Donars></Donars>
        </div>
    );
};

export default About;