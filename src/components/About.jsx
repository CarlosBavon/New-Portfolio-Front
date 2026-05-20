import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm <strong>Bavon Carlos (devbav)</strong>, a passionate Software Engineer with expertise in full-stack development.
                            I love turning complex problems into simple, beautiful, and intuitive solutions.
                        </p>
                        <p>
                            With a strong foundation in MERN stack and modern JavaScript, I've built numerous web applications
                            that are used by thousands of users. I'm constantly learning and exploring new technologies to
                            stay at the forefront of web development.
                        </p>
                        <p>
                            When I'm not coding, you can find me contributing to open-source, writing technical blogs,
                            or mentoring aspiring developers.
                        </p>
                    </div>
                    <div className="about-highlights">
                        <div className="highlight-card">
                            <span className="highlight-number">3+</span>
                            <span>Years Experience</span>
                        </div>
                        <div className="highlight-card">
                            <span className="highlight-number">20+</span>
                            <span>Projects Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;