import React from 'react';

import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <section class="headerNav">
            <img src="/img/logo.png" alt="logo" />
            <nav>
                <ul>
                    <li><NavLink to="/" style={({ isActive }) => ({
                        color: isActive ? 'black' : "grey",
                    })}>Home</NavLink></li>
                    <li><NavLink to="/destinations" style={({ isActive }) => ({
                        color: isActive ? 'black' : "grey",
                    })}>Destinations</NavLink></li>
                    <li><NavLink to="/about" style={({ isActive }) => ({
                        color: isActive ? 'black' : "grey",
                    })}>About</NavLink></li>
                    <li><NavLink to="/partner" style={({ isActive }) => ({
                        color: isActive ? 'black' : "grey",
                    })}>Partner</NavLink></li>
                    <li><a class="whiteButton" href="#">Login</a></li>
                    <li><a class="orangeButton" href="#">Register</a></li>
                </ul>
            </nav>
        </section>
    );
}

export default Nav;