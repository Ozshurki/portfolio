import React from "react";
import {BsFillArrowUpCircleFill} from "react-icons/bs";
import {motion} from "framer-motion";

import "./ScrollUpBtn.css";

const ScrollUpBtn:React.FC = () => {
    return(
        <motion.div className="scroll-up-btn"
                    whileHover={{scale: 1.3, rotate: 360}}
                    onClick={() =>  window.scrollTo({top:0, behavior:"smooth"})}>
            <BsFillArrowUpCircleFill color="black"
                                     size="2rem"/>
        </motion.div>
    )
}

export default ScrollUpBtn;