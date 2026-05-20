import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="logo-bracket">{'<'}</span>
                        <span>devbav</span>
                        <span className="logo-bracket">{'/>'}</span>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/devbav" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                        <a href="https://linkedin.com/in/devbav" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                        <a href="https://twitter.com/devbav" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
                        <a href="mailto:bavon.carlos@devbav.com"><FiMail /></a>
                    </div>
                    <p>&copy; {currentYear} devbav. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;