import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Hero from '../../shared/Hero/Hero';
import News from '../../shared/News/News';
import Carousel from '../Carousel/Carousel';
import Certificate from '../Certificate/Certificate';
import Cryptocurrency from '../Cryptocurrency/Cryptocurrency';
import Game from '../Game/Game';
import GraphicTemplate from '../GraphicTemplate/GraphicTemplate';
import SocialMediaBanner from '../SocialMediaBanner/SocialMediaBanner';
import Themetask from '../Themetask/Themetask';

const Home = () => {
    return (
        <>
            {/* shared components */}
            <Header />
            <Hero />

            {/* home components */}
            <Carousel />
            <Themetask />
            <SocialMediaBanner />
            <GraphicTemplate />
            <Certificate />
            <Game />
            <Cryptocurrency />

            {/* shared components */}
            <News />
            <Footer />

        </>
    );
};

export default Home;