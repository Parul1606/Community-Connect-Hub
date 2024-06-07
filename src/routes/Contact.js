import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg="https://www.shutterstock.com/image-illustration/membership-gold-text-on-black-260nw-529198738.jpg"
        title="Membership"
        btnClass="hide"
        />
        <ContactForm />
        <Footer />
        </>
    )
}

export default Contact;