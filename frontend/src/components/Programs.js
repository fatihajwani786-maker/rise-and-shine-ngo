import React from 'react';
import './Programs.css'; // We will create this file next

function Programs() {
  return (
    <section className="programs-section">
      <h2>Our Programs</h2>
      <div className="programs-container">

        <div className="program-card">
          <h3>Education for All</h3>
          <p>Initiatives aimed at providing quality education to underprivileged children.</p>
          <a href="/programs/education">Learn More</a>
        </div>

        <div className="program-card">
          <h3>Healthcare Initiatives</h3>
          <p>Health camps, mobile health units, and other community-based health interventions.</p>
          <a href="/programs/healthcare">Learn More</a>
        </div>

        <div className="program-card">
          <h3>Livelihood Programs</h3>
          <p>Vocational training and livelihood generation programs for marginalized communities.</p>
          <a href="/programs/livelihood">Learn More</a>
        </div>

      </div>
    </section>
  );
}

export default Programs;