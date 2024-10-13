import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'BlogBeacon',
        description: 'A blog posting application built with React.js, Node.js, Express, and MongoDB, featuring JWT token verification and Mongoose for database interactions.',
        skills: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    },
    {
        title: 'Tomato',
        description: 'A food application developed using React.js, Node.js, Express, and MongoDB. It includes JWT token authentication and Stripe for payment processing.',
        skills: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Stripe'],
    },
    {
        title: 'ChatHive',
        description: 'A chatting application developed using Socket.io for real-time communication, along with React.js and Node.js.',
        skills: ['JavaScript', 'React', 'Node.js', 'Socket.io'],
    },
];

const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="card" key={index}>
                        <h5 className="card-header">{project.title}</h5>
                        <div className="card-body">
                            <p className="card-text">{project.description}</p>
                        </div>
                        <div className="skills-overlay">
                            <h6>Skills Used:</h6>
                            <p>{project.skills.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
