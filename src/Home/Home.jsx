import React from "react";
import Banner from "./Banner";
import About_me from "./About-me";
import Project from "./Project";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./footer";

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <About_me />
            <Project />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;