import React from "react";
import {createPortal} from "react-dom";
import "./modal.css";

interface Props{
    children: React.ReactNode;
}

const Modal: React.FC<Props>= ({children}) => {

    return createPortal(
        <div className="modal">
            {children}
        </div>
        , document.body);
};

export default Modal;