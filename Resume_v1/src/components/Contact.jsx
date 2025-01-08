// Contact.jsx - Contact form and details section
import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      {/* Contact header */}
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us for any inquiries or collaboration opportunities.</p>
      {/* Form for contacting */}
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;