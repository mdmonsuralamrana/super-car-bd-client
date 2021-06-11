import React from "react";
import './HeaderMain.css';
import car from "../../../images/car3.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const HeaderMain = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="container-fluid">
      <main
        style={{ height: "600px" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1" data-aos="fade-right">
          <h1 className="text-brand">
            Your Car , Our Service, Our Responsibilities.
          </h1>
          <p className="text-muted">
            Damaged Your Car ? Don't get tense. We are with you.
          </p>
          <button className="btn take-service-btn btn-brand text-white"><a href="#services"> take service now </a></button>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <img className="img-fluid" src={car} alt="" />
        </div>
      </main>
    </div>
  );
};

export default HeaderMain;
