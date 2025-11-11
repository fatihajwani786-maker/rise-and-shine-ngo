import React from 'react';
import './Programs.css';
import { Link } from 'react-router-dom'; // This import is correct

function Programs() {
  return (
    <section className="programs-section">
      <h2>Our Programs</h2>
      <div className="programs-container">

        <div className="program-card">
          <h3>Education for All</h3>
          <p>Initiatives aimed at providing quality education to underprivileged children.</p>
          {/* --- CHANGE THIS --- */}
          <Link to="/programs">Learn More</Link>
        </div>

        <div className="program-card">
          <h3>Healthcare Initiatives</h3>
          <p>Health camps, mobile health units, and other community-based health interventions.</p>
          {/* --- AND THIS --- */}
          <Link to="/programs">Learn More</Link>
        </div>

        <div className="program-card">
          <h3>Livelihood Programs</h3>
          <p>Vocational training and livelihood generation programs for marginalized communities.</p>
          {/* --- AND THIS --- */}
          <Link to="/programs">Learn More</Link>
        </div>

      </div>
    </section>
  );
}

export default Programs;