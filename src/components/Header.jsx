import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Your Name</h1>
                <nav>
                    <ul>
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#resume">Resume</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
