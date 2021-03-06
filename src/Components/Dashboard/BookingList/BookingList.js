import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const BookingList = () => {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser")) || {};
  const [bookings, setBookings] = useState([]);

  console.log(bookings)

  useEffect(() => {
    fetch(`https://supercarbd.herokuapp.com/bookings?email=${loggedInUser.email}`)
    .then(res => res.json())
    .then(data => setBookings(data))
  },[])

  console.log(bookings)
  console.log(bookings.serviceInfo);
  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 mt-2 px-2">
          <div className="row"> 
            {
              bookings.map(booking => <div  key={booking._id} className="col-md-4">
                <div className="p-3 shadow rounded bg-light">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <img className="rounded-circle" src={booking.serviceInfo.image} alt="" width="80" height="80" />
                              <p className="color-red py-2 px-3 text-white"> status:</p>
                            <p className="btn-brand py-2 px-3 text-white">{booking.status}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5 style={{color: 'black'}} >{booking.serviceInfo.name}</h5>
                            <h4 style={{color: '#9E1F63'}}>${booking.serviceInfo.price}</h4>
                        </div>
                        <p style={{textAlign: 'justify'}}>{booking.serviceInfo.description}</p>
                    </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingList;
