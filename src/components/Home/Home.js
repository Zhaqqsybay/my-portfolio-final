import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Home.css';
import resumeImage from '../../assets/resume.png';

function Home() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="home-container">
            <div className="profile-container">
                <img src="/images/portolio.png" alt="Profile" className="profile-image" />
            </div>
            <div className="scroll-container top-scroll">
                <div className="scroll-text">HTML CSS JS FIGMA REACT DJANGO DESIGN HTML CSS JS FIGMA REACT DJANGO DESIGN</div>
            </div>
            <div className="tag-container">
                <button className="button" onClick={toggleModal}>Resume</button>
            </div>
            <div className="scroll-container bottom-scroll">
                <div className="scroll-text">HTML CSS JS FIGMA REACT DJANGO DESIGN HTML CSS JS FIGMA REACT DJANGO DESIGN</div>
            </div>
            <Modal show={showModal} onClose={toggleModal}>
                <img src={resumeImage} alt="Resume" className="resume-image" />
            </Modal>
        </div>
    );
}

export default Home;
