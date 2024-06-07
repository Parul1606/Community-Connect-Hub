import React from 'react';
import './Astyles.css'; // Import CSS file for styling
import ngoe1 from '../assests/ngoe1.png';
import img47 from "../assests/img47.png";

const achievements = () => {
  return (
    <div className="achievements-container">
        <div className="hn">
            <h1>Our Achievementsss!</h1>
        </div>
      <div className="achievement-item">
        
        <img src={ngoe1} alt="Partnership Letter 1" />
        <p>Teaming up with our esteemed Shrinath Singh Charitable Trust NGO partner, specializing in education and healthcare, we're broadening our efforts to ensure every individual receives essential medical care and quality education.</p>
      </div>

      <div className="achievement-item">
        <img src={img47} alt="Partnership Letter 2" />
        <p>Another milestone achieved! Our collaboration with NGO Shri Samarth Pratishthan Jamkhed to extend healthcare services through our Medicare-related NGO.</p>
      </div>

    </div>
  );
}

export default achievements;
