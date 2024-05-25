import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <p style={{overflow: "hidden"}} >© 2024 Zhaksybay Sayat. All rights reserved.</p>
            <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </div>
        </footer>
    );
}

export default Footer;
