import React from 'react';
import './ContactPage.css'; // We'll create this file next

function ContactPage() {
  return (
    <main className="contact-page">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Whether you have a question, a partnership proposal, or want to get involved, please reach out.</p>

      <div className="contact-container">
        <div className="contact-form-side">
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info-side">
          <h3>Our Office</h3>
          <p>123 Charity Lane, Hope City, 110021, India</p>

          <h3>Call Us</h3>
          <p>+91 123 456 7890</p>

          <h3>Email Us</h3>
          <p>info@riseandshine.org</p>

          {/* This is a simple Google Maps embed. You can change the URL to a real one. */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.942337746747!2d73.84461680209487!3d18.51957018331003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c067fa3b0c9f%3A0x1d1e417e2c9e7fe4!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1678886500000" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;