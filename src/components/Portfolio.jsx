import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <h2>Portfolio</h2>
                <div className="projects">
                    <div className="project">
                        <img src="path/to/project1.jpg" alt="Project 1" />
                        <div className="project-info">
                            <h3>Project 1</h3>
                            <p>Description of Project 1</p>
                            <div className="project-links">
                                <a href="link-to-live-project1" target="_blank" rel="noopener noreferrer">Live Project</a>
                                <a href="link-to-github-project1" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src="path/to/project2.jpg" alt="Project 2" />
                        <div className="project-info">
                            <h3>Project 2</h3>
                            <p>Description of Project 2</p>
                            <div className="project-links">
                                <a href="link-to-live-project2" target="_blank" rel="noopener noreferrer">Live Project</a>
                                <a href="link-to-github-project2" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                    {/* Add more projects as needed */}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
