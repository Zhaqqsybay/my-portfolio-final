// src/components/Navbar.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { toggleTheme } = useTheme();
  console.log(toggleTheme)

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">My Portfolio</div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
        <li className="nav-item"><a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a></li>
        <li className="nav-item"><a href="#contacts" onClick={(e) => handleScroll(e, 'contacts')}>Contacts</a></li>
      </ul>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
