// Home.jsx - Home page section
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <div className="blur-container">
          <h1>Hi, I'm Naitik Barot</h1>
          <p>A passionate Web Developer and Designer</p>
          <p className="tagline">Transforming ideas into reality with code</p>
          <button className="explore-btn" ><Link to="/portfolio">Explore My Work</Link></button>
        </div>
      </div>
    </section>
  );
}

export default Home;
