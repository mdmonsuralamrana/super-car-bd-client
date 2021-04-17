import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ marginRight: '50px', color: '#4DF350', fontSize: '20px'}} class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link ms-5 active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 active" to="/home">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 active" to="/home">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 active" to="/home">Reviews</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 active" to="/home">News</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 active" to="/logIn">Log In</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;