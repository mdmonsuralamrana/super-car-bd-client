import React from "react";
import car from "../../../images/car3.jpg";

const HeaderMain = () => {
  return (
    <div className="container-fluid">
      <main
        style={{ height: "600px" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h1 className="text-brand">
            Your Car , Our Service, Our Responsibilities.
          </h1>
          <p className="text-muted">
            Damaged Your Car ? Don't get tense. We are with you.
          </p>
          <button className="btn btn-brand text-white">take service now</button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={car} alt="" />
        </div>
      </main>
    </div>
  );
};

export default HeaderMain;
