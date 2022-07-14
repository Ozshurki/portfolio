import {motion} from "framer-motion";
import React from "react";

import "./header.css";

const HeaderBtn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    }
};

const Header: React.FC = () => {

    return (
        <div className="header">
            <motion.div className="logo"
                        variants={HeaderBtn}
                        initial="hidden"
                        animate={{y: 0, opacity: 1, transition: {delay: 0.1, type: "spring", duration: 0.6}}}
            >Portfolio
            </motion.div>
            <div className="header-content">
                <motion.div className="intro"
                            variants={HeaderBtn}
                            initial="hidden"
                            animate={{y: 0, opacity: 1, transition: {delay: 0.2, type: "spring", duration: 0.6}}}
                >Intro</motion.div>
                <motion.div className="about-me"
                            variants={HeaderBtn}
                            initial="hidden"
                            animate={{y: 0, opacity: 1, transition: {delay: 0.3, type: "spring", duration: 0.6}}}
                >About me</motion.div>
                <motion.div className="resume"
                            variants={HeaderBtn}
                            initial="hidden"
                            animate={{y: 0, opacity: 1, transition: {delay: 0.4, type: "spring", duration: 0.6}}}
                >Resume</motion.div>
                <motion.div className="contact-me"
                            variants={HeaderBtn}
                            initial="hidden"
                            animate={{y: 0, opacity: 1, transition: {delay: 0.5, type: "spring", duration: 0.6}}}
                >Contact me</motion.div>
            </div>
        </div>
    );
};

export default Header;