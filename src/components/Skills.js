import React from 'react';
import NavBar from './NavBar';
import '../styles.css';
import Footer from './Footer';

const Skills = () => {
  return (
    <div><NavBar />
      <div>
        <h1 style={{ fontFamily: 'Courier New, monospace', fontWeight: 'bold', marginTop: '-140px', animation: 'fadeIn 1s ease' }}>SKILLS</h1>
      </div>
      <div className="projects5">
      <div className="skills-container">
        <div className="column">
          <img src="../images/codelogo.png" alt="Languages Logo" className="logo" />
          <h2>Languages</h2>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++/C</li>
            <li>Apex</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>XML</li>
          </ul>
        </div>
        <div className="column">
          <img src="https://img.freepik.com/premium-vector/gear-machine-work-technology-industry-outline-icon-vector-illustration_678192-2292.jpg?w=2000" alt="Technologies Logo" className="logo" />
          <h2>Framework</h2>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Angular</li>
            <li>Django</li>
            <li>Springboot</li>
            <li>Flask</li>
            <li>ReactNative</li>
            <li>Tkinter</li>
            <li>Express.js</li>
            <li>SalesForce</li>
          </ul>
        </div>
        <div className="column">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/2048px-Circle-icons-tools.svg.png" alt="Tools Logo" className="logo" />
          <h2>Tools</h2>
          <ul>
            <li>VS Code</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Redux</li>
            <li>Apache Kafka</li>
            <li>Eclipse</li>
            <li>Jenkins</li>
            <li>JUnit</li>
            <li>Devtools</li>
          </ul>
        </div>
        <div className="column">
          <img src="https://icones.pro/wp-content/uploads/2021/05/icone-base-donnees-verte.png" alt="Databases Logo" className="logo" />
          <h2>Databases</h2>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>SQLite</li>
            <li>Dynamo DB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="column">
          <img src="https://cdn.pixabay.com/photo/2014/04/02/11/11/cloud-305461_1280.png" alt="Cloud Logo" className="logo" />
          <h2>Cloud</h2>
          <ul>
            <li>AWS</li>
            <li>Azure</li>
            <li>IBM Cloud</li>
            <li>GCP</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Skills;
