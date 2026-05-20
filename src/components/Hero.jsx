import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = "Bavon Carlos";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[index]);
                setIndex(index + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content fade-in">
                    <span className="hero-badge">Software Engineer</span>
                    <h1 className="hero-title">
                        Hi, I'm <span className="hero-name">{displayText}</span>
                        <span className="cursor">|</span>
                    </h1>
                    <p className="hero-subtitle">
                        Building scalable web applications with modern tech stack.
                        Passionate about creating elegant solutions to complex problems.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-graphic">
                    <div className="floating-shape"></div>
                    <div className="floating-shape delay"></div>
                    <div className="code-brackets">{`{ devbav }`}</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;