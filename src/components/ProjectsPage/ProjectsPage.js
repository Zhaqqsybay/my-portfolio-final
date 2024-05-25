import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectForm from './ProjectForm';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await axios.get('http://localhost:4444/projects', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setProjects(response.data);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  };

  const handleEditProject = (project) => {
    setSelectedProject(project);
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:4444/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      loadProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleSuccess = () => {
    setSelectedProject(null);
    loadProjects();
  };

  return (
    <div>
      <h1>Projects</h1>
      <ProjectForm
        projectId={selectedProject?._id}
        initialData={selectedProject}
        onSuccess={handleSuccess}
      />
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.technologies.join(', ')}</p>
            <button onClick={() => handleEditProject(project)}>Edit</button>
            <button onClick={() => handleDeleteProject(project._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
