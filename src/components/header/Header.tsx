import {motion} from "framer-motion";
import React from "react";


import "./header.css";
import HeaderBtn from "./header-btn/HeaderBtn";


const Header: React.FC = () => {


    return (
        <div className="header">
            <motion.div className="logo"
                        initial="hidden"
                        animate={{y: 0, opacity: 1, transition: {delay: 0.1, type: "spring", duration: 0.6}}}
            >Portfolio</motion.div>
            <div className="header-content">
                <HeaderBtn className="intro"
                           text="Intro"
                           sliceRange={6}
                           delay={0.2}
                           path="/intro"/>
                <HeaderBtn className="about-me"
                           text="About me"
                           sliceRange={9}
                           delay={0.3}
                           path="/about-me"/>
                <HeaderBtn className="resume"
                           text="Resume"
                           sliceRange={7}
                           delay={0.4}
                           path="/resume"/>
                <HeaderBtn className="contact-me"
                           text="Contact me"
                           sliceRange={11}
                           delay={0.5}
                           path="/contact-me"/>
            </div>
        </div>
    )
        ;
};

export default Header;