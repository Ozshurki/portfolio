import React, {useEffect} from "react";
import {BsGear} from "react-icons/bs";
import "./skills.css";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

const Skills: React.FC = () => {

    // Activate element when 30% of him on the screen
    const [ref, inView] = useInView({threshold: 0.1});
    const animation = useAnimation();

    const handleAnimation = async () => {
        if (inView)
            await animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1.5, bounce: 0.3
                }
            });
        else
            await animation.start({x: '-100vw'});
    };

    useEffect(() => {
        handleAnimation();
    }, [inView]);

    return (
        <>
            <div className="skills-container" ref={ref}>
                <h2>Skills</h2>
                <p>During my experience in DevInt and the degree I used diverse languages, tools and skills</p>
            </div>
            <div className="skills-card" ref={ref}>
                <motion.div className="skills" animate={animation}>
                    <BsGear className="gear-icon" color={"#7510F7"} size={"3rem"}/>
                    <div className="skills-list">
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
                </motion.div>
            </div>
        </>
    );
};

export default Skills;