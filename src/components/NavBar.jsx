import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav className="navbar-container">
            <h1>Where to?</h1>
            <div className="navbar">
                <Link to="/">Home</Link>
            </div>
        </nav>
    )
}

export default NavBar;