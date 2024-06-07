import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import AboutImg from "../assests/img11.jpg";
import Footer from "../components/Footer";
import Visualize from "../components/Visualize";

function Visualization(){
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Visualize"
        btnClass="hide"
        />
        <Visualize />
        <Footer />
        </>
    )
}

export default Visualization;