import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Glass from "../components/Glass"
import AboutImg from "../assests/pre.jpg";

function Prediction(){
    return(
        <>
            <Navbar />
            <Hero 
            cName="hero-mid"
            heroImg={AboutImg}
            title="Predict the Poverty"
            btnClass="hide"
            />
            <Glass/>
            <Footer />
        </>
        
    )
}

export default Prediction;