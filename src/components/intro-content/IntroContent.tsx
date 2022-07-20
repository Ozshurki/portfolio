import {motion} from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";

import "./introContent.css";
import {useDispatch} from "react-redux";
import {modalActions} from "../../store/slices/modal";


const IntroContent: React.FC = () => {

    const dispatch = useDispatch();

    return (
        <div className="intro-content">
            <Typewriter
                onInit={(typewriter => {
                    typewriter.changeDelay(50).typeString('Full-stack / Front-end Developer <br/>' +
                        'I build End-to-End websites using React and Node.js with pure CSS<br/>\n' +
                        '                I design and code amazing things <br/>' +
                        'This portfolio was made by me for you guys :)').start();
                })}/>
            <div className="img-container">
                <motion.div className="cloud-container">
                    <motion.div className="click-me"> Click Me!</motion.div>
                    <img src="/images/cloud-msg.png" alt="cloud"/>
                </motion.div>
                <motion.div className="avatar-container" whileHover={{rotate: 15}}>
                    <img src="http://mattfarley.ca/img/mf-avatar.svg"
                         alt="img-face"
                         onClick={() => dispatch(modalActions.toggleModal())}/>
                </motion.div>
                <img src="http://mattfarley.ca/img/hero-devices.svg" alt="desk"/>
            </div>
        </div>
    );
};
export default IntroContent;