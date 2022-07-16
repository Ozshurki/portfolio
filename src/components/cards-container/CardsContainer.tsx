import React from "react";
import {IoMdSchool} from "react-icons/io";
import {HiCode} from "react-icons/hi";
import {BiShoppingBag} from "react-icons/bi";

import "./cards-container.css";

const CardsContainer: React.FC = () => {
    return (
        <div className="cards-container">
            <div className="col">
                <div className="icon-container">
                    <IoMdSchool color={"#7510F7"} size={"3rem"}/>
                </div>
                <h2>Degree</h2>
                <p>Bachelor Of Science (Bs.C) In Computer Science</p>
                <p>GPA: 85%</p>
            </div>
            <div className="col">
                <div className="icon-container">
                    <HiCode color={"#7510F7"} size={"3rem"}/>
                </div>
                <h2>Full-Stack / Front-End</h2>
                <p>Using MERN stack to develop fast web applications</p>
                <p>Dev tools:</p>
                <div className="dev-tools-container">
                    <div>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="icon-container">
                    <BiShoppingBag color={"#7510F7"} size={"3rem"}/>
                </div>
                <h2>Experience</h2>
                <p>February 2020 - January 2022</p>
                <p>Full Stack developer at DevInt <br/>
                    DevInt developed websites for small business</p>
                <p>Also leading End-to-End projects on my own -
                    <br/> <br/>
                    <span>
                        <a href="https://github.com/Ozshurki/nofar-ecommerce" target="_blank">
                            <strong>Example</strong>
                        </a>
                    </span>
                </p>
            </div>
        </div>
    );
};
export default CardsContainer;