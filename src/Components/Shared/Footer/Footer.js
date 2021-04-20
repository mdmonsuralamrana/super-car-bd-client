import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#9E1F63'}} className="mt-5 py-4 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 py-3">
                        <h2>Stay Connected <br/> With Us</h2>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h2>Contact Us</h2>
                        <div className="d-flex">
                            <FontAwesomeIcon style={{height: '20px'}} icon={faMapMarkedAlt} />
                            <p className="ms-2">Dhaka, Bangladesh</p>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon style={{height: '20px'}} icon={faPhone} />
                            <p className="ms-2">+8801843899830</p>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon style={{height: '20px'}} icon={faEnvelope} />
                            <p className="ms-2">shotoborshibotgach30@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;