import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const OrderList = () => {
  const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://supercarbd.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 p-5">
          <table class="table text-center">
            <thead className="bg-light">
              <tr>
              <th scope="col">Sr No</th>
                <th scope="col">Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Service</th>
                <th scope="col">Payment Id</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((order, index) => 
                  <tr key={order._id}>
                    <td>{index+1}</td>
                    <td>{order.customerName}</td>
                    <td>{order.customerEmail}</td>
                    <td>{order.serviceInfo.name}</td>
                    <td>{order.paymentId}</td>
                    <td>{order.status}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
