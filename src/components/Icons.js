// Icons.js
import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="icons">
      <a href="https://github.com/Hbattula" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="hbattula55@gmail.com">
        <FaEnvelope />
      </a>
      <a href="https://linkedin.com/in/hamsini-battula" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Icons;
