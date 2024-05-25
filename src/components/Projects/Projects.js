import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "React task5",
    technologies: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/Zhaqqsybay/react-task5",
    demo: "https://react-task5-eta-lime.vercel.app/",
    image: "/images/Project1.png"
  },
  {
    id: 2,
    title: "Project 2",
    description: "React task7",
    technologies: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/Zhaqqsybay/react__task7",
    demo: "https://react-task7-nine.vercel.app/",
    image: "/images/Project2.png"
  },
  {
    id: 3,
    title: "Project 3",
    description: "React task8",
    technologies: ["HTML", "JavaScript", "CSS", "MDX"],
    github: "https://github.com/Zhaqqsybay/react-task8",
    demo: "https://react-task8.vercel.app/",
    image: "/images/Project3.png"
  },
  {
    id: 4,
    title: "Project 4",
    description: "Tic-Tac-Toe-game",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Zhaqqsybay/Tic-Tac-Toe-game",
    demo: "tic-tac-toe-game-red-psi.vercel.app",
    image: "/images/Project4.png"
  },
  {
    id: 5,
    title: "Project 5",
    description: "React task10",
    technologies: ["React", "Firebase", "Node.js"],
    github: "https://github.com/Zhaqqsybay/react-task10",
    demo: "https://react-task10.vercel.app/",
    image: "/images/Project5.png"
  },
  {
    id: 6,
    title: "Project 6",
    description: "Copy of Apple website",
    technologies: ["Java", "HTML", "CSS"],
    github: "https://github.com/Zhaqqsybay/apple",
    demo: "apple-ecru-omega.vercel.app",
    image: "/images/Project6.png"
  }
];

function Projects() {
  return (
    <div className="projects-container">
      {projectsData.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-icons">
              <i className="bi bi-github" onClick={() => window.open(project.github, "_blank")}></i>
              <i className="fas fa-external-link-alt" onClick={() => window.open(project.demo, "_blank")}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
