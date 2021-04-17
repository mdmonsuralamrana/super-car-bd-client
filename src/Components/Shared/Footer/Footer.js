import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';

const noNamed = [
    { name: "Home Services", link: "/home-services" },
    { name: "Service anywhere", link: "/service-anywhere" },
    { name: "Body Changing", link: "/body-changing" }
]
const ourAddress = [
    { name: "Badda-Dhaka", link: "//google.com/map" },
    { name: "Dhaka, Bangladesh", link: "//google.com/map" },

]
const services = [
    { name: "Emergency Servicing", link: "/emergency-servicing" },
    { name: "Repair Tubes", link: "/repair-tubes" },
    { name: "Tire Changing", link: "/tire-change" }
]



const Footer = () => {
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"We Provide"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><i class="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a href="//google.com"><i class="fab fa-google"></i></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Contact Us</h6>
                            <button className="btn btn-success">+8801735036280</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;