import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-3 text-center">
            <img style={{height: '130px', borderRadius:'15px'}} src={service.img} />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <button className="btn btn-primary">View More</button>
        </div>
    );
};

export default ServiceDetails;