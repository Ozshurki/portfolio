import React, {useState} from 'react';
import {BsPersonLinesFill} from "react-icons/bs";
import {BiFile} from "react-icons/bi";

import {Sidebar, Hamburger, MainContent} from "./SideBar.Style";

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
                    <a className="item-text"
                       href="https://drive.google.com/file/d/1OhfCO5n4aS7MNEC311G3kFocR0UWJi46/view?usp=sharing"
                       download>
                        Resume
                    </a>
                </div>
            </MainContent>
        </Sidebar>
    );
};

export default SideBar;