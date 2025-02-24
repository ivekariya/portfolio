import React from "react";
import { Element } from "react-scroll";

const About_me = () => {
    return (
        <>
            <Element name="about">
                <div className="about-main">
                    <div className="container">
                        <div className="about-main-inner">
                            <div className="left-block">
                                <div className="image">
                                    <img src="assets/image/about.png" alt="" />
                                </div>
                            </div>
                            <div className="right-block">
                                <div className="text">
                                    <div className="title">
                                        <h1>ABOUT ME</h1>
                                    </div>
                                    <p>I am a Full Stack Developer and Web Designer specializing in React.js and  Node.js. Proficient in creating responsive and dynamic web applications  with a strong focus on frontend and backend development. Skilled in  UI/UX design, delivering intuitive and visually appealing interfaces.  Dedicated to providing high-quality code and excellent user experiences.</p>

                                    <div className="skill">
                                        <h1>skills</h1>
                                        <div className="item">
                                            <img src="assets/image/html-5.png" alt="" />
                                            <img src="assets/image/css-3.png" alt="" />
                                            <img src="assets/image/js.png" alt="" />
                                            <img src="assets/image/structure.png" alt="" />
                                            <img src="assets/image/bootstrap-logo-shadow.png" alt="" />
                                            <img src="assets/image/Ant Design.png" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/image/node-js.png" alt="" />
                                            <img src="assets/image/php.png" alt="" />
                                            <img src="assets/image/MongoDB.png" alt="" />
                                            <img src="assets/image/MySQL.png" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/image/Postman.png" alt="" />
                                            <img src="assets/image/Git.png" alt="" />
                                            <img src="assets/image/github.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default About_me;