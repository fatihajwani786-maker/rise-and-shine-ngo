import React, { useState, useEffect } from 'react';
import './AboutPage.css'; // We'll update this CSS file next

function AboutPage() {
  // Create state variables to hold our content
  const [content, setContent] = useState(null);
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the API URL from environment, or use local
  const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    // Fetch both sets of data when the page loads
    async function fetchData() {
      try {
        // Fetch text content
        const contentResponse = await fetch(`${apiUrl}/api/about/content/`);
        const contentData = await contentResponse.json();
        setContent(contentData);

        // Fetch team members
        const teamResponse = await fetch(`${apiUrl}/api/about/team/`);
        const teamData = await teamResponse.json();
        setTeam(teamData);

      } catch (error) {
        console.error('Error fetching About Us data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [apiUrl]); // Re-run if apiUrl changes

  // Show a loading message
  if (loading) {
    return <main className="about-page"><h2>Loading...</h2></main>;
  }

  // Show an error if data couldn't be fetched
  if (!content) {
    return <main className="about-page"><h2>Error loading content.</h2></main>;
  }

  // Render the dynamic content
  return (
    <main className="about-page">
      <h2>{content.intro_text}</h2>

      <section>
        <h3>Our History</h3>
        <p>{content.history_text}</p>
      </section>

      <section>
        <h3>Our Core Values</h3>
        <p>{content.core_values_text}</p>
      </section>

      <section>
        <h3>Areas of Focus</h3>
        <p>{content.areas_of_focus_text}</p>
      </section>

      <section>
        <h3>Our Impact</h3>
        <p>{content.impact_text}</p>
      </section>

      <section className="team-section">
        <h3>Meet Our Team</h3>
        <div className="team-grid">
          {team.map(member => (
            <div className="team-card" key={member.id}>
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p className="team-role">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section-about">
        <h3>{content.cta_text}</h3>
        {/* You can add a <Link> button here */}
      </section>
    </main>
  );
}

export default AboutPage;