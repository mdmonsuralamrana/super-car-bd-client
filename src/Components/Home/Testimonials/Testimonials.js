import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/testimonials')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])

    return (
        <section className="testimonials pb-5">
            <div className="container">
                <h2 className="text-center text-brand">Testimonial</h2>
                <div className="row"> 
                    {
                        testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;