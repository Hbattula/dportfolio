import React, { useState } from 'react';
import '../styles.css'; // Import custom CSS for styling
import './work.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from './NavBar';
import Footer from './Footer';

const Certifications = () => {
  const [showCertifications, setShowCertifications] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleToggleCertifications = () => {
    setShowCertifications(!showCertifications);
  };

  // Define an empty handleCertificateClick function for now
  const handleCertificateClick = (imageUrl) => {
    setEnlargedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setEnlargedImage(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false, // Pause autoplay on hover
    pauseOnFocus: false, // Pause autoplay on focus
    vertical: false, // Display images horizontally
    verticalSwiping: false, // Disable vertical swiping
    draggable: false, // Disable dragging
    swipeToSlide: false, // Disable swiping to slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust the number of slides to show on smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Adjust the number of slides to show on even smaller screens
        },
      },
    ],
  };

  return (
    <div style={{ color: 'white', fontFamily: 'Courier New, monospace', padding: '0px', backgroundColor: 'black' }}>
      <NavBar />
      <br/>
      <h1 className="education-title"><center>WORK</center></h1>
      <div className="education-container">
      <div className="education-box">
      <section id="work-experience" style={{ textAlign: 'center' }}>
      <table>
        <thead>
          <tr style={{ border: '2px solid white'}}>
            <th>Year</th>
            <th>Company</th>
            <th>Designation</th>
            <th>Description</th>
            <th>Skills</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left' }}> 2021 - 2022 </td>
            <td><img src="../images/accent.png" alt="Company Logo" style={{ width: '200px', height: 'auto' }} /></td>
            <td> Software Developer </td>
            <td>  <p> •	Developed two critical Express Scripts projects using JavaScript, ReactJS, Spring boot and microservices.</p>
                                                        <p>•	Integrated Spring Boot for optimal UI interface, improving system architecture with microservices.</p>
</td>
            <td> ReactJS, Springboot, NodeJS, MicroServices, Java </td>
          </tr>
        </tbody>
      </table>
    </section>
    </div>
    </div>
    <h2><center>Click here to view Certifications:</center></h2>

    <button
      className="show-certifications-link"
      onClick={handleToggleCertifications}
      style={{
        display: 'block',
        margin: '0 auto',
        backgroundColor: '#66D37A',
        border: 'none',
        color: '#fff',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        animation: 'pulse 1s infinite alternate',
      }}
    >
        {showCertifications ? 'Hide Certifications' : 'Show Certifications'}
      </button>
      {showCertifications && (
        <section id="certifications">
          <div className="certificates-container">
            <Slider {...settings}>
            <div style={{ margin: '0 10px' }}>
              <img className="certificate-image" src="../images/Googlecert1.jpeg" alt="Certificate 1" onClick={() => handleCertificateClick("../images/Googlecert1.jpeg")} />
            </div>
            <div style={{ margin: '0 10px' }}>
            <img 
              className="certificate-image" 
              src="../images/aws.png" 
              alt="Certificate 1" 
              onClick={() => handleCertificateClick("../images/aws.png")} 
              style={{ width: '400px', height: '210px' }} // Apply styles to adjust width and height
            />
            </div>
            <div style={{ margin: '0 10px' }}>
            <img 
              className="certificate-image" 
              src="../images/hackerrank1.png" 
              alt="Certificate 1" 
              onClick={() => handleCertificateClick("../images/hackerrank1.png")} 
              style={{ width: '400px', height: '210px' }} // Apply styles to adjust width and height
            />
            </div>
            <div style={{ margin: '0 10px' }}>
              <img className="certificate-image" src="../images/googlecert2.jpeg" alt="Certificate 2" onClick={() => handleCertificateClick("../images/Googlecert2.jpeg")} />
            </div>
            <div style={{ margin: '0 10px' }}>
              <img className="certificate-image" src="../images/googlecert3.jpeg" alt="Certificate 3" onClick={() => handleCertificateClick("../images/Googlecert3.jpeg")} />
            </div>
            <div style={{ margin: '0 10px' }}>
            <img 
              className="certificate-image" 
              src="../images/hackerrank2.png" 
              alt="Certificate 1" 
              onClick={() => handleCertificateClick("../images/hackerrank2.png")} 
              style={{ width: '400px', height: '210px' }} // Apply styles to adjust width and height
            />
            </div>
            <div style={{ margin: '0 10px' }}>
              <img className="certificate-image" src="../images/googlecert4.jpeg" alt="Certificate 4" onClick={() => handleCertificateClick("../images/Googlecert4.jpeg")} />
            </div>
            <div style={{ margin: '0 10px' }}>
            <img 
              className="certificate-image" 
              src="../images/vmware1.png" 
              alt="Certificate 1" 
              onClick={() => handleCertificateClick("../images/vmware1.png")} 
              style={{ width: '400px', height: '210px' }} // Apply styles to adjust width and height
            />
            </div>
            <div style={{ margin: '0 10px' }}>
              <img className="certificate-image" src="../images/googlecert5.jpeg" alt="Certificate 5" onClick={() => handleCertificateClick("../images/Googlecert5.jpeg")} />
            </div>
            <div style={{ margin: '0 10px' }}>
            <img 
              className="certificate-image" 
              src="../images/vmware2.png" 
              alt="Certificate 1" 
              onClick={() => handleCertificateClick("../images/vmware2.png")} 
              style={{ width: '400px', height: '210px' }} // Apply styles to adjust width and height
            />
            </div>
            <div style={{ margin: '0 10px' }}>
              <img className="certificate-image" src="../images/googlecert6.jpeg" alt="Certificate 6" onClick={() => handleCertificateClick("../images/Googlecert6.jpeg")} />
            </div>
            <div style={{ margin: '0 10px' }}>
              <img className="certificate-image" src="../images/googlecert7.jpeg" alt="Certificate 7" onClick={() => handleCertificateClick("../images/Googlecert7.jpeg")} />
            </div>
            {/* Add more certificate image URLs here */}
            <div style={{ margin: '0 10px' }}>
              <img className="certificate-image" src="../images/googlecert8.jpeg" alt="Certificate 8" onClick={() => handleCertificateClick("../images/Googlecert8.jpeg")} />
            </div>
            <div style={{ margin: '0 10px' }}>
            <img 
              className="certificate-image" 
              src="../images/ibm1.png" 
              alt="Certificate 1" 
              onClick={() => handleCertificateClick("../images/ibm1.png")} 
              style={{ width: '400px', height: '210px' }} // Apply styles to adjust width and height
            />
            </div>
            <div style={{ margin: '0 10px' }}>
              <img className="certificate-image" src="../images/googlecert9.jpeg" alt="Certificate 9" onClick={() => handleCertificateClick("../images/Googlecert9.jpeg")} />
            </div>
            <div style={{ margin: '0 10px' }}>
              <img className="certificate-image" src="../images/googlecert10.jpeg" alt="Certificate 10" onClick={() => handleCertificateClick("../images/Googlecert10.jpeg")} />
            </div>
            </Slider>
          </div>
        </section>
      )}
      {enlargedImage && (
  <div className="enlarged-certificate">
    <div className="enlarged-image">
      <span className="close-button" onClick={handleCloseModal}>&times;</span>
      <img src={enlargedImage} alt="Enlarged Certificate" className="enlarged-image" />
    </div>
  </div>
)}
<Footer/>
    </div>
  );
};

export default Certifications;
