import React from 'react';
import './ProjectsPage.css'; // We'll create this file next

function ProjectsPage() {
  // This data could one day come from your Django API!
  const projects = [
    {
      id: 1,
      title: 'Project Bright Start (Education)',
      description: 'Providing 5,000 children with school supplies and scholarships.',
      image: 'https://images.unsplash.com/photo-1542810634-71277d912E5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400'
    },
    {
      id: 2,
      title: 'Community Health Camps (Health)',
      description: 'Running mobile health camps that have served 10,000+ patients in rural areas.',
      image: 'https://images.unsplash.com/photo-1584432248880-08c339f727c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400'
    },
    {
      id: 3,
      title: 'EmpowerHer (Women Empowerment)',
      description: 'Vocational training in tailoring and IT for 500 women, enabling financial independence.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288c649414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400'
    }
  ];

  return (
    <main className="projects-page">
      <h2>Our Projects</h2>
      <p>Showcasing our ongoing and completed projects across different sectors.</p>
      <div className="project-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={`/projects/${project.id}`}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProjectsPage;