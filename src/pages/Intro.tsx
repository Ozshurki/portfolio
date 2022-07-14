import React from "react";
import IntroContent from "../components/intro-content/IntroContent";
import IntroImage from "../components/intro-image/IntroImage";
import "./intro.css";
const Intro: React.FC = () => {

    return (
        <div className="intro-page">
            <IntroContent/>
        </div>
    );
};

export default Intro;