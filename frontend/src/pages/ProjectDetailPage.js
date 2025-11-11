import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`${apiUrl}/api/projects/`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, [apiUrl]);

  if (loading) {
    return <main className="projects-page"><h2>Loading projects...</h2></main>;
  }

  return (
    <main className="projects-page">
      <h2>Our Projects</h2>
      <p>Showcasing our ongoing and completed projects across different sectors.</p>
      <div className="project-grid">

        {projects.map(project => (
          <div className="project-card" key={project.id}>

            {project.image && <img src={project.image} alt={project.title} />}

            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-meta">
                <strong>Category:</strong> {project.category} <br/>
                <strong>Status:</strong> {project.status}
              </div>

              {/* This link will now use the REAL ID (e.g., 4) */}
              <Link to={`/projects/${project.id}`}>Read More</Link>
            </div>
          </div>
        ))}

        {!loading && projects.length === 0 && (
          <p>No projects found. Please check back later!</p>
        )}

      </div>
    </main>
  );
}

export default ProjectsPage;