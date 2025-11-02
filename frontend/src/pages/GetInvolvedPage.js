import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './GetInvolvedPage.css'; // We'll create this file next

function GetInvolvedPage() {
  return (
    <main className="get-involved-page">
      <h2>Get Involved</h2>
      <p>Your support is vital to our mission. Discover the many ways you can make a difference.</p>

      <div className="involve-grid">

        <Link to="/volunteer" className="involve-card">
          <h3>Volunteer With Us</h3>
          <p>Donate your time and skills to make a direct impact on our projects and events.</p>
          <span>Learn More &rarr;</span>
        </Link>

        <Link to="/partner" className="involve-card">
          <h3>Partner With Us</h3>
          <p>We collaborate with corporations and foundations to create lasting change.</p>
          <span>Learn More &rarr;</span>
        </Link>

        <Link to="/fundraise" className="involve-card">
          <h3>Fundraise for Us</h3>
          <p>Start your own campaign to raise money for a project you're passionate about.</p>
          <span>Learn More &rarr;</span>
        </Link>

        <Link to="/donate" className="involve-card primary-card">
          <h3>Donate Now</h3>
          <p>A direct financial contribution can provide essential supplies, education, and healthcare.</p>
          <span>Give Today &rarr;</span>
        </Link>

      </div>
    </main>
  );
}

export default GetInvolvedPage;