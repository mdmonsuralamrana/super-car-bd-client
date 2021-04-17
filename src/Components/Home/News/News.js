import React from 'react';
import NewsDetails from '../NewsDetails/NewsDetails';
import FirstNews from '../../../Images/news1.jpg';
import SecondNews from '../../../Images/news2.jpg';
import ThirdNews from '../../../Images/news3.jpg';

const newsData = [
    {
        name: 'Best Repair Industry',
        img: FirstNews
    },
    {
        name: 'Got Madles From BW',
        img: SecondNews
    },
    {
        name: 'Got Tender From Racing DD',
        img: ThirdNews
    }
]

const News = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2>News About Us</h2>
            </div>
            <div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5">
                        {
                            newsData.map(news => <NewsDetails news={news}></NewsDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;