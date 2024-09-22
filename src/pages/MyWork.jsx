import React, { useEffect, useRef } from 'react';
import '../css/MyWork.css';

function MyWork() {
    const timelineRef = useRef(null);

    useEffect(() => {
        const timelineElements = document.querySelectorAll('.timeline-component, .timeline-middle');
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log(entry); // Log the entry to see if it's being detected
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    } else {
                        entry.target.classList.remove('in-view');
                    }
                });
            },
            { threshold: 0.1 }
        );
    
        timelineElements.forEach((element) => observer.observe(element));
    
        return () => observer.disconnect();
    }, []);
    

    return (
        <section className="design-section" ref={timelineRef}>
            <div className="timeline">
                {/* Empty div for spacing */}
                <div className="timeline-empty"></div>

                {/* Timeline middle with circle */}
                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                {/* Timeline content components */}
                <div className="timeline-component timeline-content">
                    <h3>Mobile Dev @ ITMZ</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis, iusto id incidunt dolores blanditiis perferendis rerum nihil autem repudiandae, et distinctio? Possimus neque quidem ut dolorem, facere repellendus esse.</p>
                </div>

                <div className="timeline-component timeline-content">
                    <h3>Self-Driving Car Using Neural Network</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis, iusto id incidunt dolores blanditiis perferendis rerum nihil autem repudiandae, et distinctio? Possimus neque quidem ut dolorem, facere repellendus esse.</p>
                </div>

                {/* Timeline middle with circle */}
                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                <div className="timeline-empty"></div>
                <div className="timeline-empty"></div>

                {/* Another timeline middle with circle */}
                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                <div className="timeline-component timeline-content">
                    <h3>Virtual Mouse</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis, iusto id incidunt dolores blanditiis perferendis rerum nihil autem repudiandae, et distinctio? Possimus neque quidem ut dolorem, facere repellendus esse.</p>
                </div>

                <div className="timeline-component timeline-content">
                    <h3>IDK Last Project</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis, iusto id incidunt dolores blanditiis perferendis rerum nihil autem repudiandae, et distinctio? Possimus neque quidem ut dolorem, facere repellendus esse.</p>
                </div>
            </div>
        </section>
    );
}

export default MyWork;
