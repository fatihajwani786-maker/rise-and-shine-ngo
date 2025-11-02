import React from 'react';
import { Link } from 'react-router-dom'; //
import './CTA.css';  

function CTA() {
  return (
    <section className="cta-section">
      <h2>Join Us in Making a Difference</h2>
      <p>Whether you want to donate, volunteer, or partner with us, every contribution helps.</p>
      <div className="cta-button-group">
        <Link to="/donate" className="btn-cta-primary">Donate Now</Link>
     <button className="btn-cta-secondary">Volunteer With Us</button>
      </div>
    </section>
  );
}

export default CTA;