import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import Title from "./title";

function Nav() {
    const navStyle = { color: "white" };


    return (
        <>
            <Title />
            <navigation className="nav">
                <ul className="nav-links">
                    <Link style={navStyle} to='/' className="nav-links">
                        <li> Home Page</li>
                    </Link>
                    <Link style={navStyle} to='/ask' className="nav-links">
                        <li> Ask a question</li>
                    </Link>
                    <Link style={navStyle} to='/answer' className="nav-links">
                        <li> Answer a question</li>
                    </Link>
                    <Link style={navStyle} to='/Login' className="nav-links">
                        <li> Login</li>
                    </Link>
                    <Link style={navStyle} to='/signUp' className="nav-links">
                        <li> sign up</li>
                    </Link>
                    <Link style={navStyle} to='/' className="nav-links">
                        <li> sign out</li>
                    </Link>

                </ul>
            </navigation >
        </>
    );
}

export default Nav;