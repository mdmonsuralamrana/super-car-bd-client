import React from 'react';
import car from '../../../Images/car1.jpg'

const BestOfUs = () => {
    return (
        <main style={{ height: '600px', marginTop: '50px' }} className="row d-flex align-items-center">
            <div className="col-md-5 ">
                <img style={{ width: '400px', height: '450px', marginLeft: '180px' }} src={car} alt="" className="img-fluid" />
            </div>

            <div className="col-md-5 offset-md-1">
                <h1 style={{ color: '#3A4256', marginBottom: '50px' }}>Best Service<br /> Of Us</h1>
                <p className="text-secondary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolore eveniet necessitatibus et iusto corrupti minima.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="btn btn-success">Learn More</button>
            </div>
        </main>
    );
};

export default BestOfUs;