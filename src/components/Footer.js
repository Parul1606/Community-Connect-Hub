import "./Fstyles.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                
                
            </div>
            <div className="bottom">
                <div>
                    <h1>Community Connect Hub</h1>
                    
                    <p>Contribute for a better tomorrow.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/ngop">Ngo</Link></li>
                       <li><Link to="/cause">Cause</Link></li>
                       <li><Link to="/achievements">Achievements</Link></li>
                       <li><Link to="/Our-Team">Our Team</Link></li>
                       <li><Link to="/Visualization">Visualization</Link></li>
                       <li><Link to="/Prediction">Prediction</Link></li>
                       <li><Link to="/Contact">Membership</Link></li>
                       <li><Link to="/form">Donate</Link></li>
                    </ul>
                    
                </div>
                
                <div>
                    <h2 className="em">Get in Touch</h2>
                    <p className="pa"><a href="mailto:cchhelp@gmail.com">cchhelp@gmail.com</a></p>

                </div>
            </div>
        </div>
    )
}

export default Footer;