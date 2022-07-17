import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {GrFormClose} from "react-icons/gr";
import {BiCommentError} from "react-icons/bi";
import {ImWink} from "react-icons/im";

import "./modal-msg.css"
import {useDispatch} from "react-redux";
import {modalActions} from "../../../store/slices/modal";


const backDropVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
};

const modalVariants = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "100px",
        opacity: 1,
        transition: {delay: 0.5}
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: {delay: 0.5, duration: 5}
    }
};


const Error: React.FC= () => {

    const dispatch = useDispatch();

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div className="backdrop"
                        variants={backDropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden">
                <motion.div className="modal-container" variants={modalVariants}>
                    <div className="modal-header">
                        <BiCommentError color="black" size="1.5rem"/>
                        <div className="modal-close-btn">
                            <GrFormClose onClick={() => dispatch(modalActions.toggleModal())}
                                         color="black"
                                         size="1.8rem"/>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="modal-content">
                            <h2 className="modal-msg">
                                <span><i>H</i></span>
                                <span><i>I</i></span>
                                <span><i>R</i></span>
                                <span><i>E</i></span>
                                <span><i> </i></span>
                                <span><i>M</i></span>
                                <span><i>E</i></span>
                                <span><i> </i></span>
                                <span><i><ImWink size="0.7em"/></i></span>

                            </h2>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Error;