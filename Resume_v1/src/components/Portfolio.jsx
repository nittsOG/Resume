import React from 'react';
import '../styles/Portfolio.css';
import project1 from '../assets/images/project1.png'; 
import project2 from '../assets/images/project2.png';  
import project3 from '../assets/images/project3.png';  

const Portfolio = () => {
  const projects = [
    {
      title: 'Smart Student',
      description: 'Smart Student Information System is a web-based application developed to manage student information and provide a platform for students to interact with teachers and other students.',
      image: project1,  
      link: 'https://github.com/nittsOG/smis.git',
      role: 'Backend Developer',
      techStack: ['Java', 'Spring', 'MySQL', 'Hibernate']
    },
    {
      title: 'Kavach',
      description: 'Kavach is a mobile application developed for Deepfake Detection.',
      image: project2,
      link: 'https://github.com/parthiv11/KAVACH.git',
      role: 'Backend Developer',
      techStack: ['React Native', 'Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'My Portfolio',
      description: 'A simple portfolio website developed using React.',
      image: project3,
      link: 'https://github.com/nittsOG/Resume.git',
      role: 'Full Stack Developer',
      techStack: ['JavaScript', 'React', 'HTML', 'CSS']
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-details">
              <h3 id='porth3'>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
              <a href={project.link} className="portfolio-link" target='_blank' rel='noopener noreferrer'>Go To Source</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
