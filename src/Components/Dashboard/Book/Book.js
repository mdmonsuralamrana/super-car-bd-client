import React, { useContext } from "react";
import { useHistory } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Payment from "./Payment/Payment";

const Book = () => {
  const serviceInfo = JSON.parse(sessionStorage.getItem("service")) || {};
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser")) || {};

  const history = useHistory();

  const handleBooking = (paymentId) => {
    const booking = {customerName: loggedInUser.displayName, customerEmail: loggedInUser.email, serviceInfo, paymentId, status: 'Pending', bookingTime: new Date()}
    

    fetch('http://localhost:5000/addBooking', {
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        alert('booking added successfully');
        history.push('/booking-list');
      }
    })
  
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 mt-5">
          <form className="col-md-6 px-5">
            <input className="form-control" readOnly defaultValue={serviceInfo.name} />
            <br/>
            <input className="form-control" readOnly defaultValue={loggedInUser.displayName} />
            <br/>
            <input className="form-control" readOnly defaultValue={loggedInUser.email} />
          </form>

          <div className="mt-5">
            <h4 className="px-5 mb-4">Pay with Card</h4>
            <Payment handleBooking={handleBooking}></Payment>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
