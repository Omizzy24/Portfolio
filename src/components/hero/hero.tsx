'use client';

import { useRef, useEffect, useState } from 'react';
import { Link } from 'lucide-react'; // Placeholder for icons

import './hero.css';
import Typed from 'typed.js'; // Import Typed.js

export default function Hero() {
    const el = useRef(null);
    const [mounted, setMounted] = useState(false);

    // Ensure code runs only after mounting on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            const typed = new Typed(el.current, {
                strings: [
                    'Exploring Within',
                    'a Data Analyst',
                    'a Machine Learning Engineer',
                    'a Data Engineer',
                    'a Software Engineer',
                    'a Cloud Architect',
                    'a Full Stack Developer',
                    'an Artist',
                ],
                typeSpeed: 150,
                backSpeed: 60,
                backDelay: 1000,
                loop: true,
            });

            return () => {
                typed.destroy();
            };
        }
    }, [mounted]);

    if (!mounted) {
        return null; // Loading state during SSR
    }

    return (
        <>
            <div id="hero" className="hero">
                <div className="container">
                    <div className="text-container">
                        <h1>
                            Hi, my name is <span>Omar Al-Shammary</span>
                            <br />
                            I&apos;m{' '}
                            <span id="role" ref={el} />
                        </h1>
                        <div className="cta-buttons">
                            <a className="button" href="#about">
                                Know More
                            </a>
                        </div>
                    </div>
                    <div className="headshot-container">
                        <img
                            className="headshot"
                            src="/headshot.jpg" // Placeholder image
                            alt="Omar Al-Shammary"
                        />
                    </div>
                    <div className="social-icons-container">
                        <div className="social-icons">
                            <a href="#" className="icon-box">
                                <Link /> {/* Placeholder for icons */}
                            </a>
                            {/* Add other icons here later */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="px50" />
            <div className="px50" id="about" />
        </>
    );
}





