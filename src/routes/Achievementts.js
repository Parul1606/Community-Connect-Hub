import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AchievementsPage from "../components/achievements"; // Corrected import path
import img41 from "../assests/img41.jpg"
function Achievementts() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={img41}
        title="Achievements"
        text="Learn more about our Achievements"
      />
      <AchievementsPage />
      <Footer />
    </>
  );
}

export default Achievementts;
