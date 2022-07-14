import React from "react";
import classNames from "classnames";
import {motion} from "framer-motion";
import {Link, useLocation} from "react-router-dom";

interface HeaderBtnInt {
    className: string;
    path: string;
    text: string;
    sliceRange: number;
    delay: number;
}

const HeaderBtnVar = {
    hidden: {
        y: "-100vh",
        opacity: 0
    }
};

const HeaderBtn: React.FC<HeaderBtnInt> = ({className, path, text, sliceRange, delay}) => {
    const location = useLocation();

    return (
        <Link to={path}>
            <motion.div
                className={classNames(className, location.pathname.substring(1, sliceRange) === className && "cur-path")}
                variants={HeaderBtnVar}
                initial="hidden"
                animate={{y: 0, opacity: 1, transition: {delay: delay, type: "spring", duration: 0.6}}}
                whileHover={{scale: 1.2, type: "spring"}}
            >{text}
            </motion.div>
        </Link>
    );
};

export default HeaderBtn;