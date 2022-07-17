import React from "react";
import {BsGear} from "react-icons/bs"
import "./skills.css";

const Skills: React.FC = () => {
    return (
        <>
            <div className="skills-container">
                <h2>Skills</h2>
                <p>During my experience in DevInt and the degree I used diverse languages, tools and skills</p>
            </div>
            <div className="skills-card">
                <div>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>Django</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>C/C++</li>
                        <li>OOP</li>
                        <li>Unix</li>
                        <li>Docker</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Skills;