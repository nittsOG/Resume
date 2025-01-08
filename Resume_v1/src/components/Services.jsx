// Services.jsx - Services or Courses section
import React from 'react';
import '../styles/Services.css';

const Services = () => {
  // Array of services for mapping dynamically
  const services = [
    'Course-1', 'Course-2', 'Course-3', 'Course-4', 'Course-5'
  ];
  return (
    <section id="services">
      {/* Services header */}
      <h2>Our Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          // Each service card rendered dynamically
          <div key={index} className="service-card">
            <h3>{service}</h3>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;