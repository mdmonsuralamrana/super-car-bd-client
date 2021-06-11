import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        AOS.init()
    },[])

    useEffect(()=> {
        fetch('https://supercarbd.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section id="services" className="services-container my-5">
            <div className="text-center my-md-4">
                <h2 className="text-brand mb-3">Our Services</h2>
            </div>
            <div className="container text-center">
                <div className="row" data-aos="zoom-in-down">
                    {
                        services.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;