// About.jsx - About section
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about">
      {/* About section header */}
      <h2 style={{ color: 'white' }}>About Me</h2>
      <div className="about-container">

        {/* Introduction Card */}
        <div className="about-card">
          <h2 className="card-header">Introduction</h2>
          <div className="card-content">
            <p><h3>I'm Naitik Barot, a passionate web developer and designer with expertise in building scalable and visually appealing web applications. I focus on transforming ideas into digital products while continuously learning new technologies.</h3></p>
          </div>
        </div>

        {/* Skills and Expertise Card */}
        <div className="about-card">
          <h2 className="card-header">Skills and Expertise</h2>
          <div className="card-content">
            <h3>
            <ul>
              <li>Web Development with Java Spring Boot</li>
              <li>JavaScript, React, Node.js, Express.js</li>
              <li>MERN Stack Development</li>
              <li>Databases: MySQL, MongoDB</li>
            </ul>
            </h3>
          </div>
        </div>

        {/* Education Card */}
        <div className="about-card">
          <h2 className="card-header">Education</h2>
          <div className="card-content">
            <h2>
            <p>Bachelor of Technology (B.Tech) in Computer Science</p>
            <p>Parul University, Vadodara, Gujarat</p></h2>
            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471287.2393640827!2d72.63266443331771!3d22.656340312707894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fda2400192473%3A0xc319c9237f2928e8!2sParul%20University!5e0!3m2!1sen!2sin!4v1736364397465!5m2!1sen!2sin" width="100%" height="250" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;