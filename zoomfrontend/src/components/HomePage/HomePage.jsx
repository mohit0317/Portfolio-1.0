import React, { useState, useEffect } from 'react';
import './HomePage.css';
import instagram from "../../assets/instagram-svgrepo-com.svg";
import linkedIn from '../../assets/linkedin-logo-thin-svgrepo-com.svg';
import github_icon from "../../assets/github-svgrepo-com.svg";
import mail_icon from "../../assets/email-svgrepo-com.svg";
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function HomePage() {
    const [fontIndex, setFontIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const fonts = [
        'Dancing Script',
        'Satisfy',
        'Quicksand',
        'Playful',
        'Sofia',
        'Alex Brush',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
                setFade(true);
            }, 500);
        }, 2000);

        return () => clearInterval(interval);
    }, [fonts.length]);

    return (
        <div className="home-page">
            <div className="content">
                <p className="hello">Hello, I'm</p>
                <h1
                    className={`display-4 text-white ${fade ? 'fade-in' : 'fade-out'}`}
                    style={{ fontFamily: fonts[fontIndex] }}
                >
                    Mohit Khodse 🤟
                </h1>
                <div>
                    <p className="lead">MERN Stack developer</p>
                    <div className='icon-container'>
                        <a href="https://www.instagram.com/mohitkhodse44/" target="_blank" rel="noopener noreferrer">
                            <img className='icon_images' src={instagram} width={30} alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/in/mohituk44/" target="_blank" rel="noopener noreferrer">
                            <img className='icon_images' src={linkedIn} width={30} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/mohitkhodse44" target="_blank" rel="noopener noreferrer">
                            <img className='icon_images' src={github_icon} width={30} alt="GitHub" />
                        </a>
                        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                            <img className='icon_images' src={mail_icon} width={35} alt="Email" />
                        </a>
                    </div>
                </div>
                <AboutMe />
            </div>

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <Projects />

            <Contact />
        </div>
    );
}

export default HomePage;
