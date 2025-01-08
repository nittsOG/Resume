// About.jsx - About section
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about">
      {/* About section header */}
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      {/* Personal details */}
      <ul>
        <li>Name: Naitik Barot</li>
        <li>Email: naitikbarot1677@gmail.com</li>
        <li>Phone: 1234567891</li>
      </ul>
    </section>
  );
}

export default About;