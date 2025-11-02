import React from 'react';
import './Footer.css'; // We will create this file next

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>Rise-and-Shine NGO</h3>
          <p>Empowering lives and creating opportunities for underprivileged communities.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/donate">Donate</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          {/* These are placeholder links */}
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Stay updated with our latest news.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Rise-and-Shine NGO. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;