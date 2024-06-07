import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import OurTeam from "../components/Our-team";

function Team(){
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero-mid"
        heroImg="https://img.freepik.com/free-photo/hands-with-letters-forming-word-teamwork_1134-314.jpghttps://img.freepik.com/premium-photo/teamwork-human-hands-holding-black-silhouette-word_764664-23125.jpg"
        title="Team"
        btnClass="hide"
        />
        <OurTeam />
        <Footer />
        </>
    )
}

export default Team;