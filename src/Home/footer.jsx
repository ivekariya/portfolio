import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="container">
                    <div className="footer-main-inner">
                        <div className="top">
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
                        <div className="bottom">
                            <div className="right">
                                <p>© 2025 Ishva. All rights reserved</p>
                            </div>
                            <div className="left">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;