import React from "react";
import { useHistory } from "react-router";

const ServiceDetail = ({ service }) => {

  const history = useHistory();
  const handleService = (service) => {
    history.push('/book');
    sessionStorage.setItem('service', JSON.stringify(service));
  }

  return (
    <div onClick={() => handleService(service)} className="col-md-4 col-sm-12 p-4">
      <div className="shadow p-4 rounded">
        <img
          style={{height: '50px', width: 'auto'}}
          className="img-fluid"
          src={service.image}
        />
        <h5 className="my-3">{service.name}</h5>
        <h2 style={{ color: "#9E1F63" }}>${service.price}</h2>
        <p
          style={{ textAlign: "justify" }}
          className="text-secondary"
        >
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetail;
