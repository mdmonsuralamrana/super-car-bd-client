import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import news1 from '../../../images/news1.jpg';
import news2 from '../../../images/news2.jpg';
import news3 from '../../../images/news3.jpg';
import { useEffect } from 'react';


const Portfolio = () => {
    
    useEffect(() => {
        AOS.init();
    },[])

    return (
        <section id="news" style={{backgroundColor: '#294B4D'}} className="container text-white text-center p-5 mb-5">
            <div className="row">
                <h2>News About Us</h2>
                <div className="col-md-4" data-aos="fade-right">
                    <img className="img-fluid" src={news1} alt=""/>
                    <h3 className="mt-2">Top servicing company</h3>
                </div>
                <div className="col-md-4" data-aos="fade-down">
                    <img className="img-fluid" src={news2} alt=""/>
                    <h3 className="mt-2">Most Trusted company</h3>
                </div>
                <div className="col-md-4" data-aos="fade-left">
                    <img className="img-fluid" src={news3} alt=""/>
                    <h3 className="mt-2">Highest Positive Rated company</h3>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;