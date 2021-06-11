import React from 'react';
import carbd from '../../../images/car1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const About = () => {

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <section className="container my-md-5 py-md-5">
            <div className="row d-flex align-items-center" data-aos="fade-right">
                <div className="col-md-4">
                    <img style={{ height:'450px'}} className="img-fluid" src={carbd} alt=""/>
                </div>
                <div className="col-md-8" data-aos="fade-left">
                    <h3 className="text-brand px-3">About Us</h3>
                    <p style={{textAlign: 'justify'}} className="text-muted px-3">The air-conditioning evaporator is a small radiator inside the dashboard that provides cold air for the air-conditioning system. It’s called the evaporator because it’s where the freezing liquid refrigerant takes on any heat from the air blown through it and changes into a gaseous state (evaporating it) before returning it to the air-conditioning condenser to shed the heat; the process is constantly repeated. The air that emerges from the air conditioner is cold as a result.</p>
                    <ul className="list-group px-3">
                        <li className="list-group-item">Well trained Workers</li>
                        <li className="list-group-item">100% Completing Guarantee</li>
                        <li className="list-group-item">On Time Delivery</li>
                        <li className="list-group-item">Professional Workers</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;