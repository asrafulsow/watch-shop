import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import PopularWatch from '../PopularWatch/PopularWatch';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Categories></Categories>
            <PopularWatch></PopularWatch>
        </div>
    );
};

export default Home;