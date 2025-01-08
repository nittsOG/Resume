// Portfolio.jsx - Portfolio or Projects section
import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  // List of projects to showcase
  const projects = [
    { title: 'GTA 6', description: 'Most awaited game of 2025.' },
    { title: 'Ironman Prototype', description: 'Ironman suit by Tony Stark.' },
    { title: 'BlackMyth Wukong', description: 'Upcoming action role-playing game.' }
  ];
  return (
    <section id="portfolio">
      {/* Portfolio section header */}
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          // Each project displayed dynamically
          <div key={index} className="portfolio-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;