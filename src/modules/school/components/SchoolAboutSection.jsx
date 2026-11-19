import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

    const elements = sectionRef.current?.querySelectorAll('.sa-animate') || [];
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
          <span className="sa-label">Sri Basara Leads International School</span>
          <h2 className="sa-heading">
            Discover
            <span className="sa-heading-accent"> Potential. </span>
            Develop Excellence. Lead the Future.
          </h2>
          <div className="sa-stats-inline">
            <div className="sa-stat-inline">
              <strong>Nursery - X</strong>
              <span>Grades Offered</span>
            </div>
            <div className="sa-stat-divider"></div>
            <div className="sa-stat-inline">
              <strong>CBSE & State</strong>
              <span>Curriculum Pathways</span>
            </div>
            <div className="sa-stat-divider"></div>
            <div className="sa-stat-inline">
              <strong>7 Pillars</strong>
              <span>Learning Approach</span>
            </div>
          </div>
        </div>

        {/* Right: Description text */}
        <div className="sa-right sa-animate sa-slide-left sa-delay-2">
          <p className="sa-text">
            <strong>Sri Basara Leads International School</strong> is committed to providing meaningful, child-centred, and future-focused education from Nursery to Grade X. We believe that every child is unique and possesses tremendous potential. Our responsibility is to recognise that potential, nurture individual talents, and create opportunities for every learner to grow academically, socially, emotionally, physically, and creatively.
          </p>
          <p className="sa-text">
            Our educational approach blends strong academic foundations with modern teaching methodologies, technology-enabled learning, AI, Robotics, and value-based education. We do not simply prepare students for examinations; we prepare them for life.
          </p>
          <Link to="/school/about" className="sa-link">
            Explore our Vision, Mission & 7-Pillar Learning Approach
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
