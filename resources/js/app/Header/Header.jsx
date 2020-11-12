import React, { useState, useEffect } from "react";
import { Link, link } from "react-router-dom";
export default function Header() {
    return (
        <header>
            <div className="logo">Laravel Crypto</div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Register">Register</Link>
            </nav>
        </header>
    );
}
