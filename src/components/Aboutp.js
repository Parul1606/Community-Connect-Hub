// About.js
import React from 'react';
import { Link } from 'react-router-dom';

const Aboutp = () => {
    return (
        <div>
            <h2>About</h2>
            <ul>
                <li>
                    <Link to="/cause">Cause</Link>
                </li>
                <li>
                    <Link to="/achievements">Achievements</Link>
                </li>
                <li>
                    <Link to="/our-team">Our Team</Link>
                </li>
            </ul>
        </div>
    );
}

export default Aboutp;
