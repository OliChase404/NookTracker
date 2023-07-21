import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        
        <div className="NavBar">
            <div>
                <h1>Nook Tracker</h1>
            </div>
            <div>
                <span>
                    <Link to="/">Home</Link>
                    <Link to="/lists">Lists</Link>
                    <Link to="/forum">Forum</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login">Login</Link>
                </span>
            </div>
        </div>
    );
}

export default NavBar;