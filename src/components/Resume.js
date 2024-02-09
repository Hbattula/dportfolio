import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import '../styles.css';
import NavBar from './NavBar';
import Footer from './Footer';

const Resume = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    const resumeUrl = 'https://docs.google.com/document/d/1SRl7AU13s0PBiYkC4cPbHrtTyy1Di4Kc/edit?usp=sharing&ouid=105872356720431051062&rtpof=true&sd=true';

    setDownloading(true);

    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);

      window.open(resumeUrl, '_blank');
    }, 2000);
  };

  return (
    <div>
      <NavBar />
      <div className="projects">
        <div className="resume-container">
          <h1 className="resume-title">RESUME</h1>
          <div className="resume-content">
            <img src="https://cdn.vectorstock.com/i/preview-1x/28/48/blue-resume-icon-isolated-on-green-background-cv-vector-26292848.jpg" alt="Resume Icon" className="resume-icon" />
            <p className="resume-message">Please click below to download the resume:</p>
            <button
              onClick={handleDownload}
              disabled={downloading || downloadSuccess}
              className={`resume-button ${downloadSuccess ? 'success' : ''}`}
            >
              {downloading ? 'Downloading...' : downloadSuccess ? 'Downloaded!' : 'Download Resume'}
              <FaDownload style={{ marginLeft: '5px' }} />
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Resume;
