import { motion } from "framer-motion";
import React, {useState} from "react";

import "./introContent.css";

const cloudVar = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1
    }
}

const IntroContent: React.FC = () => {

    return (
        <div className="intro-content">
            <h2>Full-stack / Front-end Developer</h2>
            <h3>I build End-to-End websites using React and Node.js with pure CSS. <br/>
                I design and code beautifully things.</h3>
            <div className="img-container">
                <motion.div className="cloud-container">
                    <motion.div variants={cloudVar}
                                initial="hidden"
                                whileHover={{opacity:1}}> Click the avatar</motion.div>
                    <img src="/images/cloud-msg.png" alt="cloud"/>
                </motion.div>
                <motion.div className="avatar-container" whileHover={{rotate: 15}}>
                    <img src="http://mattfarley.ca/img/mf-avatar.svg" alt="img-face"/>
                </motion.div>
                <img src="http://mattfarley.ca/img/hero.svg" alt="desk"/>
            </div>
        </div>
    );
};
export default IntroContent;