import React from 'react';
import './Header.css'; // We will create this file next
import { Link } from 'react-router-dom'; //

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <h1>Rise-and-Shine NGO</h1>
      </div>
      <nav className="navigation-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/programs">Programs</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/media">Media</a></li>
          <li><a href="/get-involved">Get Involved</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <Link to="/donate" className="btn-donate">Donate Now</Link>
      </div>
    </header>
  );
}

export default Header;