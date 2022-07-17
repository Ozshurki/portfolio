import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {BsFillArrowUpCircleFill} from "react-icons/bs";

import Intro from "./pages/Intro";
import Header from "./components/header/Header";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import {motion} from 'framer-motion';


const App: React.FC = () => {

    return (
        <div className="App">
            <Header/>
            <ScrollToTop/>
            <Routes>
                <Route path="/about-me" element={<Intro/>}/>
                <Route path="/resume" element={<Intro/>}/>
                <Route path="*" element={<Navigate to="/about-me"/>}/>
            </Routes>
            <motion.div className="scroll-up-btn"
                        whileHover={{scale: 1.3, rotate: 360}}
                        onClick={() =>  window.scrollTo({top:0, behavior:"smooth"})}>
                <BsFillArrowUpCircleFill color="black"
                                         size="2rem"/>

            </motion.div>
        </div>
    );
};

export default App;
