import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Import the Home icon
import '../styles.css'; // Import CSS file for Navbar styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="home-link"><FaHome style={{ color: '#66D37A', fontSize: '30px' }} /></Link>
        <Link to="/" className="name">Hamsini Battula</Link>
      </div>
      <div className="navbar-right">
      <Link to="/projects" className="nav-item">Projects</Link>
        <span className="separator">|</span>
        <Link to="/work" className="nav-item">Work</Link>
        <span className="separator">|</span>
        <Link to="/education" className="nav-item">Education</Link>
        <span className="separator">|</span>
        <Link to="/skills" className="nav-item">Skills</Link>
        <span className="separator">|</span>
        <Link to="/resume" className="nav-item">Resume</Link>
      </div>
    </nav>
  );
};

export default NavBar;
