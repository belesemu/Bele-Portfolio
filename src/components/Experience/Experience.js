import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css';
import { experienceData } from '../../data/experienceData';
import ExperienceCard from './ExperienceCard';
import experienceNew from '../../assets/png/experiance2.webp'; // Import the new image

function Experience() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{ backgroundColor: theme.secondary }}>
            <div className="experience-body">
                <div className="experience-image">
                    <img src={experienceNew} alt="Experience Illustration" className="thin-long-image" /> {/* Use the new image */}
                </div>
                <div className="experience-description">
                    <h1 style={{ color: theme.primary }}>Experience</h1>
                    {experienceData.map(exp => (
                        <ExperienceCard
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                            locate={exp.locate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
