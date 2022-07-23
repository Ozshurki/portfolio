import {motion} from "framer-motion";
import React, {useState} from "react";
import {FiDownload} from "react-icons/fi";


import "./header.css";
import HeaderBtn from "./header-btn/HeaderBtn";
import classNames from "classnames";

const Header: React.FC = () => {

    const [isScroll, setIsScroll] = useState<boolean>(false);

    const changeBackGround = () => {
        if (window.scrollY > 90)
            setIsScroll(true);
        else
            setIsScroll(false);
    };

    window.addEventListener('scroll', changeBackGround);

    return (
        <div className={classNames('header', isScroll && "header-scrolled")}>
            <motion.div className="logo"
                        initial="hidden"
                        animate={{y: 0, opacity: 1, transition: {delay: 0.1, type: "spring", duration: 0.6}}}
            >Portfolio
            </motion.div>
            <div className="header-content">
                <HeaderBtn className="about-me"
                           text="About me"
                           sliceRange={9}
                           delay={0.3}
                           path="/about-me"/>
                <motion.div className="download-link"
                            initial={{
                                y: "-100vh",
                                opacity: 0
                            }}
                            animate={{y: 0, opacity: 1, transition: {delay: 0.4, type: "spring", duration: 0.6}}}
                            whileHover={{scale: 1.2, type: "spring"}}>
                    <motion.a
                        href="https://drive.google.com/file/d/12xrMs09WKne0jg6Sm5WHE4lubUEaW_vU/view?usp=sharing"
                        download
                        target="_blank">
                        Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
        ;
};

export default Header;