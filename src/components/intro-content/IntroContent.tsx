import React from "react";
import "./introContent.css";

const IntroContent: React.FC = () => {
    return (
        <div className="intro-content">
            <h2>Full-stack / Front-end Developer</h2>
            <h3>I build End-to-End websites using React and Node.js with pure CSS. <br/>
                I design and code beautifully things.</h3>
            <div className="img-container">
                <img src="http://mattfarley.ca/img/mf-avatar.svg" alt="img-face"/>
                <img src="http://mattfarley.ca/img/hero.svg" alt="desk"/>
            </div>
        </div>
    );
};
export default IntroContent;