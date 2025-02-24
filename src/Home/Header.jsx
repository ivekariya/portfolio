import React from "react";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <>
            <div className="header-main">
                <div className="container">
                    <div className="header-main-inner">
                        <div className="logo">
                            <h1>ishva</h1>
                        </div>
                        <div className="menu-main">
                            <nav className="navbar">
                                <ul className="menu">
                                    <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                                    <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                                    <li><Link to='projects' smooth={true} duration={500}>Project</Link></li>
                                    <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;