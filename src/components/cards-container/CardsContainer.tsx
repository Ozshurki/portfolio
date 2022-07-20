import React, {useEffect} from "react";
import {IoMdSchool} from "react-icons/io";
import {HiCode} from "react-icons/hi";
import {BiShoppingBag} from "react-icons/bi";

import "./cards-container.css";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

const CardsContainer: React.FC = () => {

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
            await animation.start({x: '-150vw'});
    };

    useEffect(() => {
        handleAnimation();
    }, [inView]);


    return (
        <div className="cards-container" ref={ref}>
            <motion.div className="cards" animate={animation}>
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
                                <li>TypeScript</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>SQL</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Framer motion</li>
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
                    <p>Also I led End-To-End projects myself -
                        <br/> <br/>
                        <span>
                        <a href="https://github.com/Ozshurki/nofar-ecommerce" target="_blank">
                            <strong>Example</strong>
                        </a>
                    </span>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
export default CardsContainer;