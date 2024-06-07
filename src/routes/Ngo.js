import Ngop from "../components/ngop";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero"
        heroImg = "https://img.freepik.com/free-photo/flat-lay-composition-still-life-friendship-day-elements_23-2148970484.jpg?size=626&ext=jpg&ga=GA1.1.644600855.1713096017&semt=ais"
        title = "Empowering communities, one dream at a time."
        />
        <Ngop />
        <Footer />
        </>
    )
}

export default Home;