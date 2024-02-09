import React, { useState } from 'react';
import '../styles.css';
import NavBar from './NavBar';
import Footer from './Footer';

// Import React Slick styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const [enlargedProject, setEnlargedProject] = useState(null);

  const projects = [
    { image: "../images/diabetes.png", title: "Diabetes Mellitus prediction by Auto AI", description: "The primary goal was to deliver precise estimates of potential complications in diabetes patients, surpassing conventional monitoring methodologies. Leveraging sophisticated tools including Watson Studio, Node-RED, and Watson Machine Learning-V2, we automated AI processes, facilitated dynamic retraining, and meticulously managed models. This project not only showcased technical expertise but also underscored our dedication to impactful outcomes in the realm of predictive healthcare analytics." },
    { image: "../images/springboot.webp", title: "Profanity Shield+ chat application using Springboot", description: "A real-time chat app using Java and Spring Boot, featuring WebSocket for seamless communication. Integrated NLP for AI-driven responses, sentiment analysis to make profanity filter. Demonstrates innovative user engagement features." },
    { image: "../images/kdd.jpg", title: "Movie Data Analysis and Data Mining using Weka", description: "The Movie Rating Analysis project delved into understanding and forecasting consumer ratings for 9,000 movies from the Movies Database. By incorporating four new classification qualities, including cast popularity and release year, we aimed to enhance predictive accuracy. The project involved engineering efficient classifiers with Orange and Weka, utilizing the F-score measure for evaluation. Additionally, an extension to Lisp-Miner provided actionable rules for improving movie ratings. " },
    { image: "../images/tableau.png", title: "Rainfall Analysis in India using Tableau", description: "The Rainfall Analysis project involved several key steps to deliver a comprehensive understanding of rainfall patterns and facilitate informed decision-making: The collected data was processed and visualized using Tableau. This step involved creating meaningful visual representations of rainfall patterns in various States/Union Territories of India. " },
  ];

  const handleProjectClick = (project) => {
    setEnlargedProject(project);
    document.body.classList.add('blurred'); // Add blurred class to body
  };

  const closeProjectDescription = () => {
    setEnlargedProject(null);
    document.body.classList.remove('blurred'); // Remove blurred class from body
  };

  return (
    <div>
      <NavBar/>

      <div className="projects4">
      <h1 className="education-title">PROJECTS</h1>
      <p>Welcome to my projects showcase! Here, you can delve into our latest endeavors and explore the innovative solutions I've developed. Each project represents a journey of creativity, problem-solving, and technological advancement. Click on any project to uncover its unique story and the challenges we've tackled along the way.
        Whether it's predictive analytics, real-time chat applications, or data mining projects, our portfolio reflects our commitment to excellence and our passion for pushing boundaries. Join. </p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-container">
              <div className="project-item" onClick={() => handleProjectClick(project)}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-details">
                  <h3>{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {enlargedProject && (
        <div className="project-popup">
          <div className="project-popup-content">
            <button className="close-btn" onClick={closeProjectDescription}>Close</button>
            <h3>{enlargedProject.title}</h3>
            <p>{enlargedProject.description}</p>
          </div>
        </div>
      )}
    <Footer/>
    </div>
  );
};

export default Projects;
