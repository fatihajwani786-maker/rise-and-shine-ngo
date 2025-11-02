import React from 'react';
import './ImpactStats.css'; // We will create this file next

function ImpactStats() {
  return (
    <section className="impact-stats">
      <div className="stat-item">
        <h3>10,000+</h3>
        <p>Children Educated</p>
      </div>
      <div className="stat-item">
        <h3>5,000+</h3>
        <p>Families Provided Healthcare</p>
      </div>
      <div className="stat-item">
        <h3>25+</h3>
        <p>Sustainable Projects</p>
      </div>
    </section>
  );
}

export default ImpactStats;