import {motion} from "framer-motion";
import React, {useState} from "react";


import "./header.css";
import HeaderBtn from "./header-btn/HeaderBtn";
import classNames from "classnames";


const Header: React.FC = () => {

    const [isScroll, setIsScroll] = useState<boolean>(false);

    const changeBackGround = () =>{
        if(window.scrollY > 90)
            setIsScroll(true)
        else
            setIsScroll(false);
    }

    window.addEventListener('scroll', changeBackGround);

    return (
        <div className={classNames('header', isScroll && "header-scrolled")}>
            <motion.div className="logo"
                        initial="hidden"
                        animate={{y: 0, opacity: 1, transition: {delay: 0.1, type: "spring", duration: 0.6}}}
            >Portfolio</motion.div>
            <div className="header-content">
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