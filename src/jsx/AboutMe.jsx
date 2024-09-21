import React, { useEffect, useState, useRef } from 'react';
import '../css/AboutMe.css';
import headshot from '../assets/converted/headshot2.jpg';

function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);
    const [animateText, setAnimateText] = useState(false); // State for text animation
    const aboutMeRef = useRef(null);
    const helloTextRef = useRef(null); // New ref for text animation
    const fullText = "hi, im truman.";

    const handleScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isVisible) {
                    setIsVisible(true);
                    setAnimateText(true); // Trigger text animation when section is in view
                }
            } else {
                if (isVisible) {
                    setIsVisible(false); // Reset visibility when out of view
                    setAnimateText(false); // Reset text animation when out of view
                }
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll);
        if (aboutMeRef.current) {
            observer.observe(aboutMeRef.current);
        }

        return () => {
            if (aboutMeRef.current) {
                observer.unobserve(aboutMeRef.current);
            }
        };
    }, [isVisible]);

    return (
        <section id="about-me" className={`about-me wrapper ${isVisible ? 'animate' : ''}`} ref={aboutMeRef}>
            <h2 className="about-title">about me</h2>
            <div className="container">
                <div className="description">
                    <br />
                    <p className={`hello-text ${animateText ? 'animate' : ''}`} ref={helloTextRef}>
                        {animateText ? fullText : ''}
                    </p>
                    <p className="transition-text">a <span className="highlight-dev">full-stack developer</span> currently pursuing a double degree, studying honours in CS at <span className="highlight-york">York University</span> and management at <span className="highlight-schulich">Schulich</span> in my final year.</p>
                    <p className="life-text">outside of coding, I often spend my time working out or trying to be a gourmet chef</p>
                    <p className="life-text2">you might even catch me at a random park at 6am hiking, planning a getaway trip in a foreign country</p>
                    <p className="life-text3">feel free to check out some of my work and contact me!</p>
                    <p className="life-emoji">🍳 🏋️ 👨‍🍳 🥾 🏞️ 🏕 ✈️ 🌎 🐱‍💻</p>
                </div>
                <div className="image-container">
                    <img src={headshot} alt="Headshot" className="headshot" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
