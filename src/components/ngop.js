import React, { useState } from 'react';
import './Ngopage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Ngop = () => {
    const [showDetails1, setShowDetails1] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);

    const toggleDetails1 = () => {
        setShowDetails1(!showDetails1);
    };

    const toggleDetails2 = () => {
        setShowDetails2(!showDetails2);
    };

    return (
        <div className="ngo-page">
            <div className="donate-section">
                <h2>Ready to make a difference?</h2>
                <p>Lend a hand to those in need by donating today. Let's create positive change together! 🌟</p>
            </div>
            <div className="ngo-section">
                <h2>Medicare Related NGO's</h2>
                <div className="ngo-card" onClick={toggleDetails1}>
                    <div className="ngo-info">
                        <img src="https://sspj.in/images/logo1.jpg" alt="NGO Logo" className="ngo-logo" />
                        <div className="ngo-details">
                            <h3>Shri Samarth Pratishthan Jamkhed <FontAwesomeIcon icon={faCheckCircle} className="verified-tick" /></h3>
                            {showDetails1 && (
                                <div className="content">
                                    <p>This NGO provides healthcare services by helping Children Fight Cancer, Heart Ailments And Many More..</p>
                                    <p className="ema"><a href="mailto:contact@sspj.in">contact@sspj.in</a></p>
                                    <a href="https://sspj.in/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                                    <button className="donate-button" onClick={() => window.location.href = '/form'}>Donate</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <FontAwesomeIcon icon={showDetails1 ? faAngleUp : faAngleDown} className={`angle-icon ${showDetails1 ? 'active' : ''}`} />
                </div>
            </div>
            <div className="ngo-section">
                <h2>Education Related NGO's</h2>
                <div className="ngo-card" onClick={toggleDetails2}>
                    <div className="ngo-info">
                        <img src="https://www.shrinathsinghcharitabletrust.org/wp-content/uploads/2023/07/logo-2.png" alt="NGO Logo" className="ngo-logo" />
                        <div className="ngo-details">
                            <h3>Shrinath Singh Charitable Trust <FontAwesomeIcon icon={faCheckCircle} className="verified-tick" /></h3>
                            {showDetails2 && (
                                <div className="content">
                                    <p>This education-focused NGO serves as a beacon of opportunity, offering scholarships and support to students, empowering them to overcome educational barriers and pursue their dreams.</p>
                                    <p className="ema"><a href="mailto:shrinathsinghcharitabletrus@gmail.com">shrinathsinghcharitabletrus@gmail.com</a></p>
                                    <a href="https://www.shrinathsinghcharitabletrust.org/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                                    <button className="donate-button" onClick={() => window.location.href = '/form'}>Donate</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <FontAwesomeIcon icon={showDetails2 ? faAngleUp : faAngleDown} className={`angle-icon ${showDetails2 ? 'active' : ''}`} />
                </div>
            </div>
        </div>
    );
}

export default Ngop;
