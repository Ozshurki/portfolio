import React, {useEffect, useState} from 'react';
import {BsPersonLinesFill} from "react-icons/bs";
import {BiFile} from "react-icons/bi";
import {MdAlternateEmail} from "react-icons/md";

import {Sidebar, Hamburger, MainContent} from "./SideBar.Style"


const SideBar: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSideBar = () => setIsOpen(!isOpen);

    return (
        <Sidebar open={isOpen}>
            <Hamburger onClick={toggleSideBar} open={isOpen}>
                <span className="top-line"/>
                <span className="mid-line"/>
                <span className="bottom-line"/>
            </Hamburger>
            <MainContent>
                <div className="item">
                    <div className="icon"><BsPersonLinesFill size="1.4rem"/></div>
                    <div className="item-text">About me</div>
                </div>
                <div className="item">
                    <div className="icon"><BiFile size="1.6rem"/></div>
                    <div className="item-text">Resume</div>
                </div>
                <div className="item">
                    <div className="icon"><MdAlternateEmail size="1.4rem"/></div>
                    <div className="item-text">Contact me</div>
                </div>
            </MainContent>
        </Sidebar>
    );
};

export default SideBar;