import React from 'react';
import Menu from './Menu/Menu';
import Banner from './Banner/Banner';
import Process from './Process/Process';
import Campaign from './Campaign/Campaign';
import Info from './Form/Info';
import Sub from './SubBolunter/Sub';
import Gallery from './Gallery/Gallery';
import News from './News/News';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            {/* <Menu></Menu> */}
            <Banner></Banner>
            <Process></Process>
            <Campaign></Campaign>
            <Info></Info>
            <Sub></Sub>
            <Gallery></Gallery>
            <News></News>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;