import React from 'react';
import NavBar from './NavBar';
import '../styles.css'; 
import Footer from './Footer';

const Education = () => {
  return (
    <div>
      <NavBar />
      <div className='projectss'>
        <div className="education-header">
          <img src="../images/education.png" alt="Education Logo" className="education-logo" />
          <h1 className="education-title">EDUCATION</h1>
        </div>
        <div className="education-container">
          {/* Masters Box */}
          <div className="education-box">
            <div className='masters-column'>
              <img src="../images/masters.jpg" alt="Masters University" className="university-picture1" />
              <div className="degree-info">
                <h2 className="white-text">Masters</h2>
                <p className="university white-text">University of North Carolina at Charlotte</p>
                <p className="field white-text">Field of Study - Computer Science</p>
                <p className="year white-text">2023 - 2024</p>
              </div>
            </div>
          </div>
          
          {/* Bachelors Box */}
          <div className="education-box">
            <div className='bachelors-column'>
              <img src="../images/bachelors.jpg" alt="Bachelors University" className="university-picture2" />
              <div className="degree-info">
                <h2 className="white-text">Bachelors</h2>
                <p className="university white-text">Malla Reddy Engineering College for Women</p>
                <p className="field white-text">Field of Study - Computer Science</p>
                <p className="year white-text">2017 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Education;
