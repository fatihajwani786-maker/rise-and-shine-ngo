import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Keep Link for "Read More"
import './ProjectsPage.css'; // We'll re-use the same CSS file

function ProjectsPage() {
  // Create state variables to hold projects and loading state
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the API URL from environment, or use local
  const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    // Fetch projects when the page loads
    async function fetchProjects() {
      try {
        const response = await fetch(`${apiUrl}/api/projects/`);
        const data = await response.json();
        setProjects(data); // Set the projects from the API
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [apiUrl]); // Re-run if apiUrl changes

  // Show a loading message
  if (loading) {
    return <main className="projects-page"><h2>Loading projects...</h2></main>;
  }

  // Render the dynamic content
  return (
    <main className="projects-page">
      <h2>Our Projects</h2>
      <p>Showcasing our ongoing and completed projects across different sectors.</p>
      <div className="project-grid">

        {/* Map over the projects from the API instead of the old array */}
        {projects.map(project => (
          <div className="project-card" key={project.id}>

            {/* Use the image URL from the API */}
            <img src={project.image} alt={project.title} />

            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* This link is a placeholder, you can remove it if you want */}
              <Link to={`/projects/${project.id}`}>Read More</Link>
            </div>
          </div>
        ))}

        {/* Show a message if no projects are found */}
        {!loading && projects.length === 0 && (
          <p>No projects found. Please check back later!</p>
        )}

      </div>
    </main>
  );
}

export default ProjectsPage;