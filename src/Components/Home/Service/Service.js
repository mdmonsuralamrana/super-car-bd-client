import React from 'react';
import carWashing from '../../../Images/carWash.jpg';
import engineRepair from '../../../Images/car2.jpg';
import tireRepair from '../../../Images/carBg1.jpg';
import carBody from '../../../Images/carBody.jpg';
import ServiceDetails from '../ServiceDetails/ServiceDetails';



const servicesData = [
    {
        name: 'Car Washing',
        img: carWashing
    },
    {
        name: 'Engine Repair',
        img: engineRepair
    },
    {
        name: 'Tire Repair',
        img: tireRepair
    },
    {
        name: 'Car Body Repair',
        img: carBody
    }
]



const Service = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2>Services We Provide</h2>
            </div>
            <div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5">
                        {
                            servicesData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;