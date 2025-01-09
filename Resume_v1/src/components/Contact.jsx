import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      {/* Contact header */}
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us for any inquiries or collaboration opportunities.</p>

      <div className="contact-container">
        {/* Contact Details Card */}
        <div className="contact-card">
          <h3 style={{ color: 'black' }}>Contact Details</h3>
          <p><strong>Address:</strong> 123 Main Street, Springfield, USA</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Email:</strong> contact@example.com</p>
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        {/* Map Card */}
        <div className="map-card">
          <h3 style={{ color: 'black' }}>Our Location</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29531.057132116737!2d73.1551043640625!3d22.30138292950799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8a634770de1%3A0xbad8d9ab133e0228!2sDMart!5e0!3m2!1sen!2sin!4v1736399554319!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
