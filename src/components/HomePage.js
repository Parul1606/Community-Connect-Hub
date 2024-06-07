import HomePgImg1 from "../assests/img2.jpg";
import HomePgImg2 from "../assests/img6.jpg";
import HomePgImg3 from "../assests/img3.jpg";
import HomePgImg4 from "../assests/img4.jpg";
import HPData from "./HPData";
import "./HPgstyles.css"

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>Join Us in Making a Difference</h1> 
            <HPData 
            className = "first-page"
                heading="Be a part of something greater."
                
                text="Our platform serves as the vital link between NGOs and compassionate individuals like yourself who want to make a difference. We connect you with a diverse range of NGOs working tirelessly to uplift vulnerable communities through education, healthcare, and essential resources. Your support, whether large or small, plays a pivotal role in enabling these organizations to break the cycle of poverty and create lasting change. Together, let's build a world where everyone has the opportunity to thrive. Thank you for joining us on this journey towards a brighter, more equitable future."
                img1="https://images.unsplash.com/photo-1489851221632-0976a724c9fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxpbmRpYW4lMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D"
                img2="https://images.unsplash.com/photo-1692269725851-f5d3a3f02807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxpbmRpYW4lMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D"
            />
            <HPData 
            className="first-page-reverse"
                heading="Empowering Lives, Building Hope"
                
                text="Through dedication and collaboration, we've worked to facilitate positive change in the lives of many. Our platform serves as a catalyst for progress, offering essential support and resources. It's not just about what we do; it's about empowering communities to take charge of their own futures. Our collaborative efforts have made a tangible impact, and with your support, we can continue to build upon this foundation. Join us in creating opportunities for growth and empowerment, and together, let's strive towards a world where every individual has the chance to thrive."
                img1="https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGluZGlhbiUyMGNoaWxkcmVufGVufDB8fDB8fHww"
                img2="https://images.unsplash.com/photo-1607454230973-e19abb3fa2bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGluZGlhbiUyMGNoaWxkcmVufGVufDB8fDB8fHww"
            />
            
        </div>
       
        
    )
}

export default HomePage;