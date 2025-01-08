// Home.jsx - Home page section
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        {/* Welcome text with a short description */}
        <h1>Welcome to my Website</h1>
        <p>Discover my journey as a developer</p>
      </div>
    </section>
  );
}

export default Home;