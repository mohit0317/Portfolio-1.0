import React, { useState } from 'react';
import './Skills.css'; // Make sure to import the CSS file for styles

import javascriptIcon from '../../assets/javascript-svgrepo-com.svg';
import reactIcon from '../../assets/react-svgrepo-com.svg';
import reactNativeIcon from '../../assets/react-svgrepo-com.svg';
import nodeIcon from '../../assets/node-svgrepo-com.svg';
import expressIcon from '../../assets/express-delivery-svgrepo-com.svg';
import mongodbIcon from '../../assets/mongodb-svgrepo-com.svg';
import cssIcon from '../../assets/css-3-svgrepo-com.svg';
import htmlIcon from '../../assets/html-5-svgrepo-com.svg';
import bootstrapIcon from '../../assets/bootstrap-fill-svgrepo-com.svg';
import socketIcon from '../../assets/socket-svgrepo-com.svg';
import javaIcon from '../../assets/java-svgrepo-com.svg';
import sqlIcon from '../../assets/sql-database-sql-azure-svgrepo-com.svg';

const skills = [
    { name: 'JavaScript', icon: javascriptIcon, description: 'JavaScript is a versatile programming language used for web development.' },
    { name: 'React', icon: reactIcon, description: 'React is a JavaScript library for building user interfaces, particularly single-page applications.' },
    { name: 'React Native', icon: reactNativeIcon, description: 'React Native is a framework for building mobile applications using React.' },
    { name: 'Node.js', icon: nodeIcon, description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, allowing server-side scripting.' },
    { name: 'Express', icon: expressIcon, description: 'Express is a web application framework for Node.js designed for building web applications and APIs.' },
    { name: 'MongoDB', icon: mongodbIcon, description: 'MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas.' },
    { name: 'CSS', icon: cssIcon, description: 'CSS is a stylesheet language used for describing the presentation of a document written in HTML.' },
    { name: 'HTML', icon: htmlIcon, description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages.' },
    { name: 'Bootstrap', icon: bootstrapIcon, description: 'Bootstrap is a front-end framework for developing responsive and mobile-first websites.' },
    { name: 'Socket.io', icon: socketIcon, description: 'Socket.io is a library for real-time web applications, enabling real-time, bi-directional communication.' },
    { name: 'Java', icon: javaIcon, description: 'Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.' },
    { name: 'SQL', icon: sqlIcon, description: 'SQL (Structured Query Language) is a domain-specific language used in programming for managing relational databases.' },
];

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        if (skill === selectedSkill) {
            setSelectedSkill(null);
        } else {
            setSelectedSkill(skill);
        }
    };

    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skills?.map((skill, index) => (
                    <div
                        className={`skill-card ${selectedSkill && selectedSkill.name === skill.name ? 'selected' : ''}`}
                        key={index}
                        onClick={() => handleSkillClick(skill)}
                    >
                        <img width={30} src={skill.icon} alt={skill.name} className="skill-icon" />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>

            {selectedSkill && (
                <div className="skill-description">
                    <h3>{selectedSkill.name}</h3>
                    <p>{selectedSkill.description}</p>
                </div>
            )}
        </div>
    );
};

export default Skills;
