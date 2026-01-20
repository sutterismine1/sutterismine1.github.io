import React from 'react';
import './Projects.css';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    publicLink?: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: 'Wishify.ca - Full Stack Web Application',
            description: 'Collaborative wishlist platform built with React and TypeScript for the frontend and Node.js with Express and PostgreSQL for the backend. Was developed as a team of 6 over a 12 week period.',
            image: '/assets/project-images/Wishify-Interface.png',
            tags: ['React', 'TypeScript'],
            link: 'https://github.com/Nicholas-Parise/Wishify',
            publicLink: 'https://wishify.ca'
        },
        {
            id: 2,
            title: 'Battleship Solitare Solver',
            description: 'A Python application that solves Battleship Solitaire puzzles using backtracking with forward checking and genetic algorithms. Features a Pygame GUI for user interaction and visualization of the solving process.',
            image: '/assets/project-images/bs.png',
            tags: ['Python', 'Algorithms'],
            link: '#'
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'Description of your third project',
            image: '/images/project3.jpg',
            tags: ['React', 'CSS'],
            link: '#'
        },
        {
            id: 4,
            title: 'Project Four',
            description: 'Description of your fourth project',
            image: '/images/project4.jpg',
            tags: ['Python', 'Flask'],
            link: '#'
        },
        {
            id: 5,
            title: 'Project Five',
            description: 'Description of your fifth project',
            image: '/images/project5.jpg',
            tags: ['Java', 'Spring Boot'],
            link: '#'
        },
        {
            id: 6,
            title: 'Project Six',
            description: 'Description of your sixth project',
            image: '/images/project6.jpg',
            tags: ['C#', '.NET'],
            link: '#'
        }
    ];

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="project-links">
                            <a href={project.link} className="project-link" target='_blank' rel="noopener noreferrer">View Project</a>
                            {project.publicLink && (
                                <a href={project.publicLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                    Live Website
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;