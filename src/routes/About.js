import React from 'react';
import './About.css';
import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from 'react-router-dom';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <Link to="/" >
                <GrFormPreviousLink size="60" />
            </Link>           
            <h1>This is a website that introduces movies with high ratings.</h1>
        </div>
    )
}

export default About;