import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FooterButton from '../../Shared/FooterButton/FooterButton';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
            <FooterButton></FooterButton>
        </div>
    );
};

export default Home;