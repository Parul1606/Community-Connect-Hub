// OurTeam.js
import React from 'react';
import './Tstyles.css'; // Import CSS file for OurTeam page styling
import img34 from '../assests/img34.jpg';
import img43 from "../assests/img43.jpg";
import img44 from "../assests/img44.jpg";
import img45 from "../assests/img45.jpg";

const OurTeam = () => {
    return (
        <div className="our-team-container">
            <h2 className="ta">Our Team</h2>
            <div className="team-cards">
                <div className="team-card">
                    <img src={img44} alt="Team Member 1" className="member-image" />
                    <h3 className="member-name">Vedika Juyal</h3>
                    <p className="member-role">Contributor</p>
                </div>
                <div className="team-card">
                    <img src={img43} alt="Team Member 2" className="member-image" />
                    <h3 className="member-name">Eshita Khule</h3>
                    <p className="member-role">Contributor</p>
                </div>
                <div className="team-card">
                    <img src={img45} alt="Team Member 3" className="member-image" />
                    <h3 className="member-name">Parul Pandey</h3>
                    <p className="member-role">Contributor</p>
                </div>
                <div className="team-card">
                    <img src={img34} alt="Team Member 4" className="member-image" />
                    <h3 className="member-name">Durgesh Patil</h3>
                    <p className="member-role">Contributor</p>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
