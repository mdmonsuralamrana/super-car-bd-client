import React from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Footer from '../../Shared/Footer/Footer';
import News from '../News/News';
import BestOfUs from '../BestOfUs/BestOfUs';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <BestOfUs></BestOfUs>
            <News></News>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;