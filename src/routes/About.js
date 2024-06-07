import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/img11.jpg";
import Footer from "../components/Footer";
import Cause from '../components/Cause';
import AchievementsPage from '../components/achievements';
import OurTeam from '../components/Our-team';

function About(){
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Cause"
        btnClass="hide"
        />
        <Cause />
        <AchievementsPage />
        <OurTeam />
        <Footer />
        </>
    )
}

export default About;