import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Intro from "./pages/Intro";
import Header from "./components/header/Header";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";


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
        </div>
    );
};

export default App;
