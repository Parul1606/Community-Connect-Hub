import { Component } from "react";
import "./Nstyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import img33 from "../assests/img33.png"
import { Helmet } from 'react-helmet'

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="NavbarItems">
                <Helmet>
                    <title>Community Connect Hub</title>
                    <link rel="icon" href="Community-Connect\community\public\favicon.ico" />
                </Helmet>
                 <h1 className="navbar-logo">
                    <img src={img33} alt="Logo" className="logo-img" />
                    Community Connect Hub
                </h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        if (item.subMenu) {
                            return (
                                <li key={index} className={item.cName}>
                                    <span>{item.title}</span>
                                    <ul className="sub-menu">
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link className={subItem.cName} to={subItem.url}>
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        } else {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        <i className={item.icon}></i>{item.title}
                                    </Link>
                                </li>
                            );
                        };
                    })}
                    <button>
                        <Link to="/form">Donate</Link>
                    </button>
               </ul>
            </nav>
        )
    }
}

export default Navbar;