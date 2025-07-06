import React from 'react';
import Banner from '../Banner/Banner';
import Swipe from '../Swipe/Swipe';
import Menu from '../Menu/Menu';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Swipe></Swipe>
            <Menu></Menu>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;