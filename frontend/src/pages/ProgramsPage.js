import React from 'react';

// We can re-use the AboutPage.css for simple layout
import './AboutPage.css'; 

function ProgramsPage() {
  return (
    <main className="about-page"> {/* Re-using this class is fine */}
      <h2>Our Programs</h2>

      <section>
        <h3>Education for All</h3>
        <p>Initiatives aimed at providing quality education to underprivileged children. This includes setting up schools, providing scholarships, and running after-school programs.</p>
      </section>

      <section>
        <h3>Healthcare Initiatives</h3>
        <p>Health camps, mobile health units, and other community-based health interventions. We focus on preventative care and maternal health.</p>
      </section>

      <section>
        <h3>Livelihood Programs</h3>
        <p>Vocational training and livelihood generation programs for marginalized communities. We empower individuals with the skills they need to earn a sustainable income.</p>
      </section>
    </main>
  );
}

export default ProgramsPage;