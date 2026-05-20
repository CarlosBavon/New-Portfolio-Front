import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    const scrollToSection = (section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo" onClick={() => scrollToSection('Home')}>
                    <span className="logo-bracket">{'<'}</span>
                    <span className="logo-text">devbav</span>
                    <span className="logo-bracket">{'/>'}</span>
                </div>

                <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map(link => (
                        <button key={link} onClick={() => scrollToSection(link)} className="nav-link">
                            {link}
                        </button>
                    ))}
                </nav>

                <div className="header-actions">
                    <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle theme">
                        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                    <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;