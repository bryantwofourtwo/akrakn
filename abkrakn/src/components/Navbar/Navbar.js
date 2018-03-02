import React from 'react';
import "./Navbar.css";   
        
        
    const Navbar = () => (   
        <div className="container">
            <div className="navbar">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">krakn</a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                {/* <div className="navbar-nav"> */}
                    <a className="nav-item nav-link" href="./index.html">Home</a>
                    <a className="nav-item nav-link" href="#">Login</a>
                    <a className="nav-item nav-link" href="categories.html">Categories</a>   
                {/* </div> */}
                {/* </div> */}
            </nav>
            </div>
        </div>
    );

    export default Navbar;