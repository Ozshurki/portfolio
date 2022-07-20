import React from "react";
import "./footer.css";

import {AiOutlineLinkedin} from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa";


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>The journey of a thousand miles begins with one step</p>
            <div className="social-links">
                <div className="social-link">
                    <a href="https://www.linkedin.com/in/oz-shurki-62377a212/" target="_blank">
                        <AiOutlineLinkedin className="linkedin-icon"
                                           size="1.7rem"
                                           color="white"/>

                    </a>
                </div>
                <div className="social-link">
                    <a href="https://github.com/Ozshurki" target="_blank">
                        <FaGithubSquare className="github-icon"
                                        size="1.7rem"
                                        color="white"/>
                    </a>
                </div>
            </div>
            <p>Handcrafted by me</p>;
        </footer>
    )
        ;
};

export default Footer;


