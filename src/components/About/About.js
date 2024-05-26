import React, { useContext, useEffect } from 'react';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';

function About() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const circles = document.querySelectorAll('.style-circle');
        circles.forEach(circle => {
            circle.addEventListener('mouseenter', () => {
                circle.classList.add('active');
            });
            circle.addEventListener('mouseleave', () => {
                circle.classList.remove('active');
            });
        });
    }, []);

    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <div className="about-body">
                <div className="about-img">
                    <img
                        src={aboutData.image}
                        alt="About"
                    />
                </div>
                <div className="about-description">
                    <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                    <p style={{ color: theme.tertiary80 }}>{aboutData.description1}<br /><br />{aboutData.description2}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
