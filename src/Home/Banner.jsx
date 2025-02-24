import React from "react";
import { Element, Link } from "react-scroll";

const Banner = () => {
    return (
        <>
            <Element name="home">
                <div className="banner-main">
                    <div className="container">
                        <div className="banner-main-inner">
                            <div className="left-block">
                                <div className="text">
                                    <h1>Hii , i am <span>ishva</span></h1>
                                    <p>Welcome to my</p>
                                    <span>Portfolio !</span>
                                    <div className="desc">I am a Full Stack Developer and Web Designer specializing in React.js and  Node.js. Proficient in creating responsive and dynamic web applications  with a strong focus on frontend and backend development. Skilled in  UI/UX design, delivering intuitive and visually appealing interfaces.  Dedicated to providing high-quality code and excellent user experiences.</div>
                                    <div className="button">
                                        <Link to='contact' smooth={true} duration={500}>Hire me</Link>
                                    </div>
                                    <div className="button">
                                        <a href="#">My Resume</a>
                                    </div>
                                </div>
                            </div>
                            <div className="right-block">
                                <div className="image">
                                    <img src="assets/image/image.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default Banner;