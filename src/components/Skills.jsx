import React from 'react';
import './Skills.css';

const skills = [
    { name: 'JavaScript/ES6', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 85 },
    { name: 'MongoDB', level: 87 },
    { name: 'Express', level: 89 },
    { name: 'HTML5/CSS3', level: 92 },
    { name: 'Git/GitHub', level: 90 }
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="skill-card fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percent">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;