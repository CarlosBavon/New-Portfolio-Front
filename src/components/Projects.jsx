import React, { useState, useEffect } from 'react';
import { fetchProjects, incrementProjectClick } from '../services/api';
import { FiGithub, FiExternalLink, FiMousePointer } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {
            const { data } = await fetchProjects();
            setProjects(data);
        } catch (error) {
            console.error('Projects error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleProjectClick = async (id, url) => {
        try {
            await incrementProjectClick(id);
            window.open(url, '_blank');
        } catch (error) {
            console.error('Click increment error:', error);
            window.open(url, '_blank');
        }
    };

    if (loading) return <div className="loading">Loading projects...</div>;

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div key={project._id} className="project-card fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="project-image">
                                <img src={project.imageUrl} alt={project.title} />
                                <div className="project-overlay">
                                    <button onClick={() => handleProjectClick(project._id, project.liveUrl)} className="overlay-btn">
                                        <FiExternalLink /> Live Demo
                                    </button>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                                        <FiGithub /> GitHub
                                    </a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-stats">
                                    <span><FiMousePointer /> {project.clickCount} clicks</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;