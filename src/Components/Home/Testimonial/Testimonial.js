import React from "react";
import './Testimonial.css';

const Testimonial = (props) => {
  const { description, image, name, country } = props.testimonial;
  return (
    <div className="col-md-4 col-sm-12">
      <div className="testimonial-container shadow p-4 rounded"> 
          <p className="mb-4">{description}</p>
        <div className="d-flex">
          <div className="col-md-3"> 
            <img className="img-fluid" src={image} alt="" />
          </div>
          <div className="col-md-9 mt-3 px-4">
            <h6>{name}</h6>
            <p>{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;