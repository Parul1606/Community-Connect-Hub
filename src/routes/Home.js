import HomePage from "../components/HomePage";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero"
        heroImg = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        title = "Don't wait for a better world, make it!"
        />
        <HomePage/>
        <Footer />
        </>
    )
}

export default Home;