import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <div className="container">
                <h2>Resume</h2>
                <div className="proficiencies">
                    <h3>Proficiencies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        {/* Add more proficiencies as needed */}
                    </ul>
                </div>
                <div className="experience">
                    <h3>Experience</h3>
                    <ul>
                        <li>
                            <h4>Company Name</h4>
                            <p>Position: Web Developer</p>
                            <p>Duration: January 2020 - Present</p>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat arcu vel ipsum vehicula.</p>
                        </li>
                        {/* Add more work experiences as needed */}
                    </ul>
                </div>
                <div className="education">
                    <h3>Education</h3>
                    <ul>
                        <li>
                            <h4>University Name</h4>
                            <p>Degree: Bachelor of Science in Computer Science</p>
                            <p>Duration: September 2016 - May 2020</p>
                        </li>
                        {/* Add more education details as needed */}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Resume;
