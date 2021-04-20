import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    const handleDelete = ((id) => {
        fetch(`http://localhost:5000/deleteService/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                window.location.reload();
            }
        })
    })

    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                <div className="col-md-10 p-5">
          <table class="table text-center">
            <thead className="bg-light">
              <tr>
              <th scope="col">Sr No</th>
                <th scope="col">Service Name</th>
                <th scope="col">Service Cost</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                services.map((service, index) => 
                  <tr key={service._id}>
                    <td>{index+1}</td>
                    <td>{service.name}</td>
                    <td>{service.price}</td>
                    <td><span onClick={() => handleDelete(service._id)}><FontAwesomeIcon icon={faTrashAlt}/></span></td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
                </div>
            </div>
        </section>
    );
};

export default ManageServices;