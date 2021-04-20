import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faShoppingCart, faLock, faHome, faCommentAlt, faPlus, faUserPlus, faAlignJustify } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [admin, setAdmin] = useState({});
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser")) || {};

    useEffect(() => {
        fetch(`http://localhost:5000/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem("loggedInUser");
        sessionStorage.removeItem("serviceInfo");
    }

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/book" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/booking-list" className="text-white">
                        <FontAwesomeIcon icon={faLock} /> <span>Booking List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </Link>
                </li>

                {
                    admin.email === loggedInUser.email && <>
                        <li>
                            <Link to="/order-list" className="text-white">
                                <FontAwesomeIcon icon={faLock} /> <span>Order List</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/add-service" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/make-admin" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manage-services" className="text-white">
                                <FontAwesomeIcon icon={faAlignJustify} /> <span>Manage Services</span>
                            </Link>
                        </li>
                    </>
                }
            </ul>
            <div>
                <Link onClick={handleLogout} to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;