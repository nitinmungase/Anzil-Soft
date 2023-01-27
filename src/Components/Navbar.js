import React from "react";
import { Link } from "react-router-dom";
import logo from '../Logo.jpeg';

const Navbar = () => {
    return (
        <>
        <header>
            <nav className="navbar fixed-top ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="logo" height={125} />
                    </Link>
                    <div className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/assignment1"} className="btn btn-success m-2">
                                Assignment1
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/assignment2"} className="btn btn-success m-2">
                                Assignment2
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
}
export default Navbar;