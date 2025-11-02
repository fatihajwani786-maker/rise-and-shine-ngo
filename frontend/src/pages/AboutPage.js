import React from 'react';
import './AboutPage.css'; // We'll create this

function AboutPage() {
  return (
    <main className="about-page">
      <h2>About Rise-and-Shine NGO</h2>

      <section>
        <h3>Our Mission</h3>
        <p>To create a lasting impact in the lives of underprivileged children and communities by providing education, woman empowerment, and livelihood opportunities.</p>
      </section>

      <section>
        <h3>Our Vision</h3>
        <p>A world where every child has access to quality education, healthcare, and the opportunity to achieve their full potential.</p>
      </section>
    </main>
  );
}

export default AboutPage;