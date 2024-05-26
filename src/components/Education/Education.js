import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Education.css';
import EducationCard from './EducationCard';
import educat from '../../assets/png/education.webp'; // Import the new image
import { educationData } from '../../data/educationData';

function Education() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{ backgroundColor: theme.secondary }}>
            <div className="education-body">
                <div className="education-description">
                    <h1 style={{ color: theme.primary }}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            locate = {edu.locate}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={educat} alt="Education Illustration" /> {/* Updated the image reference */}
                </div>
            </div>
        </div>
    );
}

export default Education;
