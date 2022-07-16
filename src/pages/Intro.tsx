import React from "react";
import IntroContent from "../components/intro-content/IntroContent";
import "./intro.css";
import AboutMe from "../components/about-me/AboutMe";
import CardsContainer from "../components/cards-container/CardsContainer";
import Skills from "../components/skills/Skills";


const Intro: React.FC = () => {

    return (
        <div className="intro-page">
            <IntroContent/>
            <AboutMe/>
            <CardsContainer/>
            <Skills/>
        </div>
    );
};

export default Intro;