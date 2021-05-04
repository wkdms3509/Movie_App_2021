import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import {  RiMovie2Line } from "react-icons/ri";

function Navigation() {

    return (
        <div className="nav">
            <RiMovie2Line size="40" color="darksalmon" />
            <ul className="nav__menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;