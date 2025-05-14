'use client';

import { useState, useEffect } from 'react';
import './navbar.css';
import { FaSun, FaMoon, FaBook, FaPlug } from 'react-icons/fa'; // Import Font Awesome icons

interface Link {
    name: string;
    url: string;
}

export default function Navbar({ links }: { links: Link[] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentMode, setCurrentMode] = useState<'light' | 'dark' | 'sepia' | 'neon'>('light');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const handleModeToggle = () => {
        const nextMode = currentMode === 'light'
            ? 'dark'
            : currentMode === 'dark'
            ? 'sepia'
            : currentMode === 'sepia'
            ? 'neon'
            : 'light';
        setCurrentMode(nextMode);
        localStorage.setItem('mode', nextMode);
    };

    useEffect(() => {
        const storedMode = localStorage.getItem('mode') as 'light' | 'dark' | 'sepia' | 'neon';
        if (storedMode) {
            setCurrentMode(storedMode);
        }
    }, []);

    return (
        <nav className={`navbar ${currentMode}-mode`}>
            <div className="navbar-logo">OA</div>
            <div className="navbar-right">
                <ul id="navbarNoDropdown" className={isMenuOpen ? 'active' : ''}>
                    {links.map((link) => (
                        <li key={`link-${link.name}`}>
                            <a href={link.url} onClick={handleLinkClick} className="navbar-link">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button className="mode-toggle" onClick={handleModeToggle}>
                {/* Replace emojis with Font Awesome icons */}
                {currentMode === 'light' && <FaMoon />}
                {currentMode === 'dark' && <FaSun />}
                {currentMode === 'sepia' && <FaBook />}
                {currentMode === 'neon' && <FaPlug />}
            </button>
        </nav>
    );
}
