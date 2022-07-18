import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

import Intro from "./pages/Intro";
import Header from "./components/header/Header";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Modal from "./components/modal/Modal";
import ModalMsg from "./components/modal/modal-msg/ModalMsg";
import SideBar from "./components/side-bar/SideBar";
import ScrollUpBtn from "./components/scroll-button/ScrollUpBtn";
import Footer from "./components/footer/Footer";


const App: React.FC = () => {

    const showModal = useSelector((state: any) => state.modal.showModal);

    return (
        <div className="App">
            <Header/>
            <SideBar/>
            <ScrollToTop/>
            <Routes>
                <Route path="/about-me" element={<Intro/>}/>
                <Route path="/resume" element={<Intro/>}/>
                <Route path="*" element={<Navigate to="/about-me"/>}/>
            </Routes>
            <ScrollUpBtn/>
            {showModal &&
            <Modal>
                <ModalMsg/>
            </Modal>
            }
            <Footer/>
        </div>
    );
};

export default App;
