import React, { useEffect, useRef } from 'react';
import './SchoolAboutSection.css';

export default function SchoolAboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.sa-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="sa-section" id="about" ref={sectionRef}>
      <div className="sa-container">
        {/* Left: Large heading area */}
        <div className="sa-left sa-animate sa-slide-right">
          <span className="sa-label">About Sri Basara</span>
          <h2 className="sa-heading">
            Where Every Child's
            <span className="sa-heading-accent"> Potential </span>
            Finds Its Purpose
          </h2>
          <div className="sa-stats-inline">
            <div className="sa-stat-inline">
              <strong>20+</strong>
              <span>Years</span>
            </div>
            <div className="sa-stat-divider"></div>
            <div className="sa-stat-inline">
              <strong>2000+</strong>
              <span>Students</span>
            </div>
            <div className="sa-stat-divider"></div>
            <div className="sa-stat-inline">
              <strong>50+</strong>
              <span>Faculty</span>
            </div>
          </div>
        </div>

        {/* Right: Description text */}
        <div className="sa-right sa-animate sa-slide-left sa-delay-2">
          <p className="sa-text">
            The management and the team of Sri Basara Educational Institutions have been incessantly striving to carve out appropriate means to reach coveted academic heights. There has been no compromise regarding infrastructure and other facilities, ensuring our students receive the highest quality education.
          </p>
          <p className="sa-text">
            We foster curiosity, critical thinking, and character — preparing every child to become a responsible and innovative leader of tomorrow. Our holistic approach nurtures academic brilliance alongside strong moral values and creative expression.
          </p>
          <a href="#features" className="sa-link">
            Discover what makes us different
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
