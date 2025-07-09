import React from 'react';
import Banner from '../Banner/Banner';
import Swipe from '../Swipe/Swipe';
import Menu from '../Menu/Menu';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Reviews from '../../shared/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Swipe></Swipe>
            <Menu></Menu>
            <FeaturedItem></FeaturedItem>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;