import React from 'react';
import './Cstyles.css';
import CData from './CData.js';

const Cause = () => {
    return (
        <div className="CausePage">
            <h2> Our Cause</h2>
            <CData 
            className = "cause-page"
            text = "At “Community Connect Hub”, we believe in tackling issues at their roots. We strive to uplift communities by providing access to resources, opportunities, and support systems that empower individuals to break free from the cycle of poverty. We work to ensure that everyone, regardless of their background, or circumstances has access to quality education and the opportunity to develop essential literacy skills, as we know education is the key to unlocking one’s full potential. We are committed to promoting gender equality and empowering women and girls to become leaders, change-makers, and champions of their own destinies. We strive to enhance educational opportunities and resources to nurture the next generation of global citizens. We recognize the interconnectedness of all living beings and the environment, Through advocacy, conservation efforts, and community engagement, we work to protect and preserve our planet for future generations. At “Community Connect Hub”, we believe in taking a holistic approach to creating positive change. We invite you to join us on our journey towards a better world. Whether you’re a volunteer, donor, partner organization, or community member, your support is invaluable in helping us achieve our mission and make a meaningful difference in the lives of others."
            />
        </div>
    );
}

export default Cause;