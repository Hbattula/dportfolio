import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Import icons
import '../styles.css';
import NavBar from './NavBar';
import Footer from './Footer';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [developerText, setDeveloperText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      typeText("A software developer.");
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const typeText = (text) => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDeveloperText((prevText) => {
        if (index < text.length) {
          index++;
          return text.substring(0, index);
        } else {
          clearInterval(intervalId);
          return prevText;
        }
      });
    }, 100);
  };

  useEffect(() => {
    const balls = document.querySelectorAll('.project-ball');

    balls.forEach((ball, index) => {
      ball.style.animationDelay = `${index * 0.5}s`;
      ball.classList.add('appear');
    });
  }, []);

  return (
    <div>
    <NavBar/>
    <div className="home">
      <div className="background-image"></div>
      <div className="content">
        <div className="profile-info">
          <div className="profile-picture-container">
          <img src="/images/mypic.jpg" alt="Profile" className="profile-picture" />
            <div className="contact-icons">
            <a href="https://github.com/Hbattula" className="icon-link">
              <FaGithub className="icon"  />
            </a>
            <a href="mailto:hbattula55@gmail.com" className="icon-link">
            <FaEnvelope className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/hamsini-battula"  className="icon-link">
            <FaLinkedin className="icon" />
            </a>
            </div>
          </div>
          <div className="profile-text">
            <h1 className={`big-font ${visible ? 'glitter' : 'invisible'}`}>I'm Hamsini Battula</h1>
            <p className={`developer-text ${visible ? 'glitter' : 'invisible'}`}>
              {developerText}
              <span className="cursor">|</span>
            </p>
            {/* <div className="green-box">
              <div className="caption">Developer Learner Dreamer</div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="project-balls">
        <Link to="/skills" className="project-ball left">
          <p>Skills</p>
        </Link>
        <Link to="/projects" className="project-ball left">
          <p>Projects</p>
        </Link>
        <Link to="/work" className="project-ball right">
          <p>Work</p>
        </Link>
        <Link to="/resume" className="project-ball right">
          <p>Resume</p>
        </Link>
        <Link to="/education" className="project-ball right">
          <p>Education</p>
        </Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
